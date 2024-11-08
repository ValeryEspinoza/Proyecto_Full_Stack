/*import React, { useState } from 'react';
import GetKey from '../../Services/Get/GetKey';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';




const ProtectedRoute = ({ children }) => {
    const [key, SetKey]=useState("")

       async function ObtenerKey() {
     
        const acceso = await  GetKey() 
            SetKey(acceso)
   
    }

    ObtenerKey()

    if (!(key === false)) {
        return <Navigate to="/Home" />
    }

    return children;
};

export default ProtectedRoute;*/