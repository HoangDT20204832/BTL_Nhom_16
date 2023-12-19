import React, {useEffect, useState} from 'react'
import { Col, Input, Radio, Row, Select, Button, Upload } from "antd";
import { UploadOutlined} from '@ant-design/icons'
import {
  EditOutlined,
  UserOutlined,
  BellOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.css"
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
const NavbarAcountComp = () => {
  const user = useSelector((state) => state.user)
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate()
  useEffect(() =>{
    setName(user?.name)
    setAvatar(user?.avatar)
  },[user])

  const [selectedNavItem, setSelectedNavItem] = useState("Hồ sơ"); // Thêm state mới
  return (
    <Col span={4} className={styles.navbar}>
          <div className={styles.navbarHeader}>
            <img
              className={styles.navbarImg}
              src={avatar}
              alt="Ảnh đại diện"
            />
            <div className={styles.navbarName}>
              <div className={styles.navbarNameText}>{name}</div>
              <div className={styles.navbarNameEdit} 
              onClick={()=> {navigate('/account')
                            setSelectedNavItem("Hồ sơ")
                            }}>
                <EditOutlined />
                Sửa Hồ Sơ
              </div>
            </div>
          </div>
          <div className={styles.navbarBody}>
            <div className={styles.navbarWrapIten}>
              <div className={styles.navbarBodyItem}>
                <div className={styles.navbarIcon}>
                  <UserOutlined />
                </div>
                <span>Tài khoản của tôi</span>
              </div>
              <div className={clsx(styles.navbarItem, {
          [styles.active]: selectedNavItem === "Hồ sơ"})} 
              onClick={() => {
                navigate('/account')
                setSelectedNavItem("Hồ sơ")
              }
              }>
                Hồ sơ
              </div>
              <div className={clsx(styles.navbarItem, {[styles.active]: selectedNavItem === "Ngân hàng"})}
                 onClick={() => {
                  navigate('/account/bank')
                  setSelectedNavItem("Ngân hàng")
                }}>Ngân hàng</div>
              <div className={clsx(styles.navbarItem, {[styles.active]: selectedNavItem === "Địa chỉ"})}   
                    onClick={() => {
                        navigate('/account/address')
                        setSelectedNavItem("Địa chỉ")
                    }}>
                      Địa chỉ</div>
              <div className={styles.navbarItem}>Đổi mật khẩu</div>
            </div>
            <div className={styles.navbarBodyItem}>
              <div className={styles.navbarIcon}>
                <ShopOutlined />
              </div>
              <span>Đơn mua</span>
            </div>
            <div className={styles.navbarBodyItem}>
              <div className={styles.navbarIcon}>
                <BellOutlined />
              </div>
              <span>Thông báo</span>
            </div>
          </div>
        </Col>
  )
}

export default NavbarAcountComp