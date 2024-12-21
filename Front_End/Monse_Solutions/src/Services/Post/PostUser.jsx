//Send  product data to server 
async function PostUser (newUser) {
  
      try { 
 
        console.log(newUser);
        
        const response = await fetch(`http://192.168.1.87:8000/api/register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
       
        body: JSON.stringify(newUser) 
        
    });

    
    const datos = await response.json();
    console.log(datos);
    
    return datos
     
      } catch (error) {
        console.error(error);
      }
    }
    
export default PostUser
  