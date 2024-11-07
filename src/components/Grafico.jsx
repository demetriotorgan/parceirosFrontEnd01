import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const Grafico = ({sim,nao}) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(()=>{
        if(chartInstance.current){
            chartInstance.current.destroy()
        }
        const myChartRef = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(myChartRef,{
            type:"pie",
            data:{
                labels:["SIM","NÃO"],
                datasets:[
                    {
                        data:[sim, nao],
                        backgroundColor: [
                            'rgb(7,188,12)',
                            'rgb(18,18,18)'
                        ],
                    }
                ]
            }
        })
        return()=>{
            if(chartInstance.current){
                chartInstance.current.destroy()
            }
        }
    },[])
  return (
    <>
    <canvas ref={chartRef} style={{width:'300px', height:'200px'}} />
    </>
  )
}

export default Grafico