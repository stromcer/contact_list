import React from "react";
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useAppContext from "../store/Context";


import '../styles/home.css'

const Home = () => {
    const {store, actions} = useAppContext();
    const {agenda} = store;

    return(
    <div className="appContainer">
        <div className="agendaHeader">
            <div> LISTA DE CONTACTOS </div>
            <button >Crear nuevo contacto</button>
        </div>
         <Accordion>
            {agenda.length 
            ? agenda.map((item,index)=>{
                return(
                    <Accordion.Item eventKey={index} key={item.email}>
                    <Accordion.Header  >
                        <div className="contactHeadContainer">
                            <div>{item.full_name}</div>
                            <div className="headButtonContainer">
                                <button> Editar </button>
                                <button> Borrar </button>
                            </div>
                        </div>    
                    </Accordion.Header>
                    <Accordion.Body>
                        <Row>
                        <Col>
                            <Row >Phone : {item.phone}</Row>
                            <Row >Email : {item.email}</Row>
                            <Row >Addres : {item.address}</Row>
                        </Col>
                        <Col> 
                            <img src="asd" />  
                        </Col>
                        </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                )
            })
            :"loading"}
         </Accordion>
    </div>

    )
}


export default Home;    