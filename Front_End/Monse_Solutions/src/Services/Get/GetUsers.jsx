const GetUser = async (endpoint, options) => {
    const response = await fetch(endpoint, options );
    
    // Asegúrate de que la respuesta sea válida y contenga el método .json()
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return response;  // Regresar la respuesta de fetch directamente
  };
   
export default GetUser