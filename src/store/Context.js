import React, {createContext, useContext, useState, useEffect } from 'react';
import { getAgenda } from './externalActions';



const Context = createContext();




export const ContextProvider = ({children}) => {

   const [ agenda ,setAgenda ] = useState([]);
   const [ modalNewContact, setModalNewContact ] = useState({});



    useEffect(()=>{
        getAgenda("https://assets.breatheco.de/apis/fake/contact/agenda/dmmstr", setAgenda)
    },[])


    const store = { agenda, modalNewContact };
    


    const actions = { };

    return(
        <Context.Provider value={{ store, actions}}>
            {children}
        </Context.Provider>
    )
};

 // ESTE ES EL CUSTOM HOOK QUE DEBEMOS USAR PARA IMPORTAR DATOS DEL CONTEXTO
const useAppContext = () => useContext(Context);

export default useAppContext;