const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");



 

//Permite interpretar lso datos del cuerpo de la solicitud
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Servidor
app.listen(PORT, ()=>{
    console.log(`Servidor esta corriendo en http://192.168.1.87/${PORT}`);
});

//Ligar el html form con los datos
app.get(`/register`, (req, res)=>{
    res.sendFile(path.join(__dirname, `form.html`));
});



///////////////////////token


//ruta a proteger
app.get(`/`, (req, res, next)=>{
    const err= new Error(`Algo salió mal`);
    next(err); // pasa el error al siguiente middleware
});

// middleware de manejo acceso con token para una ruta en especifico
app.use((err, req, res, next)=>{     
    const token = req.headers.token;
    console.log(token);
   if (token) {
    res.status(200).send(`Bienvenido(a)!`) 
    next()
   }else{
    console.error(err.message); //Registrar el error
    res.status(403).send(`Acceso denegado: Se requiere un x-auth-token valido`) 
   }
    
});

/////

//Definicion de un middleware
app.use(`/proveedores`,(req, res, next)=>{
    const fecha = new Date()
    console.log(`Método: ${req.method} - Ruta: ${req.url}, Fecha: ${fecha}`);
    next() //pasar al siguiente middleware
});

//Ruta Principal
app.get(`/`, (req, res)=>{  
    const fecha = new Date()
    res.send(`Hola Mundo`);
});




//Ruta POST para recibir datos de un formulario
app.post(`/registro`, (req, res)=>{
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    res.send(`Usuario registrado: ${nombre}, con edad: ${edad}`);
});


//Practica con respuesta en formato json
app.post(`/registro`, (req, res)=>{
    const nombre = req.body.nombre;
    const email = req.body.email;
    res.json({Nombre: nombre, Correo: email})
});

//Recibir un id desde el URL
app.get("/inicio/:id", (req, res) =>{
    const id = req.params.id
    res.send(`id:  ${id}`)
});