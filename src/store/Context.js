import React, {createContext, useContext, useState, useEffect } from `react`




const Context = createContext({children});




export const ContextProvider = () => {


    //DATOS EJEMPLO DE COMO USAR EL CONTEXT DEL BOILERPLATE 
    const [test ,setTest] = useState("");
    const handleSetTest = () => setTest("Hola")

    // EN STORE ALMACENAMOS LOS DATOS PARA PASAR A TODA LA APP
    const store = { test, };
    
    // EN ACTIONS ALMACENAMOS TODAS LAS FUNCIONES QUE QUEREMOS PASAR AL RESTO DE LA FUNCION (EVITAR PONER setStates, usar handles intermedios)
    const actions = { handleSetTest };

    return(
        <Context.Provider value={{ store, actions}}>
            {children}
        </Context.Provider>
    )
};

 // ESTE ES EL CUSTOM HOOK QUE DEBEMOS USAR PARA IMPORTAR DATOS DEL CONTEXTO
const useAppContext = () => useContext(Context);

export default useAppContext;