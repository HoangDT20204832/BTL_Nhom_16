import React from "react";
import { Col, Row, Input } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAcount,
  WrapperTextHeaderSmall,
  WrapperHeaderNavbar,
  WrapperHeaderNavbarList,
  WrapperHeaderNavbarItem,
} from "./header_style";
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
const { Search } = Input;
function HeaderComponent() {
  return (
    <div>
      <WrapperHeaderNavbar>
        <WrapperHeaderNavbarList>
          <WrapperHeaderNavbarItem>
            Chào mừng đến với cửa hàng{" "}
          </WrapperHeaderNavbarItem>
          <WrapperHeaderNavbarItem>
            <span>Kết nối</span>
            <a href="" style={{ display: "block", margin: "0 5px" }}>
              <FacebookOutlined style={{ color: "#fff", fontSize: "16px" }} />
            </a>

            <a href="" style={{ display: "block" }}>
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
        </WrapperHeaderNavbarList>
      </WrapperHeaderNavbar>
      <WrapperHeader gutter={16}>
        <Col span={4}>
          <WrapperTextHeader>SHOP BAN HANG</WrapperTextHeader>
        </Col>
        <Col span={14}>
          <ButtonInputSearch
            placeholder="input search text"
            textButton="Search"
            size="large"
            bordered={false}
            // onSearch={onSearch}
          />
        </Col>
        <Col span={6} style={{ display: "flex", gap: "20px" }}>
          <WrapperHeaderAcount>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <span>Đăng nhập/Đăng ký</span>
              <div>
                <span>Tài khoản</span>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAcount>
          <div>
            <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
}

export default HeaderComponent;
