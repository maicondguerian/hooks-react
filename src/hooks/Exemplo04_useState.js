import React,{useState} from "react"
import { FcRedo, } from "react-icons/fc";
import CustomButtom from "./CustomButtom"
import './Exemplo04_useState.css'

function ExemploTxt(){
    const [text, setText] = useState('')
    const resetTxt=(e)=>{
        setText('')
        e.target.previousSibling.value = '';
        
    }

    return (
        <>
        <h1 style={{width:'100%', backgroundColor:'white'}}>{text}</h1>
        <div className="teste">
            <input placeholder="type here" onChange={ev=>setText(ev.target.value)}
            style={{width:'300px', padding:'10px', borderRadius:'5px', border:'solid 1px', outline:'transparent'}}></input>
            <CustomButtom Icon={FcRedo} nameButton='apagar texto'  size={30} onClick={resetTxt}/>
        </div>
        </>
        
    )
} export default ExemploTxt;

