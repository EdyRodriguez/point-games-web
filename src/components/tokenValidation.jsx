import { useEffect, useState } from "react";
import apiCalls from "../utils/apiCalls";
import { toast } from "react-hot-toast";
import fred from "../assets/fred.jpg";
function TokenValidation() {
  const [userName, setUserName] = useState("");
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      setUserName(localStorage.getItem("userName"));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = e.target.token.value;
    try {
      apiCalls.validateToken(token, userName).then((data) => {
        //logica para hacer saltar alerta si el token es valido o no
        if (data.message === "Tokens agregados con exito") {
          toast.success("Token Agregado a tu Cuenta!! :3");
          setTimeout(() => {
          localStorage.setItem("userTokenChanged", true);
          window.location.replace("/");
        }, 2000);
        setInputText("");
        } else {
          toast.error("Error al validar el token");
          setInputText("");
        }
      });
    } catch (error) {
      alert("" + error);
    }
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  return userName === "" ? (
    <section className="mx-auto flex flex-col gap-6 justify-center items-center text-white py-12 bg-gray-900 ">

    <h1 className=" sm:text-4xl text-3xl title-font font-bold text-white mb-12">Que haces aqui Freed?</h1>
    <img src={fred} alt="Que haces aqui Freed?" />
    <button onClick={() => window.location.replace("/")} className="bg-twitch-purple-dark text-white rounded-full px-4 py-2 hover:bg-twitch-purple">
        Vuelve a casa!
    </button>

    </section>
  ) : (
    <section className="mx-auto flex flex-col gap-6 justify-center items-center min-h-[50vh] text-white py-12 bg-gray-900 ">
      <div className=" text-center font-bold md:w-3/4 xl:w-1/2 py-8 rounded-3xl bg-twitch-pink max-md:w-[80%]">
        <h1 className=" md:text-4xl max-md:text-3xl title-font font-bold text-white md:mb-12">
          Tienes un token?
        </h1>
        <h2 className="md:text-3xl max-md:text-2xl font-medium ">Validalo aqui:</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            onChange={handleInput}
            className=" min-w-12 w-3/4  self-center rounded-xl md:py-4 md:px-2 md:my-8 text-twitch-dark text-2xl max-md:my-4 max-md:text-xl max-md:p-2 hover:bg-gray-300"
            value={inputText}
            type="text"
            name="token"
            id="token"
          />
          <button
          data-testid="tokenValidationButton"
            className="md:text-xl md:w-1/4 max-md:w-1/2 max-sm:py-2  self-center rounded-full bg-twitch-purple-dark text-xl md:py-4 md:px-2 md:mb-4 hover:bg-twitch-purple"
            type="submit">
            Validar
          </button>
        </form>
        <p className="text-center px-4 text-gray-400 max-sm:hidden">
            *Si entraste aqui sin haberte logueado antes o entraste poniendo un usuario aparte del tuyo, no podras validar el token.
        </p>
      </div>
    </section>
  );
}

export default TokenValidation;
