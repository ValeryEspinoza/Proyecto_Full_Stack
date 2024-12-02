async function EditServices(endpoint, dato,id) {
   
    try { 
     
  
      const respuesta = await fetch(`http://192.168.1.87:8000/${endpoint}/${id}`, {
      method: 'PUT', 
      headers: {
          'Content-Type': 'application/json' 
      },
     
      body: JSON.stringify(dato) // Convierte el objeto newUser a JSON para enviarlo en el cuerpo de la solicitud

  });
  console.log("Edicion Exitosa");
  
  const data = await respuesta.json();
  return data
   
    } catch (error) {
      console.error(error);
    }
  }
  
  export default EditServices