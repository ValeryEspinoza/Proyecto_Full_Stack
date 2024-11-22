//Send  product data to server 
async function SendClients ( 

  ID,
  name,
  last_name,
  email,
  phone_number,
  register_date,
  user
    ) 

    
    {
      console.log("PostClient",

        ID,
        name,
        last_name,
        email,
        phone_number,
        register_date,
        user
      );
  
      try { 
        const newUser ={
          ID,
          name,
          last_name,
          email,
          phone_number,
          user
        }


        console.log(newUser);
        
    
        const response = await fetch(`http://192.168.1.87:8000/api/clients/`, {
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
  