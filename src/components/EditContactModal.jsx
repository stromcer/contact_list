import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import useAppContext from "../store/Context";
import NewContactForm from "./NewContactForm";

const EditContactModal = ({ onEdit }) => {
  const { store, actions } = useAppContext();
  const { modalEditContact, selectedID } = store;
  const { handleModalEditContact, handleUpdateContactData } = actions;

  return (
    <>
      <Button onClick={onEdit}>Editar</Button>

      <Modal show={modalEditContact} onHide={handleModalEditContact}>
        <Modal.Header closeButton>
          <Modal.Title>Editar contacto : {selectedID} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewContactForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" onClick={handleUpdateContactData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditContactModal;
