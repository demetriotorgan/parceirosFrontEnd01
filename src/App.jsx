import './App.css'
import Contagem from './components/Contagem';
import Form from './components/Form'
import ModalAbertura from './components/ModaAbertura';
import Respotas from './components/Respotas'
import React, {useState} from 'react'


function App() {
  const [respostas, setRespostas] = useState([]);  
  const [contagem, setContagem] = useState({
    SIM:0,
    NAO:0
});

return (
    <>     
    <ModalAbertura />
    <Form setRespostas={setRespostas} setContagem={setContagem}/>  
    <Respotas respostas={respostas} setRespostas={setRespostas} setContagem={setContagem} />  
    <Contagem contagem={contagem}/>
    </>
  )
}

export default App