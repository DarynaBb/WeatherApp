import { createContext, useState } from "react";

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
    const [onFocus, setOnFocus] = useState(false);

    return (
        <FormContext.Provider value={ {onFocus, setOnFocus} }>
            {children}
        </FormContext.Provider>
    );
}

export { FormContext, FormContextProvider };