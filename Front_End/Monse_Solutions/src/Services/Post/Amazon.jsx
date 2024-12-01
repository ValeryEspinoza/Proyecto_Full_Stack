
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



async function Amazon(Imagen) {
    // Primero, sube la imagen a S3
  let imagenUrl = '';


  const imagenAmazon = Imagen

  console.log(imagenAmazon);
  



  //Validacion pendiente de nombre de imagen
  
  if (imagenAmazon) {
    try {
      const result = await uploadImageToS3(imagenAmazon);
      console.log(result);
      
      imagenUrl = result.Location; // Obtén la URL de la imagen subida
      console.log("SOY LA URL QUE ME DEVOLVIO AMAZON ",imagenUrl); 
    } catch (error) {
      console.error('Error al subir la imagen a S3:', error);
      throw new Error('No se pudo subir la imagen a S3');
    }
  }
     

  console.log(imagenUrl);
       
    /*
    console.log(Imagen = imagenUrl);
    console.log(Imagen);
    const UrlImagen = {

      imagen_url: imagenUrl || Imagen, // Asegúrate de usar la URL correcta
   
    };*/

    return imagenUrl
}


export default Amazon;