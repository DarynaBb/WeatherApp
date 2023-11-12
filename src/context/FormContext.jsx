import { createContext, useState } from "react";

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
    const [onFocus, setOnFocus] = useState(false);
    const [isCityFound, setIsCityFound] = useState(false);
    const [cityAlreadyExists, setCityAlreadyExists] = useState(false);

    return (
        <FormContext.Provider value={ {onFocus, setOnFocus, isCityFound, setIsCityFound, cityAlreadyExists, setCityAlreadyExists } }>
            {children}
        </FormContext.Provider>
    );
}

export { FormContext, FormContextProvider };