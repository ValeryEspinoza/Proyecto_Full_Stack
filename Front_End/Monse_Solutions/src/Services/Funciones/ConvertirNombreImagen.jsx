

  
const ConvertirNombreImagen = (nombreArchivo) => {

    console.log(nombreArchivo);
    
    const generarCadenaAleatoria = (longitudMinima = 20) => {
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const longitud = Math.floor(Math.random() * (30 - longitudMinima + 1)) + longitudMinima; // Entre 20 y 30 caracteres
        
        return Array.from({ length: longitud }, () => 
          caracteres.charAt(Math.floor(Math.random() * caracteres.length))
        ).join('');
      };


    const extension = nombreArchivo.trim().split('.').pop(); // Obtener extensión
    const nombreAleatorio = generarCadenaAleatoria(20); // Generar nombre aleatorio
    return `${nombreAleatorio}.${extension}`; // Retornar el nuevo nombre
};

export default  ConvertirNombreImagen ;

