import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
    const [edit, setEdit] = useState(false);
    const [isEditDone, setIsEditDone] = useState(false);
    const [degree, setDegree] = useState("celsius");

    return (
        <MenuContext.Provider value={ {edit, setEdit, degree, setDegree} }>
            {children}
        </MenuContext.Provider>
    );
}

export { MenuContext, MenuContextProvider };