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
    <div className="flex flex-col gap-4 text-center text-white justify-center ">
      <div>
        <h1 className="max-md:text-lg text-2xl font-bold max-md:py-2">
          Hey, parece que tienes tokens? no quieres comprar??
        </h1>
      </div>
      <div className="flex justify-around align-middle w-full  border-gray-200">
        <button
          className="max-md:text-medium text-xl max-md:text-lg font-bold self-center rounded-full bg-twitch-purple-dark max-md:py-2 py-2 max-md:px-6 px-6 hover:bg-twitch-purple"
          onClick={handleBuy}>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default TokenChange;
