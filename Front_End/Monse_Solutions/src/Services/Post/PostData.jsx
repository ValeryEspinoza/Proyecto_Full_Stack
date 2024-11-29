const postData = async (EndPoint, data) => {
    try {

        console.log(EndPoint, data);
        
      // Realiza la solicitud POST
      const response = await fetch(`http://192.168.1.87:8000/${EndPoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),  // Convierte el objeto a JSON
      });
      console.log(data);
      
      console.log('Estado de la respuesta:', response.status);
  
      // Si la respuesta no es exitosa, lanza un error con detalles
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error al realizar POST: ${response.status} - ${errorText}`);
      }
  
      // Si la solicitud es exitosa, parsea la respuesta JSON
      const result = await response.json();
      console.log('POST REALIZADO:', result);
  
      // Devuelve el resultado de la respuesta
      return result;
    } catch (error) {
      console.error('Error en la solicitud:', error);
      throw error; // Lanza el error para que pueda ser manejado externamente
    }
  };
  
  export default postData;