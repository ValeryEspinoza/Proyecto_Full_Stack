//Send  product data to server 
async function SendServices ( 
  
    Servicio,
    Descripcion,
    Detalle,
    Imagen
  ) {


    try { 
      const newService ={
        
        Servicio,
        Descripcion,
        Detalle,
        Imagen
      }
  
      const response = await fetch(`http://localhost:3001/Services`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' 
      },
     
      body: JSON.stringify(newService) 
      
  });
  console.log("Solicitud Aplicada");
  
  const datos = await response.json();
  return datos
   
    } catch (error) {
      console.error(error);
    }
  }
  
      export default SendServices