const postData = async (EndPoint, data) => {
  try {
    console.log(data);
    
    const response = await fetch(`http://192.168.1.87:8000/${EndPoint}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error al realizar POST: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error; // Lanza el error para que pueda ser manejado externamente
  }
};
  export default postData;