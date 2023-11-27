import { Col, Input, Radio, Row, Select, Upload, message } from "antd";
import React, { useState } from "react";
import styles from "./styles.module.css";
import ImgCrop from "antd-img-crop";

import {
  EditOutlined,
  UserOutlined,
  BellOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import clsx from "clsx";
const AccountComp = () => {
  const plainOptions = ["Nam", "Nữ", "Khác"];
  const [value1, setValue1] = useState("Apple");
  const onChange1 = ({ target: { value } }) => {
    console.log("radio1 checked", value);
    setValue1(value);
  };

  const options1 = [];
  for (let i = 1; i <= 31; i++) {
    options1.push({
      value: i,
      label: i,
    });
  }
  const options2 = [];
  for (let i = 1; i <= 12; i++) {
    options2.push({
      value: `Tháng ${i}`,
      label: `Tháng ${i}`,
    });
  }
  const options3 = [];
  for (let i = 1910; i <= 2023; i++) {
    options3.push({
      value: `Năm ${i}`,
      label: `Năm ${i}`,
    });
  }
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };
  const [size, setSize] = useState("middle");
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  //up file  ảnh đại diện
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://down-vn.img.susercontent.com/file/05a0107098a8f6c0d51c214e9b2920ed_tn",
    },
  ]);
  const onChange = ({ fileList: newFileList, file }) => {
    // Chỉ giữ lại một file trong fileList
    setFileList([file]);

    // Hiển thị thông báo khi có nhiều hơn 1 file
    if (newFileList.length > 1) {
      message.warning("Chỉ được upload một ảnh duy nhất.");
    }
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };


  return (
    <div className={styles.wrapAccount}>
      <Row className="grid">
        <Col span={4} className={styles.navbar}>
          <div className={styles.navbarHeader}>
            <img
              className={styles.navbarImg}
              src="https://down-vn.img.susercontent.com/file/05a0107098a8f6c0d51c214e9b2920ed_tn"
              alt=""
            />
            <div className={styles.navbarName}>
              <div className={styles.navbarNameText}>hoangg1704</div>
              <div className={styles.navbarNameEdit}>
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
              <div className={clsx(styles.navbarItem, styles.active)}>
                Hồ sơ
              </div>
              <div className={styles.navbarItem}>Ngân hàng</div>
              <div className={styles.navbarItem}>Địa chỉ</div>
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
        <Col span={20} className={styles.container}>
          <div className={styles.containerHeader}>Hồ Sơ Của Tôi</div>
          <Row className={styles.containerContent}>
            <Col span={17} className={styles.containerInfor}>
              <div className={styles.containerItem}>
                <div className={styles.containerItemText}>Tên đăng nhập</div>
                <div>hoangg1704</div>
              </div>

              <div className={styles.containerItem}>
                <div className={styles.containerItemText}>Tên</div>
                <div>
                  <Input
                    placeholder="Nhap ten"
                    style={{
                      padding: "8px",
                    }}
                  />
                </div>
              </div>

              <div className={styles.containerItem}>
                <div className={styles.containerItemText}>Email</div>
                <div>
                  <span>duongtienhoang@gmail.com</span>
                  <span>Thay đổi</span>
                </div>
              </div>

              <div className={styles.containerItem}>
                <div className={styles.containerItemText}>Số điện thoại</div>
                <div>
                  <span>0934902934924</span>
                  <span>Thay đổi</span>
                </div>
              </div>

              <div className={styles.containerItem}>
                <div className={styles.containerItemText}>Giới tính</div>
                <div>
                  <Radio.Group
                    options={plainOptions}
                    onChange={onChange1}
                    value={value1}
                  />
                </div>
              </div>

              <div className={styles.containerItem}>
                <div className={styles.containerItemText}>Ngày sinh</div>
                <div>
                  <Select
                    className={styles.containerBorn}
                    size={size}
                    defaultValue="17"
                    onChange={handleChange}
                    style={{
                      width: 140,
                    }}
                    options={options1}
                  />
                  <Select
                    className={styles.containerBorn}
                    size={size}
                    defaultValue="Tháng 4"
                    onChange={handleChange}
                    style={{
                      width: 140,
                    }}
                    options={options2}
                  />
                  <Select
                    className={styles.containerBorn}
                    size={size}
                    defaultValue="Năm 2002"
                    onChange={handleChange}
                    style={{
                      width: 140,
                    }}
                    options={options3}
                  />
                </div>
              </div>
            </Col>
            <Col span={7} className={styles.containerImg}>
              <ImgCrop rotationSlider >
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                >
                  {fileList.length < 5 && "+ Upload"}
                </Upload>
              </ImgCrop>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AccountComp;
