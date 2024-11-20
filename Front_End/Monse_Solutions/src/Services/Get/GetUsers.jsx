async function GetUser() {
    
    try {
        const response = await fetch(`http://192.168.1.87:8000/api/register/`);
        if (!response.ok) {
            // Si la respuesta no es exitosa, lanza un error
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
    }
}


export default GetUser