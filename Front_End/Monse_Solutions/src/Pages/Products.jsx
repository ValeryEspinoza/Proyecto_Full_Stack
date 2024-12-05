import React from 'react'
import '../Styles/Pages_Styles/Products.css'
import SideBar from '../Components/Admin_Components/SideBar'
import ProductsTable from '../Components/Admin_Components/ProductsAdminData'

function Products() {
  return (
    <div className='contenedoresPaginas'>
       <SideBar />
       <div>
        <ProductsTable />
       </div>
       
    </div>
  )
}

export default Products
