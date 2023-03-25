import logo from './logo.svg';
import './App.css';
import useAppContext from './store/Context';

function App() {

  // EJEMPLO DE COMO RECUPERAR DATOS DEL CONTEXTO
  const {store , actions} = useAppContext();
  
  const { test } = store;
  const { handleSetTest } = actions;




  return (
    <div className="App">
      <header className="App-header">
        
      
        <p>{test ? "ENCENDIDO": "APAGADO"}</p>
        <button onClick={handleSetTest} ><img src={logo} className="App-logo" alt="logo" /> PRUEBA EL CONTEXTO <img src={logo} className="App-logo" alt="logo" /></button>



      </header>
    </div>
  );
}

export default App;
