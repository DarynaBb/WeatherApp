import { createContext, useState } from "react";

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
    const [onFocus, setOnFocus] = useState(false);
    const [isCityFound, setIsCityFound] = useState(false);

    return (
        <FormContext.Provider value={ {onFocus, setOnFocus, isCityFound, setIsCityFound } }>
            {children}
        </FormContext.Provider>
    );
}

export { FormContext, FormContextProvider };