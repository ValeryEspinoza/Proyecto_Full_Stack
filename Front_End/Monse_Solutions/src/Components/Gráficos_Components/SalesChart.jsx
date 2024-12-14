/*
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import GetData from "../../Services/Get/GetData";


// Registrar los elementos de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesChart = ({ dataEndpoint }) => {
  const [chartData, setChartData] = useState({});  // Datos para el gráfico
  const [loading, setLoading] = useState(true);    // Indicador de carga

  useEffect(() => {
    // Función para obtener los datos del endpoint
    const fetchData = async () => {
      try {
        const data = await GetData(dataEndpoint);  // Llamada a la función GetData

        // Transformar los datos para adaptarlos al gráfico
        const labels = data.map(item => item.name);  // Usar el nombre del producto como etiqueta
        const sales = data.map(item => parseFloat(item.price));  // Usar el precio como datos de ventas

        setChartData({
          labels,
          datasets: [
            {
              label: "Ventas 2024",
              data: sales,
              backgroundColor: "rgba(75, 192, 192, 0.5)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });

        setLoading(false); // Cambiar el estado de carga a false
      } catch (error) {
        console.error("Error al obtener los datos del gráfico:", error);
      }
    };

    fetchData();  // Llamar la función para obtener los datos
  }, [dataEndpoint]);  // El efecto se ejecutará cuando cambie el `dataEndpoint`

  return (
    <div>
      {loading ? (
        <p>Cargando gráfico...</p>  // Mensaje mientras se cargan los datos
      ) : (
        // Mostrar el gráfico cuando se haya cargado la data
        <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
      )}
    </div>
  );
};

export default SalesChart;
*/