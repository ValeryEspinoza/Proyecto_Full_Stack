import React from 'react'
import '../../Styles/Components_Styles/Admin_C_Styles/DashBoardTable.css'
/*import SalesChart from "../Gráficos_Components/SalesChart";*/

function DashBoardTable() {
  return (

<div className='bodyDashBoard'>
<section className="dashboard-hero-tabs">
<div className='FondoDashboard'>
<h1 className='DashboardTitle'>
  <span className='Dash'>Dash</span>
  <span className='Board'>Board</span>
</h1><br />
  </div>
  <div className="dashboard-hero-tabs-container">
    <a className="dashboard-hero-tab" href="#tab-es6">Ventas 2024</a>
    <a className="dashboard-hero-tab" href="#tab-angular">Ventas por producto</a>
    <a className="dashboard-hero-tab" href="#tab-other">Crecimiento de Clientes</a>
    <span className="dashboard-hero-tab-slider"></span>
  </div>
</section>

<main className="dashboard-main">
  <section className="dashboard-slide" id="tab-es6">
    <h1 className='SectionTitles'>Ventas 2024</h1>
    {/*<SalesChart dataEndpoint="sells/2024" />*/}
  </section>

  <section className="dashboard-slide" id="tab-angular">
    <h1 className='SectionTitles'>Ventas por producto</h1>
    <h3>something about angular</h3>
  </section>

  <section className="dashboard-slide" id="tab-other">
    <h1 className='SectionTitles'>Crecimiento de Clientes</h1>
    <h3>something about other</h3>
  </section>

</main>
    </div>

  )
}

export default DashBoardTable
