import React, { useState, useEffect } from 'react'
import "../../Styles/Components_Styles/Home_C_Styles/HomeServicesRamdom.css"
import GetServices from '../../Services/Get/GetServices'
import { Card, CardBody, CardText, CardTitle, CardImg, Button } from 'react-bootstrap'


function HomeServicesRamdom() {
    const [Services, SetServices]=useState([])
    
    useEffect(()=>{
    async function ObtenerServicios() {
    const ServicesData = await GetServices()
      SetServices(ServicesData)
    }

    ObtenerServicios()

  }, [])
  return (
    <div>
        <div className='ContenedorServicesHome'>
          <h1>HomeServicesRamdom</h1>
              
          <div className='ServiciosCard'>
          {Services.map((services) => (
            <Card className='CardsColumContent' key={services.id}>
                
                <Card className='CardContent' style={{ width: '18rem' }}>
                <CardImg className='imgCard' variant="top" src={services.Imagen} />
                  <CardBody className='cardB'>
                    
                    <CardTitle className='TitleCard'>
                      {services.Servicio}
                    </CardTitle>

                    <CardText className='DescriptionCard'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </CardText>

                    <CardText className='DetailCard'>
                    {services.Detalle}
                    </CardText>
                    <Button >Go somewhere</Button>
                   </CardBody>
                </Card>
              
            </Card>
            
          ))}
          </div>
        </div>
    

    </div>
  )
}

export default HomeServicesRamdom