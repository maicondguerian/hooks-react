import React,{useState, useRef} from "react"
import { FcRedo, } from "react-icons/fc";
import CustomButtom from "./CustomButtom"
import './Exemplo04_useState.css'

function ExemploTxt(){
    const [text, setText] = useState('')

    const inputRef = useRef(null);

    const resetTxt=(e)=>{
        setText('')
        inputRef.current.value = '';
     
    }

    return (
        <>
        <h1>useState/ useRef</h1>
        <textarea rows="5" cols="46" value={text}></textarea>
        <div className="teste">
            <input ref={inputRef} placeholder="type here" onChange={e=>setText(e.target.value)}
            style={{width:'300px', justifyContent:'center',backgroundColor:'#EEF0F2' ,padding:'10px',borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'  ,outline:'transparent', borderLeft: 'solid 1px', borderRight: 'none', borderBottom: '1px solid', borderTop: '1px solid'}}></input>
            <CustomButtom Icon={FcRedo} nameButton=''  size={30} onClick={resetTxt} customStyle={{justifyContent:'center', cursor:'pointer' ,alignItems:'center' ,display:'flex',backgroundColor:'white' ,borderTopRightRadius:'10px',borderBottomRightRadius:'10px' ,borderLeft: 'none', borderRight: '1px solid', borderBottom: 'solid 1px', borderTop: '1px solid', backgroundColor:'#febd69'}}/>
        </div>
        </>
        
    )
} export default ExemploTxt;

