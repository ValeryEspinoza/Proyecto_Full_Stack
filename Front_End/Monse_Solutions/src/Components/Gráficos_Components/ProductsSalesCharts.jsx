import React, { useEffect, useState } from "react";
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import GetData from '../../Services/Get/GetData';
import '../../Styles/Components_Styles/Graphs_Styles/ProductSalesChart.css'

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler );


//Obtención de los datos de la tabla Register
export default function ProductSalesChart() {
  const [productNames, setProductNames] = useState([]);
  const [productCounts, setProductCounts] = useState([]);

  //Llamado a la función para obtener los datos de la tabla sells_details
  
  useEffect(() => {
    async function fetchSalesDetails() {
      try {
        const salesDetailsData = await GetData("sells_details");
        const productSales = {};

        // Conteo de los productos
        salesDetailsData.forEach((sale) => {
          const productName = sale.product_name;
          if (productSales[productName]) {
            productSales[productName]++;
          } else {
            productSales[productName] = 1;
          }
        });

        // Extrae las keys y los valores para el grafico
        setProductNames(Object.keys(productSales));
        setProductCounts(Object.values(productSales));
      } catch (error) {
        console.error("Error fetching sales details data:", error);
      }
    }

    fetchSalesDetails();
  }, []);


    //Los datos presentes en la grafica para su visualización
  const midata = {
    labels: productNames,
    datasets: [
      {
        label: 'Ventas por productos',
        data: productCounts,
        tension: 0.5,
        fill: true,
        borderColor: 'rgba(44, 139, 88)',
        pointRadius:5,
        pointBorderColor: 'rgba(44, 139, 88)',
        pointBackgroundColor: 'rgba(80, 200, 120)',
      }
    ]
  };

  //Configuración de la grafica
  const misoptions = {
    responsive: true,
    plugins: {
      legend: {
        display:true,
        position: "top",
        },
        title: {
          display: true,
          text: "Ventas realizadas",
        },
    }
  };

  return <Line data={midata} options= {misoptions}/>
};