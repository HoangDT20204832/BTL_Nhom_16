import React from "react";
import NavbarComp from "../../components/NavbarComp";
import CardProductComp from "../../components/CardProductComp";
import { Col, Pagination } from "antd";
import { WrapperProductType, WrapperNavbar, WrapperProducts } from "./styles";
const TypeProductPage = () => {
  const onChange = () => {};
  return (
    <div style={{ backgroundColor: "var(--background-color)"}}>
      <WrapperProductType className="grid">
        <WrapperNavbar span={4}>
          <NavbarComp />
        </WrapperNavbar>
        <Col span={20} style={{backgroundColor:"#fff"}}>
          <WrapperProducts>
            <CardProductComp />
            <CardProductComp />
            <CardProductComp />
            <CardProductComp />
            <CardProductComp />
            <CardProductComp />
            <CardProductComp />
            <CardProductComp />
       
          </WrapperProducts>
          <Pagination
              defaultCurrent={1}
              total={500}
              onChange={onChange}
              style={{ textAlign: "center", padding: "20px 0" }}
            />
        </Col>
      </WrapperProductType>
    </div>
  );
};

export default TypeProductPage;
