import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UseAnimations from "react-useanimations";
import edit from "react-useanimations/lib/settings";
import useAppContext from "../store/Context";
import NewContactForm from "./NewContactForm";
import Alert from "./Alert";

const EditContactModal = ({ onEdit }) => {
  const { store, actions } = useAppContext();
  const { modalEditContact, selectedID } = store;
  const { handleModalEditContact, handleUpdateContactData } = actions;

  return (
    <>
      <div onClick={onEdit}>
        <UseAnimations animation={edit} size={30} />
      </div>

      <Modal show={modalEditContact} onHide={handleModalEditContact}>
        <Modal.Header closeButton>
          <Modal.Title>Editar contacto : {selectedID} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert />
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
