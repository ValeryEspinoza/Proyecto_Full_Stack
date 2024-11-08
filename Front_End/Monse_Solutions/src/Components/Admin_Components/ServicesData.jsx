import React, { useEffect, useState } from 'react'
import "../../Styles/Components_Styles/Admin_C_Styles/ServicesData.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import GetServices from '../../Services/Get/GetServices'
import DeleteServices from '../../Services/Delete/DeleteServices'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditServices from '../../Services/Put/PutServices'

function ServicesData() {
////Hooks
 const [DatosServicios, SetDatosServicios] = useState([]);
 const [datoModal , SetDatoModal]=useState([]);

 const [boleServicio, setBolServicio] = useState(false);
 const [boleDescripcion, setBolDescripcion] = useState(false);
 const [boleDetalles, setBolDetalles] = useState(false);


 ///Enviar al put
 const [Prueba, SetPrueba]= useState()
 const [Prueba2, SetPrueba2]= useState()
 const [Prueba3, SetPrueba3]= useState()

 ///Valores 
 const [ServicioValue, SetServicioValue]=useState();
 const [DescripcionValue, SetDescripcionValue]=useState();
 const [ImagenValue, SetImagenValue]=useState();
 const [DetallesValue, SetDetallesValue]=useState();



 //Hooks Boostrap
 const values = [true];
 const [fullscreen, setFullscreen] = useState(true);
 const [show, setShow] = useState(false);



//Funcion Boostrap 
 function handleShow(breakpoint) {
   setFullscreen(breakpoint);
   setShow(true);
 }

///// Obtener Servicios
  useEffect(()=>{

    async function ObtenerServiciosData() {

    const servicesData = await GetServices()

   
    SetDatosServicios(servicesData)
    }

    ObtenerServiciosData()
    
  }, [])

/// Delete
  function Delete(id) {
  DeleteServices(id)
  }

/////Carga de datos al Modal
  function  cargarDatos(DatosServicios,id) {
    const registroFiltrado= DatosServicios.filter(e=> e.id === id)
    console.log(registroFiltrado);
    SetDatoModal(registroFiltrado)
    {values.map((v) => ( 

      handleShow(v)

      ))}

  
  }

//////Formulario ///
function ObtenerDatos(formData) {
  const NombreS = formData.get("ServicioS")
  const DetalleS = formData.get("DetalleS")
  const DescripcionS = formData.get("Descripcions")
  SetServicioValue(NombreS)
  SetDetallesValue(DetalleS)
  SetDescripcionValue(DescripcionS)
  
}
console.log(ServicioValue);
console.log(DescripcionValue);
console.log(DetallesValue);




  return (
<div className='container'>
  <h1 className='tituloServicios'>Servicios</h1>

  <div className='tablaServicios'>
    {/* Lista de encabezados */}
    <ul className='EncabezadoTitulo'>
      <li className='items'>Imagen</li>
      <li>Nombre Servicio</li>
      <li>Descripcion del Servicio</li>
      <li>Detalles del servicio</li>
      <li>Acciones</li>
    </ul>

    {/* Tabla */}
    {DatosServicios.map((servicesDato) => (
      <ul className='encabezadoLista' key={servicesDato.id}>
        <li className='itemImagen'><img className='ImagenServices' src={servicesDato.Imagen} alt="Servicio" /></li>
        <li className='itemServices'>{servicesDato.Servicio}</li>
        <li className='itemServices'>{servicesDato.Descripcion}</li>
        <li className='itemServices'>{servicesDato.Detalle}</li>
        <li className='botonesContenedor'>
          <button onClick={() => Delete(servicesDato.id)} className='btnDelete'><FontAwesomeIcon icon={faTrash} /></button>
          <Button className="me-4 mb-4" onClick={() => cargarDatos(DatosServicios, servicesDato.id)}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>
        </li>
      </ul>
    ))}
  </div>


  {/* Modal para editar servicio */}
  <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
  <Modal.Header closeButton className="modalHeaderServicesData">
  <Modal.Title className="modalHeaderServicesDataTitle">Editar Servicio</Modal.Title>
</Modal.Header>
    <Modal.Body className='modalBodyServicesData'>
    <form action={ObtenerDatos}>
      <input placeholder='Nombre del Servicio' name="ServicioS"/>
      <input placeholder='Descripcion del servicio' name='DescripcionS' onChange={DescripcionValue}/>
      <input  type="text" name="DetalleS" onChange={DetallesValue} />
      <input name='Imagen' type="file" />
      <button type="submit">Editar</button>
    </form>
</Modal.Body>
  </Modal>
</div>
  )
}

export default ServicesData

{/*suppressContentEditableWarning={true}  */}



/*  <img className='ImagenServicesEdit' src={datoModal[0]?.Imagen} alt="Imagen" />
  <div className='contenedorFormularioEdit'>
    <input onChange={ConvetirImagen} className='inputServiceData' type="file" />
    <input 
      defaultValue={datoModal[0]?.Servicio} 
      onChange={e => cargaServi(e, true)} 
      className='inputServiceData' 
      type="text" 
      placeholder='Nombre Servicio' 
    />
    <input 
      defaultValue={datoModal[0]?.Descripcion} 
      onChange={e => cargaDescripcion(e, true)} 
      className='inputServiceData' 
      type="text" 
      placeholder='Descripción' 
    />
    <input 
      defaultValue={datoModal[0]?.Detalle} 
      onChange={e => cargaDetalles(e, true)} 
      className='inputServiceData' 
      type="text" 
      placeholder='Detalles' 
    />
  </div>
  <button className='updateButton' onClick={e => Edit(datoModal.id)}>Actualizar</button>
  

  ////Boton Editar
  function Edit(Id) {
     
    if ( boleServicio===true ) {
      SetPrueba(ServicioValue);
      
    }else{
      SetPrueba(datoModal[0]?.Servicio);
      
    }

    if ( boleDescripcion===true ) {
      SetPrueba2(DescripcionValue);
      
    }else{
      SetPrueba2(datoModal[0]?.Descripcion);
      
    }

    if (boleDetalles===true) {
      SetPrueba3(DetallesValue);
    }else{
      SetPrueba3(datoModal[0]?.Detalle);
    }

    const serviciosEdit={
      Servicio : Prueba,
      Descripcion: Prueba2,
      Detalle: Prueba3
     }
     
   EditServices(serviciosEdit, Id )

      console.log(serviciosEdit);
     console.log(Prueba);
     console.log(Prueba2);
     console.log(Prueba3);

  }



  /////Cargar Servicio Editado

  function cargaServi(e,v) {
    setBolServicio(v)
      

    SetServicioValue(e.target.value)

  }

  function cargaDescripcion(e,v) {
    setBolDescripcion(v)
    SetDescripcionValue(e.target.value)
    
  }
  function cargaDetalles(e,v) {
    setBolDetalles(v)
    SetDetallesValue(e.target.value)
    
  }
  function ConvetirImagen() {
    const data = new FileReader()
   data.addEventListener("load", ()=>(
    SetImagenValue(data.result)
   ))}
  */