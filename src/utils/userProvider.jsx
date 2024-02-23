import { useState } from 'react';
import UserContext from './userContext'; // Asegúrate de que la ruta sea correcta

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ tokens: '', userName: "", userToken: "" });

    const updateUser = (newUser) => {
        setUser(newUser);
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}
