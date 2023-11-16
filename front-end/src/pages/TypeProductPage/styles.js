import styled from "styled-components";
import { Row, Col } from "antd";

export const WrapperProductType = styled(Row)`
  padding: 0 60px;
  background-color: var(--background-color);
  flex-wrap: nowrap;
  padding-top: 20px;
`;

export const WrapperNavbar = styled(Col)`
  background-color: #fff;
  margin-right: 10px;
  padding: 10px;
  border-radius: 6px;
`;
export const WrapperProducts = styled.div`
  background-color: #fff;
  padding: 0 10px;
  border-radius: 6px;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap:wrap;
`;
