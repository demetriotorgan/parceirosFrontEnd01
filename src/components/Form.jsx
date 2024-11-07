import React from 'react'
import {useState} from 'react'
import { addForm } from '../utils/handleApi';

const Form = ({setRespostas, setContagem}) => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        voto:''
      });

const handleSubmit = (e)=>{
        e.preventDefault(); 
        addForm(formData, setFormData,setRespostas, setContagem);
}

const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }
  
      
  return (
    <>
    <h1>Cadastro</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Email:
        <input
        type='text'
        name='email'
        value={formData.email}
        onChange={handleChange}
        required  
        />
      </label>
      <br />
      <label>
        SIM
        <input 
        type='radio'
        name='voto'
        value='SIM'
        checked={formData.voto === 'SIM'}
        onChange={handleChange}
        required
        />
      </label>
      <label>
        NÃO
        <input 
        type='radio'
        name='voto'
        value='NÃO'
        checked={formData.voto === 'NÃO'}
        onChange={handleChange}
        required
        />
      </label>
      <br />
      <button type='submit'>Enviar</button>
    </form>
    <ul></ul>
    </>
  )
}

export default Form