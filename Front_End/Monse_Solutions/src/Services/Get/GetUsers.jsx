/*Get Users*/
async function GetUser() {
 
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/register`);
        const data = await response.json();
        console.log(data);
        
        return data
        
    } catch (error) {
        console.error(error);
    }
}


export default GetUser