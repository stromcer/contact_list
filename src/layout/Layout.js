import React from "react";
import { Outlet } from "react-router-dom";

// EN ESTE ARCHIVO PODEMOS PONER UN NAVBAR Y UN FOOTER. EL LAYOUT HACE REFERENCIA AL CUERPO DE LA PAGINA QUE SE SOLICITA MEDIANTE LA URL. (ES EL CHILDREN DE LA RUTA)

const Layout = () => {

    return(
        <Outlet/>
    )
}

export default Layout;