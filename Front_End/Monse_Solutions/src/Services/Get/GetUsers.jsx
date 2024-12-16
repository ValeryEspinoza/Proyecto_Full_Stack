const GetUser = async (endpoint, options) => {

 const response = await fetch(`http://192.168.1.87:8000/api/${endpoint}/`, options );
    
    // Asegúrate de que la respuesta sea válida y contenga el método .json()
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return response;  // Regresar la respuesta de fetch directamente
  };
   
export default GetUser