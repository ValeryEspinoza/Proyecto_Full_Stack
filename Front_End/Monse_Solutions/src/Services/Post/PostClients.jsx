//Send  product data to server 
async function SendClients ( 
   
  {
    id,
    password,
    username,
    email,
    first_name,
    last_name,
    is_superuser,
    is_staff,
    is_active
}
    ) 
    
    {
  
  
      try { 
        const newUser ={
                  
          id,
          password,
          username,
          email,
          first_name,
          last_name,
          is_superuser,
          is_staff,
          is_active
        }
    
        const response = await fetch(`http://127.0.0.1:8000/api/register`, {
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
    
        export default SendClients
  