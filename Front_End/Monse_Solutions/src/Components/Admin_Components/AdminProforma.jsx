import React from 'react'
import "../../Styles/Components_Styles/Admin_C_Styles/AdminProformas.css"
function AdminProforma() {
  return (
    <div className='bodyCotizacion'>
<div className='SeccionDos'>
    <div className="tituloContainer">
    <h1 className="titulo">Realización de Proformas</h1>
</div>
   
    <div className='ContenedorFormularioProformas'>  
        <div className='Datos clientes'>
        <h2>Datos del cliente</h2>
            <input placeholder='Correo de cliente' className='correo' type="email" />
            <input placeholder='Nombre completo de cliente' className='NombreCompleto' type="text" />
            <input placeholder='Fecha de realización de proforma' className='FechaProforma' type="date" />
            <input placeholder='Número telefónico de cliente' className='telefono cliente' type="tel" />
            <textarea placeholder='Tipo de cotización' className='tipoCotizacion'></textarea>
        </div>
        
        <div className='datosProforma'>
            <h2>Detalles de la Proforma</h2>
            <input placeholder='Servicio a Cotizar' className='inputProforma' type="text" />
            <input placeholder='Cantidad' className='inputProforma' type="number" />
            <input placeholder='Precio Unitario' className='Precio' type="number" />
            <input placeholder='Total' className='totalPrecioPorCantidad' type="text" readOnly />
            <textarea placeholder='Descripción' className='inputProforma'></textarea>

            <div className='DesgloseTotalCostos'>
                <input placeholder='Subtotal' className='subTotal' type="number" readOnly />
                <input placeholder='IVA (%)' className='IVA' type="number" />
                <input placeholder='Total' className='Total' type="number" readOnly />
            </div>
        </div>
        
        <button className='btnCreateProforma'>Crear Proforma</button>
    </div>
</div>
</div>
  )
}

export default AdminProforma