//Send  product data to server 
async function SendUser ( 
   
      LastName, 
      Name,
      Email,
      Password,
      Access
    ) {
  
  
      try { 
        const newUser ={
            
            LastName, 
            Name,
            Email,
            Password,
            Access
        }
    
        const response = await fetch(`http://localhost:3001/Users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
       
        body: JSON.stringify(newUser) 
        
    });
    console.log("Solicitud Aplicada");
    
    const datos = await response.json();
    return datos
     
      } catch (error) {
        console.error(error);
      }
    }
    
        export default SendUser
  