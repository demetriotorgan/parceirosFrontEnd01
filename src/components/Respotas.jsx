import React, { useEffect, useState } from 'react'
import { getAllRes } from '../utils/handleApi';

const Respotas = ({respostas,setRespostas,setContagem}) => {

useEffect(()=>{
    getAllRes(setRespostas,setContagem);
},[])

  return (
    <>
    <h1>Respotas</h1>
    <ul>
    {respostas && respostas.map((item, index)=>(
        <li key={index}>
            <p>{item.email}</p>
            <p>{item.voto}</p>
        </li>
    ))}
    </ul>
    </>
  )
}

export default Respotas