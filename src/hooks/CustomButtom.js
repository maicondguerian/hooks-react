import React,{useState} from "react";
import './CustomButtom.module.css'
const CustomButtom = ({ Icon, size, nameButton = 'Custom Button', onClick, customStyle}) => {
  let style = customStyle ? customStyle : {};

    return (
      <button  onClick={onClick} style={style}>
        {nameButton ? nameButton : <></>}

        {Icon ? <Icon style={{ width: size, height: size }} /> : <></>}
      </button>
    );
};
export default CustomButtom;

