import React, { useState } from "react";

function Exemplo03_useState(){

    const [nota1, setNota1] = useState()
    const [nota2, setNota2] = useState()

    return(
        <>
        <h1>Média notas React</h1>
        <label for="input" style={{fontSize:'25px'}}>Nota 1
            <input type="text" name="nota1" onChange={e=>setNota1(e.target.value)}
            style={{width:'150px', height:'20px', padding:'10px 10px', outline:'none', fontSize:'25px', textAlign:'center', marginBottom:'10px'}} />
        {nota1}
        </label>
        <span style={{fontSize:'25px'}}>+</span>
        <label for="input" style={{fontSize:'25px'}}>Nota 2
            <input type="text" name="nota2"  onChange={e=>setNota2(e.target.value)}
            style={{width:'150px', height:'20px', padding:'10px 10px', outline:'none', fontSize:'25px', textAlign:'center'}} />
        {nota2}
        </label>
        <button >Limpar cálculo</button>
        <h2>Média final:</h2>
        </>
    )
}
export default  Exemplo03_useState;