import React from "react";
import Accordion from "react-bootstrap/Accordion";

import ContactItem from "../components/ContactItem";

import useAppContext from "../store/Context";
import NewContactModal from "../components/NewContactModal";

import "../styles/home.css";

const Home = () => {
  const { store } = useAppContext();
  const { agenda } = store;

  return (
    <>
      <div className="appContainer">
        <div className="agendaHeader">
          <h3> LISTA DE CONTACTOS </h3>
          <NewContactModal />
        </div>

        <Accordion>
          {agenda.length
            ? agenda.map((singleContact) => (
                <ContactItem key={singleContact.id} data={singleContact} />
              ))
            : "loading"}
        </Accordion>
      </div>
    </>
  );
};

export default Home;
