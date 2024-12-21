
import AWS from 'aws-sdk';

const S3_BUCKET = 'monsesolutionsdb'; 
const REGION = 'us-east-2'; 

const s3 = new AWS.S3({
  accessKeyId: 'AKIAYDWHTKYJ2FLDBRHV',
  secretAccessKey: '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',
  region: REGION,
});


export const uploadImageToS3 = async (file) => {
  const params = {
    Bucket: S3_BUCKET,
    Key: file.name, 
    Body: file,
    ContentType: file.type,
  
  };

  return s3.upload(params).promise();
};





// Función para guardar el producto

async function SendServices(
  Service,
  Description,
  Imagen,
  Category
){
  

  // Primero, sube la imagen a S3
  let imagenUrl = '';


  
  console.log("Datos", 
    Service,
    Description,
    Imagen,
    Category
  );
  const imagenAmazon = Imagen

  console.log(imagenAmazon);
  



  //Validacion pendiente de nombre de imagen
  
  if (imagenAmazon) {
    try {
      const result = await uploadImageToS3(imagenAmazon);
      imagenUrl = result.Location; // Obtén la URL de la imagen subida
      console.log("SOY LA URL QUE ME DEVOLVIO AMAZON ",imagenUrl); 
    } catch (error) {
      console.error('Error al subir la imagen a S3:', error);
      throw new Error('No se pudo subir la imagen a S3');
    }
  }
     

  console.log(Imagen = imagenUrl);
  console.log(Imagen);
  const data = {
    service: Service,
    description: Description,
    imagen_url: imagenUrl || Imagen, // Asegúrate de usar la URL correcta
    category: Category
  };

  try {
    const response = await fetch('http://192.168.88.198:8000/api/services/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('Estado de la respuesta:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text(); // Obtener texto completo para depuración
      throw new Error(`Error al guardar el Servicio: ${response.status} - ${errorText}`);
    }

    const nuevoProducto = await response.json();
    console.log('Producto guardado:', nuevoProducto);
    return nuevoProducto; 
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error; 
  }
}

export default { SendServices }; // Asegúrate de que esta línea sea


