// Función para decodificar el payload del JWT
const decodeJwtPayload = (token) => {
    console.log(token);
    
    const base64Url = token.split('.')[1]; // El payload está en la segunda parte
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Decodificamos el base64
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload); // Devolvemos el JSON decodificado
  };