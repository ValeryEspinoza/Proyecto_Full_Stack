

const GetData = async (EndPoint) => {
    try {
      const token = localStorage.getItem('accessToken');
        // Realiza la solicitud GET
        const response = await fetch(`http://192.168.1.87:8000/api/${EndPoint}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
                
            },
        });

        console.log("Estado de la respuesta:", response.status);

        // Si la respuesta no es exitosa, lanza un error con detalles
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error al realizar GET: ${response.status} - ${errorText}`);
        }

        // Si la solicitud es exitosa, parsea la respuesta JSON
        const result = await response.json();
        console.log("GET REALIZADO:", result);

        // Devuelve el resultado de la respuesta
        return result;
    } catch (error) {
        console.error("Error en la solicitud:", error);
        throw error; // Lanza el error para que pueda ser manejado externamente
    }
};

export default GetData;

/*}}
// GetData.jsx
const GetData = async () => {
  try {
    // Simula la respuesta del backend con reseñas más cortas y positivas
    const simulatedReviews = [
      { 
        id: 1, 
        review: "El trabajo de remodelación fue excelente. Cumplieron con todo lo prometido y los acabados quedaron perfectos. ¡Muy recomendados!", 
        date: "2024-01-01", 
        rating: 5, 
        client: "Juan Pérez" 
      },
      { 
        id: 2, 
        review: "Estoy muy satisfecha con la remodelación de mi oficina. Los acabados son de calidad y el equipo fue muy profesional.", 
        date: "2024-02-01", 
        rating: 5, 
        client: "María Rodríguez" 
      },
      { 
        id: 3, 
        review: "Excelente trabajo en la renovación de mi casa. Los acabados fueron impecables y el equipo muy atento.", 
        date: "2024-03-01", 
        rating: 5, 
        client: "Carlos Gómez" 
      },
    ];
    console.log("Datos simulados cargados");
    return simulatedReviews; // Devuelve datos simulados
  } catch (error) {
    console.error("Error al obtener los datos simulados:", error);
  }
};

export default GetData;*/

  
  