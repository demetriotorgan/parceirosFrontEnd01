import React, { useEffect, useRef, useState } from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);


const Contagem = ({contagem}) => {  

  // Dados para o gráfico de pizza
  const data = {
    labels: ["SIM", "NAO"],
    datasets: [
      {
        data: [contagem.SIM, contagem.NAO], // Utilizando os valores dos states
        backgroundColor: ["#07bc0c", "##121212"], // Cores do gráfico
        hoverBackgroundColor: ["#36A2EB90", "#FF638490"],
      },
    ],
  };
  
  return (
    <>
    <h1>Contagem</h1>
    <p>Total de Sim: {contagem.SIM} </p>
    <p>Total de Não: {contagem.NAO}</p>
    <div style={{ width: "90%", margin: "auto" }}>
      <h2>Resultado</h2>
      <Pie data={data} />
    </div>
    </>
  )
}

export default Contagem