import React, {createContext, useContext, useState, useEffect } from 'react';
import { getAgenda, createContact, deleteContact, updateContact } from './externalActions';
import { AGENDA_URL, CONTACT_URL } from './externalStore';



const Context = createContext();




export const ContextProvider = ({children}) => {
    
    const [ agenda ,setAgenda ] = useState([]);
    const [ modalNewContact, setModalNewContact ] = useState(false);
    const [ modalEditContact, setModalEditContact ] = useState(false);
    const [ tempName, setTempName] = useState("");
    const [ tempEmail, setTempEmail] = useState("");
    const [ tempAddress, setTempAddress ] = useState("");
    const [ tempPhone, setTempPhone] = useState("");
    const [ selectedID, setSelectedID] = useState();
  

    useEffect(()=>{
        getAgenda(AGENDA_URL, setAgenda)
    },[])


    
    const handleTempName = (e) => setTempName(e.target.value);
    const handleTempEmail = (e) => setTempEmail(e.target.value);
    const handleTempAddress = (e) => setTempAddress(e.target.value);
    const handleTempPhone = (e) => setTempPhone(e.target.value)
    const handleModalNewContact = () => setModalNewContact(res => !res);
    const handleModalEditContact = () => setModalEditContact(res => !res);
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
    }

    const handleNewContactData = () => {
        const newData = {full_name:tempName,email:tempEmail,agenda_slug:"dmmstr",address:tempAddress, phone:tempPhone}
        createContact(CONTACT_URL ,newData, handleRefreshAgenda, console.log)
    }

    const handleUpdateContactData = () =>{
        const newData = {full_name:tempName,email:tempEmail,agenda_slug:"dmmstr",address:tempAddress, phone:tempPhone}
        updateContact(CONTACT_URL, selectedID, newData, handleRefreshAgenda, console.log)
    }


    const handleDeleteContact = (id) => {
        deleteContact(CONTACT_URL, id, handleRefreshAgenda, console.log)
    }
    
    const handleSelectedId = (id) => {
        setSelectedID(id)
    }



    const store = { agenda, modalNewContact, tempName, tempEmail, tempAddress, tempPhone, modalEditContact, selectedID };
    const actions = { handleSelectedId, handleModalNewContact, handleUpdateContactData, handleTempAddress,handleTempName,handleTempEmail,handleTempPhone, handleNewContactData, handleDeleteContact, handleEditContact, handleModalEditContact};

    return(
        <Context.Provider value={{ store, actions }}>
            {children}
        </Context.Provider>
    )
};

 // ESTE ES EL CUSTOM HOOK QUE DEBEMOS USAR PARA IMPORTAR DATOS DEL CONTEXTO
const useAppContext = () => useContext(Context);

export default useAppContext;