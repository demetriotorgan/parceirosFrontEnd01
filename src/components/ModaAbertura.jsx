import React, { useEffect, useState } from 'react'
import './modalAbertura.css'

const ModalAbertura = () => {
    const [isModalAberto, setIsModalAberto] = useState(false);

    const handleClose = ()=>{
        setIsModalAberto(false);
    }

    useEffect(()=>{
        setIsModalAberto(true);
    },[])
  return (
    <>
        {isModalAberto && (
            <div className='modal-overlay'>
                <div className='modal-content'>
                    <h2>Bem-Vindo!</h2>
                    <p>Esta é a mensagem de abertura</p>
                    <button className='close-button' onClick={handleClose}>Fechar</button>
                </div>

            </div>
        )}
    </>
  )
}

export default ModalAbertura