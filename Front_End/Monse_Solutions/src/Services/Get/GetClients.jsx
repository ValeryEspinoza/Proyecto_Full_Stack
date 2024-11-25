
async function GetClients() {
    try {
        const response = await fetch(`http://192.168.1.87:8000/api/clients/`);
        /*
        const token = "tu_token_aqui";  // Asegúrate de obtener el token de algún lugar (localStorage, Redux, etc.)
        
        const response = await fetch('http://192.168.1.87:8000/api/register/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });*/
        
        if (!response.ok) {
            // Si la respuesta no es exitosa, lanza un error con más detalles
            const errorMessage = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
    }
}
export default GetClients