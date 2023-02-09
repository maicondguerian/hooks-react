import React,{useState} from "react";
import './CustomButtom.module.css'
const CustomButtom = ({ Icon, size, nameButton = 'Custom Button', onClick, customStyle}) => {
  let style = customStyle ? customStyle : { width: size, height: size };
    return (
      <button  onClick={onClick} className={style.customStyle}>
        {nameButton ? nameButton : <></>}

        {Icon ? <Icon style={{ width: size, height: size }} /> : <></>}
      </button>
    );
};
export default CustomButtom;

