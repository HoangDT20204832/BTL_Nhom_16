import { Button } from "antd";
import React from "react";

const ButtonComponent = ({
  size,
  styleButton,
  styleTextButton,
  textButton, 
  disabled,
  ...rest
}) => {
  return (
    <Button
      size={size}
      style={{...styleButton,background: disabled ? "#ccc" : styleButton.background,
              cursor:disabled ? "not-allowed" : "pointer" }}
      // icon={<SearchOutlined style={{ color: colorButton }} />}
      {...rest}
    >
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  );
};

export default ButtonComponent;
