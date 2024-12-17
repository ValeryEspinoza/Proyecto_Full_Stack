import React, { useEffect, useState } from "react";
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, plugins } from 'chart.js';
import GetData from '../../Services/Get/GetData';
import '../../Styles/Components_Styles/Graphs_Styles/ClientsRegisteredChart.css'

//Registro de las componenetes de los graficos
ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler );


export default function ClientsRegisteredChart(){
  const [data, setData] = useState({});
  const [clientes, setClientes] = useState([]);
  const [meses, setMeses] = useState([]);

//Obtención de los datos de la tabla Register
  useEffect(() => {
    async function getClientRegistration() {
      const clientsRegistered = await GetData('register');
      setData(clientsRegistered);

      //Datos para llenar los campos de meses y clientes
      const monthCounts = {}; // Objeto para almacenar los clientes por mes

      clientsRegistered.forEach(client =>{
        if (client.date_joined) {
          
          //Extraen el mes del formato ISO
          const monthName = new Date(client.date_joined).toLocaleString('default', {month: 'long'});
          //Incrementales de la cantidad de clientes por mes
          if (monthCounts[monthName]){
            monthCounts[monthName] ++;
          } else {
          monthCounts[monthName] = 1;
        }
    }});

      //Extraen los meses y los organiza 
      const sortedMonths = Object.keys(monthCounts);
      const counts = sortedMonths.map(month => monthCounts[month]);

      //Actualizan las variables
      setMeses(sortedMonths);
      setClientes(counts);

    }
    getClientRegistration();
    }, []);


  const midata = {
    labels: meses,
    datasets: [
      {
        label: 'Clientes',
        data: clientes,
        tension: 0.5,
        fill: true,
        borderColor: 'rgba(44, 139, 88)',
        pointRadius:5,
        pointBorderColor: 'rgba(44, 139, 88)',
        pointBackgroundColor: 'rgba(80, 200, 120)',
      }
    ]
  };
  const misoptions = {
    responsive: true,
    plugins: {
      legend: {
        display:true,
        position: "top",
        },
        title: {
          display: true,
          text: "Clientes Registrados en el Último Año",
        },
    }
  };

  return <Line data={midata} options= {misoptions}/>
};