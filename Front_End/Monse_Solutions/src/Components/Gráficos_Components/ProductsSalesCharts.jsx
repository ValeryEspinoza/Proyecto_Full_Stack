import React, { useEffect, useState } from "react";
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import GetData from '../../Services/Get/GetData';
import '../../Styles/Components_Styles/Graphs_Styles/ProductSalesChart.css'

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler );



var Ventas = [0,56,20,36,80,40,30,5,12];
var Ventas2 = [0,3,12,46,33,89,40,30,5];
var Ventas3 = [8,40,83,29,55,90,30,5,12];
var meses =["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var midata = {
  labels: meses,
  datasets: [ //Lineas de los graficos
    {
      label: 'Kit 1',
      data: Ventas,
      tension: 0.5,
      fill: true,
      borderColor: 'rgba(44, 139, 88)',
      pointRadius:5,
      pointBorderColor: 'rgba(44, 139, 88)',
      pointBackgroundColor: 'rgba(80, 200, 120)'
  },
  {
    label: 'Kit 2',
    data: Ventas2,
    tension: 0.5,
    fill: true,
    borderColor: 'rgba(160, 245, 186)',
    pointRadius:5,
    pointBorderColor: 'rgba(160, 245, 186)',
    pointBackgroundColor: 'rgba(160, 245, 186)'
},
{
  label: 'Kit 3',
  data: Ventas3,
  tension: 0.5,
  fill: true,
  borderColor: 'rgba(0, 94, 28)',
  pointRadius:5,
  pointBorderColor: 'rgba(0, 94, 28)',
  pointBackgroundColor: 'rgba(0, 94, 28)'
},
],
};


var misoptions ={};

export default function ProductSalesChart(){
  return <Line data={midata} options= {misoptions}/>
};