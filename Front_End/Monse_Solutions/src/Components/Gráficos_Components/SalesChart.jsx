import React, { useEffect, useState } from "react";
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import GetData from '../../Services/Get/GetData';
import '../../Styles/Components_Styles/Graphs_Styles/SalesChart.css'


ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler );

var beneficios = [0,56,20,36,80,40,30,5,12];
var meses =["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var midata = {
  labels: meses,
  datasets: [ //Lineas de los graficos
    {
      label: 'Beneficios',
      data: beneficios,
      tension: 0.5,
      fill: true,
      borderColor: 'rgba(44, 139, 88)',
      pointRadius:5,
      pointBorderColor: 'rgba(44, 139, 88)',
      pointBackgroundColor: 'rgba(80, 200, 120)',
  },
],
};

var misoptions ={};

export default function SalesChart(){
  return <Line data={midata} options= {misoptions}/>
};