async function SendAccess ( key, Acceso ) {


    try { 
      const newAccess ={
          
         Key: key
      }
  
      const response = await fetch(`http://localhost:3001/Access`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' 
      },
     
      body: JSON.stringify(newAccess) 
      
  });
  console.log("Solicitud Aplicada");
  
  const datos = await response.json();
  return datos
   
    } catch (error) {
      console.error(error);
    }
  }
  
      export default SendAccess
