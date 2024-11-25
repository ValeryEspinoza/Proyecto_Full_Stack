//Send  product data to server 
async function SendClientLanguage ( 
        language,
        client
      ) 
      
      {
    
    
        try { 
          const newUser ={
                    
            language,
            client
           
          }
      
          const response = await fetch(`http://192.168.1.87:8000/api/languages_clients/`, {
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
      
          export default SendClientLanguage
    