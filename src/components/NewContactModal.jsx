import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UseAnimations from "react-useanimations";
import newContact from "react-useanimations/lib/userPlus";
import useAppContext from "../store/Context";
import NewContactForm from "./NewContactForm";

const NewContactModal = () => {
  const { store, actions } = useAppContext();
  const { modalNewContact } = store;
  const { handleModalNewContact, handleNewContactData } = actions;

  return (
    <>
      <UseAnimations
        onClick={handleModalNewContact}
        animation={newContact}
        size={36}
      />

      <Modal show={modalNewContact} onHide={handleModalNewContact}>
        <Modal.Header closeButton>
          <Modal.Title>Datos del nuevo contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewContactForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalNewContact}>
            Close
          </Button>
          <Button variant="primary" onClick={handleNewContactData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewContactModal;
