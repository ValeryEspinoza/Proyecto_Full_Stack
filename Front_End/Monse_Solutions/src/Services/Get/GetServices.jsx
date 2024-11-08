/*Get Services*/
async function GetServices() {
 
    try {
        const response = await fetch(`http://localhost:3001/Services`);
        const data = await response.json();
        console.log(data);
        
        return data
        
    } catch (error) {
        console.error(error);
    }
}


export default GetServices