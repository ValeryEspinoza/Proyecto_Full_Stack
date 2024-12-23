const postData = async (EndPoint, data) => {
  try {
    const token = localStorage.getItem('accessToken');
    
    const response = await fetch(`http://192.168.88.198:8000/api/${EndPoint}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    // Comprobación de código de estado HTTP
    if (response.status < 200 || response.status >= 300) {
      const errorText = await response.text();
      throw new Error(`Error al realizar POST: ${response.status} - ${errorText}`);
    }

    // Intentar parsear la respuesta a JSON
    let result;
    try {
      result = await response.json();
    } catch (error) {
      result = null;  // Si no hay JSON en la respuesta, se maneja como null
    }

    console.log('Respuesta de la API:', result); // Log de la respuesta recibida
    return result;

  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error;  // Lanza el error para que pueda ser manejado externamente
  }
};

export default postData;