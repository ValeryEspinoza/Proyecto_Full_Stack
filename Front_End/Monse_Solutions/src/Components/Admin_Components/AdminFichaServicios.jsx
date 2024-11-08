import React from "react"
import { useState } from "react"
import "../../Styles/Components_Styles/Admin_C_Styles/AdminFichaServicios.css"
import SendServices from '../../Services/Post/PostServices'
import Swal from "sweetalert2"


function AdminFichaServicios() {

  const [InsetarServicio, SetInsertarServicio]=useState("")
  const [DescripcionServicio, SetDescipcionServicio]=useState("")
  const [DetalleServicio, SetDetalleServicio]=useState("")
  const[Img, SetImg]=useState()

  function GetServicio(input) {
    SetInsertarServicio(input.target.value)
  }
  function GetDescripcionServicio(input) {
    SetDescipcionServicio(input.target.value)
  }
  function GetDetalleServicio(input) {
    SetDetalleServicio(input.target.value)
  }

function ConvetirImagen(e) {
  console.log(e.target.files);
  const data = new FileReader()
 data.addEventListener("load", ()=>(
  SetImg(data.result)
 ))

 data.readAsDataURL(e.target.files[0])
  
}


 async function AddServicio() {
  
   if (!(InsetarServicio === "") && !(DescripcionServicio ==="") && !(DetalleServicio==="")) {
    Swal.fire({
      title: "Servicio Creado con exito!",
      text: "",
      icon: "success"

    });
    SendServices(InsetarServicio, DescripcionServicio, DetalleServicio, Img)
    
   }else{
    Swal.fire({
      title: "No puede quedar espacios en blanco",
      text: "",
      icon: "error"

    });
   }
 }


  return (
   <div className="bodyServicioHome">
     <div className='SeccionUno'>
    <div className='ContenedorTitulo'>
        <h1 className='TituloH2'>Ingresar Servicio a Home</h1>
    </div>

    <div className='ContenedorFormularioServicios'>
        <input 
            className='inputServicioUno' 
            onChange={ConvetirImagen} 
            placeholder='Insertar Imagen' 
            type="file" 
            multiple 
        />
        <input 
            className='inputServicioUno' 
            onChange={GetServicio} 
            placeholder='Insertar servicio a Mostrar' 
            value={InsetarServicio} 
        />
        <textarea 
            className='inputServicioUno' 
            onChange={GetDescripcionServicio} 
            placeholder='Descripción' 
            value={DescripcionServicio} 
        />
        <input 
            className='inputServicioUno' 
            onChange={GetDetalleServicio} 
            placeholder='Detalles' 
            value={DetalleServicio} 
        />
        <button 
            onClick={AddServicio} 
            className='btnAddServices'>
            Add
        </button>
    </div>
</div>
   </div>
  )
}


export default AdminFichaServicios