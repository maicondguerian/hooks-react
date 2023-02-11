// Importar Modulos
import react, {useReducer} from "react";
import CustomButtom from "./CustomButtom";
import { FcDown,FcUp, FcUndo } from "react-icons/fc";
  

// função
function Exemplo09_useReducer(){

    // Função para incrementer e decrementar
    const funcao = (state, acao)=>{

        switch(acao){
            case 'incrementar':
            return state +1

            case 'decrementar':
            return state -1

            case 'zerar':
            return state = 0

            case 'incrementar10':
            return state +10
            
            case 'decrementar10':
            return state -10

            default: 
            return 0;

            
            
        }   
    }
    
    //Usereducer

    const [contador, executarFuncao] = useReducer(funcao, 0)

    //Retorno
    return(
        <div>
            
            <h1>useReducer</h1>
            <h1>{contador}</h1>
            <CustomButtom nameButton='incrementar' size={30} Icon={FcUp} onClick={e=>executarFuncao('incrementar')} />
            <CustomButtom nameButton='decrementar' size={30} Icon={FcDown} onClick={e=>executarFuncao('decrementar')}/>
            <CustomButtom nameButton='zerar' size={30} Icon={FcUndo} onClick={e=>executarFuncao('zerar')}/>
            <CustomButtom nameButton='incrementar +10' size={30} Icon={FcUp} onClick={e=>executarFuncao('incrementar10')}/>
            <CustomButtom nameButton='decrementar -10' size={30} Icon={FcDown} onClick={e=>executarFuncao('decrementar10')}/>
            <hr/>
        </div>
    )
}
export default Exemplo09_useReducer;



 