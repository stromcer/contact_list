import React from "react";
import Accordion from "react-bootstrap/Accordion";

import ContactItem from "../components/ContactItem";
import EditContactModal from "../components/EditContactModal";
import useAppContext from "../store/Context";
import NewContactModal from "../components/NewContactModal";
import DelContactModal from "../components/DelContactModal";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/infinity";

import "../styles/home.css";

const Home = () => {
  const { store, actions } = useAppContext();
  const { agenda } = store;
  const { handleEdit } = actions;

  return (
    <>
      <div className="appContainer">
        <div className="agendaHeader">
          <h3> LISTA DE CONTACTOS </h3>
          <NewContactModal />
        </div>
        <DelContactModal />
        <EditContactModal onEdit={handleEdit} />
        <Accordion>
          {agenda.length ? (
            agenda.map((singleContact) => (
              <ContactItem key={singleContact.id} data={singleContact} />
            ))
          ) : (
            <UseAnimations className="loader" animation={loading} size={200} />
          )}
        </Accordion>
      </div>
    </>
  );
};

export default Home;
