import React from 'react'
import '../../Styles/Components_Styles/Admin_C_Styles/DashBoardTable.css'

function DashBoardTable() {
  return (

<div className='bodyDashBoard'>

<section className="dashboard-hero-tabs">
  <h1>DashBoard</h1>
  <h3>Sliding content with sticky tab nav</h3>
  <div className="dashboard-hero-tabs-container">
    <a className="dashboard-hero-tab" href="#tab-es6">Ventas por Producto o Servicio</a>
    <a className="dashboard-hero-tab" href="#tab-flexbox">Distribución de Ventas por Canal (online, físico, etc.)</a>
    <a className="dashboard-hero-tab" href="#tab-react">Margen de Ganancia por Producto/Servicio</a>
    <a className="dashboard-hero-tab" href="#tab-angular">Crecimiento de Clientes</a>
    <a className="dashboard-hero-tab" href="#tab-other">Valor Promedio de Compra (Ticket Promedio)</a>
    <span className="dashboard-hero-tab-slider"></span>
  </div>
</section>

<main className="dashboard-main">
  <section className="dashboard-slide" id="tab-es6">
    <h1>Ventas por Producto o Servicio</h1>
    <h3>something about es6</h3>
  </section>
  <section className="dashboard-slide" id="tab-flexbox">
    <h1>Distribución de Ventas por Canal (online, físico, etc.)</h1>
    <h3>something about flexbox</h3>
  </section>
  <section className="dashboard-slide" id="tab-react">
    <h1>Margen de Ganancia por Producto/Servicio</h1>
    <h3>something about react</h3>
  </section>
  <section className="dashboard-slide" id="tab-angular">
    <h1>Crecimiento de Clientes</h1>
    <h3>something about angular</h3>
  </section>
  <section className="dashboard-slide" id="tab-other">
    <h1>Valor Promedio de Compra (Ticket Promedio)</h1>
    <h3>something about other</h3>
  </section>

</main>
    </div>

  )
}

export default DashBoardTable
