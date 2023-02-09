import React, { useState } from "react";
import { FcRedo, FcProcess, FcSupport } from "react-icons/fc";
import CustomButtom from './CustomButtom'

//declarando função
const ExemploUseState = () => {
  const [color, setColor] = useState('');

  const mudarColor = () => {
    setColor(color === 'yellow' ? 'red' : 'yellow');
  };
  const resetColor = () => {
    setColor('');
  }

  return (
    <div>
      <h1>useState</h1>
      <div
        style={{ backgroundColor: color, width: '200px', height: '200px', border: 'solid 1px' }}
      ></div>
      <CustomButtom Icon={FcProcess} size={30} nameButton={'mudar cor'} onClick={mudarColor} />
      <CustomButtom Icon={FcRedo} nameButton={'reset cor'} size={30} onClick={resetColor}/>
    </div>
  )
}
export default ExemploUseState;
