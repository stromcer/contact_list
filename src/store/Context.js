import React, {createContext, useContext, useState, useEffect } from 'react';
import { getAgenda, createContact, deleteContact, updateContact } from './externalActions';
import { AGENDA_URL, CONTACT_URL, AGENDA_NAME } from './externalStore';



const Context = createContext();




export const ContextProvider = ({children}) => {
    
    const [ agenda ,setAgenda ] = useState([]);
    const [ modalNewContact, setModalNewContact ] = useState(false);
    const [ modalEditContact, setModalEditContact ] = useState(false);
    const [ alert, setAlert ] = useState(true);
    const [ alertMsg, setAlertMsg ] = useState("")
    const [ tempName, setTempName] = useState("");
    const [ tempEmail, setTempEmail] = useState("");
    const [ tempAddress, setTempAddress ] = useState("");
    const [ tempPhone, setTempPhone] = useState("");
    const [ selectedID, setSelectedID] = useState();
    
  

    useEffect(()=>{
        getAgenda(AGENDA_URL, setAgenda)
    },[])


    const handleSelectedId = (id) => setSelectedID(id)
    const handleTempName = (e) => setTempName(e.target.value);
    const handleTempEmail = (e) => setTempEmail(e.target.value);
    const handleTempAddress = (e) => setTempAddress(e.target.value);
    const handleTempPhone = (e) => setTempPhone(e.target.value)
    const handleModalNewContact = () => setModalNewContact(res => !res);
    const handleModalEditContact = () => setModalEditContact(res => !res);
    const handleCloseAlert = () => setAlert(false)

    const handleNewAlert = (msg) => {
        console.log("alo");
        setAlertMsg(msg);
        setAlert(true);
        
    }
    
    const handleEditContact = (name, email, address, phone) =>  {
        setTempName(name);
        setTempEmail(email);
        setTempAddress(address);
        setTempPhone(phone);
        setModalEditContact(res => !res);
    }
    const handleRefreshAgenda = () => {
        getAgenda(AGENDA_URL, setAgenda)
        setModalNewContact(false);
        setModalEditContact(false);
        handleCloseAlert();
        
    }

    const handleNewContactData = () => {
        const newData = {full_name:tempName,email:tempEmail,agenda_slug: AGENDA_NAME,address:tempAddress, phone:tempPhone}
        createContact(CONTACT_URL ,newData, handleRefreshAgenda, handleNewAlert)
    }

    const handleUpdateContactData = () =>{
        const newData = {full_name:tempName,email:tempEmail,agenda_slug:AGENDA_NAME,address:tempAddress, phone:tempPhone}
        updateContact(CONTACT_URL, selectedID, newData, handleRefreshAgenda, handleNewAlert)
    }


    const handleDeleteContact = (id) => {
        deleteContact(CONTACT_URL, id, handleRefreshAgenda, handleNewAlert)
    }
    
   



    const store = { agenda, modalNewContact, tempName, tempEmail, tempAddress, tempPhone, modalEditContact, selectedID, alert , alertMsg };
    const actions = { handleCloseAlert, handleSelectedId, handleModalNewContact, handleUpdateContactData, handleTempAddress,handleTempName,handleTempEmail,handleTempPhone, handleNewContactData, handleDeleteContact, handleEditContact, handleModalEditContact};

    return(
        <Context.Provider value={{ store, actions }}>
            {children}
        </Context.Provider>
    )
};

 // ESTE ES EL CUSTOM HOOK QUE DEBEMOS USAR PARA IMPORTAR DATOS DEL CONTEXTO
const useAppContext = () => useContext(Context);

export default useAppContext;