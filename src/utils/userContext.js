import { createContext, useContext} from 'react';

const UserContext = createContext();

// Este es el hook personalizado que tus componentes utilizarán para acceder al contexto
export const useUserContext = () => useContext(UserContext);

export default UserContext;
