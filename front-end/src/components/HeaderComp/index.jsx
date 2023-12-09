import React from "react";
import { Badge, Col,Popover } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAcount,
  WrapperTextHeaderSmall,
  WrapperHeaderNavbar,
  WrapperHeaderNavbarList,
  WrapperHeaderNavbarItem,
} from "./styles.js";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
  FacebookOutlined,
  InstagramOutlined,
  BellOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useMemo } from "react";
import * as userService from "../../services/userService"
import { resetUser } from "../../redux/slides/userSlide";
import { useEffect } from "react";
import { searchProduct } from "../../redux/slides/productSlide.js";



function HeaderComponent() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log("user",user);
  const dispatch = useDispatch();
  const [namee, setNamee] = useState('')
  const [avatarr, setAvatarr] = useState('')
//  const order = useSelector((state) => state.order)
  const handleNavgLogin = () => {
    navigate("/sign-in");
  };
  const handleNavgSignUp = () => {
    navigate("/sign-up");
  };

  const handleLogoutUser = async() =>{
    await userService.logoutUser();
    dispatch(resetUser())
  }
  
  useEffect(() =>{
      setNamee(user?.name)
      setAvatarr(user?.avatar)
  }, [user?.name, user?.avatar])

  const content = (
    <div >
      <p style={{cursor: "pointer"}} onClick={() => {navigate("/account")} } >Tài khoản của tôi</p>
      {user?.isAdmin &&(
        <p style={{cursor: "pointer"}} onClick={() => {navigate("/system/admin")} } >Quản lý hệ thống</p>
      )}
      <p style={{cursor: "pointer"}} onClick={handleLogoutUser}>Đăng xuất</p>
    </div>
  );
  const [arrow, setArrow] = useState('Show');
  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }
    if (arrow === 'Show') {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  //searchInput
  const [search, setSearch] = useState("")

  const onSearch = (e) =>{
    console.log("input", e.target.value)
    setSearch(e.target.value)
    // dispatch(searchProduct(e.target.value))
  }
const onClickSearch = () =>{
  dispatch(searchProduct(search))
}

  return (
    <div style={{ backgroundColor: "var(--primary-color)" }}>
      <WrapperHeaderNavbar className="grid">
        <WrapperHeaderNavbarList>
          <WrapperHeaderNavbarItem>
            Chào mừng đến với cửa hàng{" "}
          </WrapperHeaderNavbarItem>
          <WrapperHeaderNavbarItem>
            <span>Kết nối</span>
            <a
              href="https://www.facebook.com/"
              style={{ display: "block", margin: "0 5px" }}
            >
              <FacebookOutlined style={{ color: "#fff", fontSize: "16px" }} />
            </a>

            <a
              href="https://www.instagram.com/Shopee_VN"
              style={{ display: "block" }}
            >
              <InstagramOutlined style={{ color: "#fff", fontSize: "16px" }} />
            </a>
          </WrapperHeaderNavbarItem>
        </WrapperHeaderNavbarList>

        <WrapperHeaderNavbarList>
          <WrapperHeaderNavbarItem>
            <BellOutlined style={{ padding: "0 5px" }} />
            <span>Thông báo</span>
          </WrapperHeaderNavbarItem>

          <WrapperHeaderNavbarItem>
            <QuestionCircleOutlined style={{ padding: "0 5px" }} />
            <span>Trợ giúp</span>
          </WrapperHeaderNavbarItem>

          <WrapperHeaderNavbarItem>
          <WrapperHeaderAcount>
            {avatarr ? (<img src={avatarr} alt="ảnh đại diện"style={{
                        height: '30px',
                        width: '30px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                    }}  />)
            : (<UserOutlined style={{ fontSize: "30px" }} />)}
            
            {user?.name ? ( //kiểm tra xem nếu có user.name(người dùng đã đăng nhập ) thì hiển thị th1; ko thì th2
              <div>
                  <Popover
                    placement="bottom"
                    trigger="click"
                    content={content}
                    arrow={mergedArrow}
                  > 
                <div style={{ cursor: "pointer" , fontSize:"14px"} }>{namee || "User"}</div>
                  </Popover>
                </div>
              
            ) : (
              <div style={{ cursor: "pointer" , fontSize:"14px"}}>
                <span onClick={handleNavgLogin}>Đăng nhập</span>
                <span onClick={handleNavgSignUp}>/Đăng ký</span>
              </div>
            )}
          </WrapperHeaderAcount>
        </WrapperHeaderNavbarItem>
        </WrapperHeaderNavbarList>

        

        
      </WrapperHeaderNavbar>

      <WrapperHeader gutter={16} className="grid">
        <Col span={4}>
          <WrapperTextHeader onClick={() => navigate("/")}>SHOP BAN HANG</WrapperTextHeader>
        </Col>
        <Col span={17}>
          <ButtonInputSearch
            placeholder="input search text"
            textButton="Search"
            size="large"
            bordered={false}
            backgroundColorButton = "rgb(13,92,182)"
            onChange={onSearch}
            onClick= {onClickSearch}
          />
        </Col>
        <Col
          span={3}
          style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: "center"}}
        >
          
          <div onClick={() => navigate(`order`)} style={{cursor:"pointer"}}>
            <Badge count={44} size="small"> {/* // count ={order?.orderItems?.length} */}
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#fff" }}
              />
            </Badge>
            {/* <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall> */}
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
}

export default HeaderComponent;
