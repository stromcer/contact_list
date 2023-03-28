import Alertbs from "react-bootstrap/Alert";
import useAppContext from "../store/Context";

function Alert({ msg }) {
  const { store, actions } = useAppContext();
  const { alert, alertMsg } = store;
  const { handleCloseAlert } = actions;

  return (
    <>
      {alert ? (
        <Alertbs variant="danger" onClose={handleCloseAlert} dismissible>
          <Alertbs.Heading>Ha ocurrido un error</Alertbs.Heading>
          <p> {alertMsg} </p>
        </Alertbs>
      ) : null}
    </>
  );
}

export default Alert;
