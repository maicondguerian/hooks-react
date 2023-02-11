import './App.css';
import ExemploUseState from './hooks/ExemploUseState';
import ExemploTxt from './hooks/Exemplo04_useState';
import Exemplo09_useReducer from './hooks/Exemplo09_useReducer';
import NewCarousel from './hooks/ElasticCarouseel/Caroussel';


function App() {
  return (
    <div className="App">
      <Exemplo09_useReducer/>
      <ExemploUseState/>
      <ExemploTxt/>
      <NewCarousel/>
    </div>
  );
}

export default App;