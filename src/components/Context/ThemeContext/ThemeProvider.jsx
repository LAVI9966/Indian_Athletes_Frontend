import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
    const [editProfile, setEditProfile] = useState(false);
    return (
        <ThemeContext.Provider value={{ setEditProfile, editProfile }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
