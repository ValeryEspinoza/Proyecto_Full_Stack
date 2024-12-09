const GetData = async (EndPoint) => {
    try {
        console.log("Endpoint:", EndPoint);

        // Realiza la solicitud GET
        const response = await fetch(`http://192.168.1.87:8000/api/${EndPoint}/`, {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log("Estado de la respuesta:", response.status);

        // Si la respuesta no es exitosa, lanza un error con detalles
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error al realizar GET: ${response.status} - ${errorText}`);
        }

        // Si la solicitud es exitosa, parsea la respuesta JSON
        const result = await response.json();
        console.log("GET REALIZADO:", result);

        // Devuelve el resultado de la respuesta
        return result;
    } catch (error) {
        console.error("Error en la solicitud:", error);
        throw error; // Lanza el error para que pueda ser manejado externamente
    }
};

export default GetData;