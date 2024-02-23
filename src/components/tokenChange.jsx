import { useEffect, useState } from "react";
import apiCalls from "../utils/apiCalls";
import toast from "react-hot-toast";
import { useUserContext } from "../utils/userContext";

function TokenChange() {
  const [userName, setUserName] = useState("");
  const { user, updateUser } = useUserContext();
  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
  }, []);

  const handleBuy = (e) => {
    e.preventDefault();
    try {
      apiCalls.changeToken(userName).then((data) => {
        if (data.nombre) {
            localStorage.setItem("gameName", data.nombre);
            localStorage.setItem("gameImage", data.img);
            localStorage.setItem("gameKey", data.key);
            localStorage.setItem("userTokenChanged", true);
            updateUser({ userName: userName, userToken: user.userToken, tokens: user.tokens - 1 });
            window.location.replace("/");
        } else {
          toast.error("Error al validar el token");
        }
      });
    } catch (error) {
      alert("" + error);
    }
  };
  return (
    <div className="flex flex-col gap-4 text-center text-white justify-center">
      <div>
        <h1 className="sm:text-2xl text-3xl font-bold">
          Hey, parece que tienes tokens? no quiere comprar??
        </h1>
      </div>
      <div className="flex justify-around align-middle w-full  border-gray-200">
        <button
          className="sm:text-medium w-1/2 self-center rounded-full bg-twitch-purple-dark py-4 px-6 mb-4 hover:bg-twitch-purple"
          onClick={handleBuy}>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default TokenChange;
