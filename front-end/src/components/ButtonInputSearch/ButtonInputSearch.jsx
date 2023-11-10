<<<<<<< HEAD
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComp/index";
const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(14,92,182) ",
    colorButton = "#fff",
    onClick 
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput }}
        {...props}
      />
      <ButtonComponent
        size={size}
        styleButton={{
          background: backgroundColorButton ,
          border: !bordered && "none",
        }}
        textButton={textButton}
        icon={<SearchOutlined style={{ color: "#fff" }} />}
        styleTextButton={{color: colorButton}}
        onClick = {onClick}
      />
      
    </div>
  );
};

export default ButtonInputSearch;
=======
import React from 'react'
import { Button, Input } from 'antd'
import {SearchOutlined} from '@ant-design/icons'
const ButtonInputSearch = (props) => {
  const {size, placeholder, textButton,
         bordered, backgroundColorInput = "#fff",
        backgroundColorButton = "rgb(13,92,182)",
        colorButton="#fff"} = props
  return (
    <div style={{display: "flex"}}>
      <Input 
         size={size} 
         placeholder={placeholder}
         bordered={bordered}
         style={{backgroundColor: backgroundColorInput}}/>
      <Button 
      size={size} 
      style={{backgroundColor: backgroundColorButton, border: !bordered && 'none'}}
      icon={<SearchOutlined  style={{color: colorButton}}/>}>
        <span style={{color: colorButton}}>{textButton}</span>
      </Button>
    </div>
  )
}

export default ButtonInputSearch
>>>>>>> ab69ca5 (hoàn thành giao diện header)
