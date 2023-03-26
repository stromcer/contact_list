import React from "react";
import UseAnimations from "react-useanimations";
import userMinus from "react-useanimations/lib/userMinus";
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
            <i>{id}</i>
            <b>{full_name}</b>
          </div>
        </div>
      </Accordion.Header>
      <Accordion.Body className="itemBody">
        <div className="itemInfo">
          <div>
            <div> Telefono :</div>
            <div>{phone}</div>
          </div>
          <div>
            <div> Correo electronico :</div>
            <div>{email}</div>
          </div>
          <div>
            <div> Direccion :</div>
            <div>{address}</div>
          </div>
          <div>
            <div> Fecha de creacion :</div>
            <div>{created_at}</div>
          </div>
        </div>

        <div className="itemPhotoButtons">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
            alt="dada"
          />
          <div className="headButtonContainer">
            <EditContactModal onEdit={handleEdit} />
            <div onClick={() => handleDeleteContact(id)}>
              <UseAnimations animation={userMinus} size={30} />
            </div>
          </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default ContactItem;
