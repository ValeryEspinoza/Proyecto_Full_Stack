import React, { useEffect, useState } from "react";
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import GetData from '../../Services/Get/GetData';
import '../../Styles/Components_Styles/Graphs_Styles/SalesChart.css'


ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler );

export default function SalesChart(){
  const [months, setMonths] = useState([]);
  const [monthlySales, setMonthlySales] = useState([]);


  //Llamado de la tabla de datos sells
  useEffect(() => {
    async function fetchSalesData() {
      try {
        const salesData = await GetData("sells"); 
        const currentYear = new Date().getFullYear();

        //Array para mantener las ventas por mes
        const salesByMonth = Array(12).fill(0); 

        // Los datos obtenidos de las ventas
        salesData.forEach((sale) => {
          const saleDate = new Date(sale.sell_date); 
          if (saleDate.getFullYear() === currentYear) {
            const month = saleDate.getMonth();

            // Incrementa las ventas por mes
            salesByMonth[month]++; 
          }
        });

        //Seteo de los meses para la grafica
        setMonths([
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ]);
        setMonthlySales(salesByMonth);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    }

    fetchSalesData();
  }, []);

  const midata = {
    labels: months,
    datasets: [
      {
        label: 'Ventas',
        data: monthlySales,
        tension: 0.5,
        fill: true,
        borderColor: 'rgba(44, 139, 88)',
        pointRadius:5,
        pointBorderColor: 'rgba(44, 139, 88)',
        pointBackgroundColor: 'rgba(80, 200, 120)',
      }
    ]
  };

  //Opciones-Configuraciones de la grafica
  const misoptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Over the Last Year",
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Fuerza a la grafica a empezar desde 0
        suggestedMin: 0,   // Fuerza a la grafica a empezar a 0
        ticks: {
          callback: function (value) {
            // Hace que no muestre números negativos
            return value < 0 ? 0 : value;
          },
        },
      },
    },
  };

  return <Line data={midata} options= {misoptions}/>
};