const PutData = async (endpoint, dato, id) => {

try {
    const token = localStorage.getItem('accessToken');
    console.log(token);
    

    // Construye la URL con el ID
    const url = `http://192.168.1.87:8000/api/${endpoint}/${id}/`;
    
    // Realiza la solicitud PUT
    const respuesta = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json', // Indica que se está enviando un JSON
            'Authorization': `Bearer ${token}`,  // Agrega el token en el encabezado Authorization
        },
        body: JSON.stringify(dato), // Convierte el objeto 'dato' a JSON para enviarlo en el cuerpo
    });

    // Imprime el estado de la respuesta para depuración
    console.log('Estado de la respuesta:', respuesta.status);

    // Verifica si la solicitud fue exitosa
    if (!respuesta.ok) {
        const errorText = await respuesta.text();
        throw new Error(`Error en la edición: ${respuesta.status} - ${errorText}`);
    }

    // Convierte la respuesta a JSON y la devuelve
    const data = await respuesta.json();
    console.log('Edición exitosa:', data);
    return data;
} catch (error) {
    // Muestra el error en la consola y lo lanza para manejo externo
    console.error('Error al editar el servicio:', error.message);
    throw error;
}


}

export default PutData;

