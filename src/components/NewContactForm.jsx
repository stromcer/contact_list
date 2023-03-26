import React from "react";
import Form from "react-bootstrap/Form";
import useAppContext from "../store/Context";

const NewContactForm = () => {
  const { store, actions } = useAppContext();

  const {
    handleTempName,
    handleTempEmail,
    handleTempAddress,
    handleTempPhone,
  } = actions;
  const { tempName, tempEmail, tempAddress, tempPhone } = store;

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Full Name :</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Nombre Apellido Apellido"
          value={tempName}
          onChange={handleTempName}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email :</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ej: email@domain.com"
          value={tempEmail}
          onChange={handleTempEmail}
        />
        <Form.Text className="text-muted">
          No se pueden asignar el mismo correo a varios contactos.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Direccion :</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: C/ falsa 123"
          value={tempAddress}
          onChange={handleTempAddress}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Telefono :</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: 666 99 66 99"
          value={tempPhone}
          onChange={handleTempPhone}
        />
      </Form.Group>
    </Form>
  );
};

export default NewContactForm;
