async function EditServices(dato,id) {
   
    try { 
     
  
      const respuesta = await fetch(`http://localhost:3001/Services/${id}`, {
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