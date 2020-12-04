import React, { useState } from 'react';
import NavbarComponent from './navbarComponent';

import '../css/Desarrolladores.css'
import bryan_photo from '../imagenes/bryan.jpeg'
import betsy_photo from '../imagenes/betsy.jpeg'

function DesarrolladoresComponent(){    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <html>
            <head>
                <meta name="author" content="Beescript"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            </head>
        <body>
        <NavbarComponent />
            <header id="eq_title">
             <h4>Equipo de desarrollo  </h4>
            </header>
            <div id="container_general">
            
            <div id="container_devs">
                <div id="dev_1" className="desarrollador col-md-6">
                    <img src={betsy_photo} alt="Karla Durán"/>
                    <p className="nombre_dev"> Karla Durán </p>
                    <p className="Description"> Estudiante de Ing. en Ciencias Computacionales en <a href="http://www.espol.edu.ec/">ESPOL</a><br/></p> 
                </div>

                <div id="dev_2" className="desarrollador col-md-6">
                    <img src={betsy_photo} alt="Betsy Nazareno"/>
                    <p className="nombre_dev"> Betsy Nazareno </p>
                    <p className="Description"> Estudiante de Ing. en Ciencias Computacionales en <a href="http://www.espol.edu.ec/">ESPOL</a><br/>
                                                e-mail: belinaza@espol.edu.ec <br/>
                                                </p> 
                </div>

                <div id="dev_3" className="desarrollador col-md-6">
                    <img src={bryan_photo} alt="Bryan Plaza"/>
                    <p className="nombre_dev"> Bryan Plaza </p>
                    <p className="Description"> Estudiante de Ing. en Ciencias Computacionales en <a href="http://www.espol.edu.ec/">ESPOL</a><br/>
                                                ... </p> 
                </div>
            </div>

            </div>
        </body>
       </html>
    );
}

export default DesarrolladoresComponent;