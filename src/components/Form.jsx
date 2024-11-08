import React from 'react'
import {useState} from 'react'
import { addForm } from '../utils/handleApi';
import {Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './form.css';

const Form = ({setRespostas, setContagem}) => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        voto:''
      });

const handleSubmit = (e)=>{
        e.preventDefault(); 
        addForm(formData, setFormData,setRespostas, setContagem,notify,notifyError);
}

const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }
  
  const notify = () => toast.success('Seu voto foi cadastrado com sucesso!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });

   const notifyError = ()=> toast.error('E-mail já cadastrado!!!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });

  return (
    <>    
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    transition={Bounce}
    />
    <h2>Vote aqui!</h2>
    {/* ----------------INPUTS-------------- */}
      <label>
        Nome:
        <input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        />
      </label>      
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
      {/* ----------------RADIO BUTTON-------------- */}
      <div className='radio-group'>
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
      </div>      
      {/* ----------------BUTTON-------------- */}
      <button type='submit'>Enviar</button>
    </form>
    </div>        
    </>
  )
}

export default Form