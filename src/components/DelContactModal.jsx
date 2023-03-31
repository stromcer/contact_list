import React from "react";
import useAppContext from "../store/Context";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DelContactModal = () => {
  const { store, actions } = useAppContext();
  const { modalDelContact, selectedID } = store;
  const { handleModalDelContact, handleDeleteContact } = actions;

  return (
    <>
      <Modal show={modalDelContact} onHide={handleModalDelContact}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar contacto : {selectedID} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3> ¿ Estas seguro ? </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleModalDelContact}>
            No
          </Button>
          <Button variant="success" onClick={handleDeleteContact}>
            Si
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DelContactModal;
