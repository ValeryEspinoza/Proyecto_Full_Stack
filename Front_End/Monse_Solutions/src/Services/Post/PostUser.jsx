//Send  product data to server 
async function SendUser ( 
   
  {
    id,
    password,
    username,
    email,
    first_name,
    last_name,
    is_superuser,
    is_staff,
    is_active,
    role
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
          is_active,
          role
        }
    
        const response = await fetch(`http://192.168.1.87:8000/api/register/`, {
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
  