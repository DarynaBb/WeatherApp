import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
    const [edit, setEdit] = useState(false);
    const [degree, setDegree] = useState("celsius");
    const [theme, setTheme] = useState("black");

    return (
        <MenuContext.Provider value={ {edit, setEdit, degree, setDegree, theme, setTheme} }>
            {children}
        </MenuContext.Provider>
    );
}

export { MenuContext, MenuContextProvider };