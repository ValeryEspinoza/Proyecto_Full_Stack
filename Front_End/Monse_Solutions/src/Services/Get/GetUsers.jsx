/*Get Users*/
async function GetUser() {
 
    try {
        const response = await fetch(`http://localhost:3001/Users`);
        const data = await response.json();
        console.log(data);
        
        return data
        
    } catch (error) {
        console.error(error);
    }
}


export default GetUser