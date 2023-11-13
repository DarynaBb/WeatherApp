import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
    const [edit, setEdit] = useState(false);
    const [degree, setDegree] = useState("celsius");
    const [theme, setTheme] = useState("black");
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [value, setValue] = useState(60);

    return (
        <MenuContext.Provider value={ {edit, setEdit, degree, setDegree, theme, setTheme,isDarkMode,setIsDarkMode, value,setValue} }>
            {children}
        </MenuContext.Provider>
    );
}

export { MenuContext, MenuContextProvider };