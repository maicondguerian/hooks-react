import './App.css';
import ExemploUseState from './hooks/ExemploUseState';
import ExemploTxt from './hooks/Exemplo04_useState';
import Exemplo09_useReducer from './hooks/Exemplo09_useReducer';
import { FcRedo, FcProcess, FcSupport } from "react-icons/fc";

function App(Icon, size) {
  return (
    <div className="App">
     <Exemplo09_useReducer/>
     <ExemploUseState/>
     <ExemploTxt/>
    
    </div>
  );
}

export default App;