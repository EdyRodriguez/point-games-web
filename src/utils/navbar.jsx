import { Link } from 'react-router-dom';
import { useUserContext } from "../utils/userContext";

export default function Navbar() {
    const { user } = useUserContext();


        return(
                <>
                    <Link to="/" className=" text-xl hover:text-white">
                        Juegos
                    </Link>
                    {user.userName ? (
                        <Link to="/tokenValidation" className=" text-xl hover:text-white">
                            Tokens
                        </Link>
                    ) : (
                        <></>
                    )}
                    {user.userName ? (
                        <Link to="/purchases" className=" text-xl hover:text-white">
                            Mis Compras
                        </Link>
                    ) : (
                        <></>
                    )}
                    <Link to="/transactions" className=" text-xl hover:text-white">
                        Transacciones
                    </Link>
                </>
        );
}