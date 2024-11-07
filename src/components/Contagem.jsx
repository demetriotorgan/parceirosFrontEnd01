import React from 'react'


const Contagem = ({contagem}) => {

  return (
    <>
    <h1>Contagem</h1>
    <p>Total de Sim: {contagem.SIM} </p>
    <p>Total de Não: {contagem.NAO}</p>
    </>
  )
}

export default Contagem