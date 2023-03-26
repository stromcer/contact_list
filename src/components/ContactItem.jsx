import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import useAppContext from "../store/Context";

import EditContactModal from "./EditContactModal";

const ContactItem = ({ data }) => {
  const { id, full_name, email, phone, address, created_at } = data;
  const { actions } = useAppContext();

  const { handleSelectedId, handleEditContact, handleDeleteContact } = actions;

  const handleEdit = () => {
    handleSelectedId(id);
    return handleEditContact(full_name, email, address, phone);
  };

  return (
    <Accordion.Item eventKey={id}>
      <Accordion.Header>
        <div className="contactHeadContainer">
          <div>
            {id} {full_name}
          </div>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <Row>
          <Col>
            <Row>Phone : {phone}</Row>
            <Row>Email : {email}</Row>
            <Row>Addres : {address}</Row>
            <Row>Created : {created_at}</Row>
          </Col>
          <Col>
            <div className="headButtonContainer">
              <EditContactModal onEdit={handleEdit} />
              <button onClick={() => handleDeleteContact(id)}> Borrar </button>
            </div>
            <img src="asd" alt=" " />
          </Col>
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default ContactItem;
