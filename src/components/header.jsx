import { useEffect } from "react";
import apiCalls from "../utils/apiCalls";
import wolfito from "../assets/wolfito-removebg-preview.png";
import { useState } from "react";
import { toast} from "react-hot-toast";
import TokenChange from "./tokenChange";

function Header() {
  const [userName, setUserName] = useState(false);
  const [token, setToken] = useState(0);

  function sendToast() {  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } w-1/2 justify-center p-8 bg-twitch-pink shadow-lg rounded-full pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5`}>
      <button className=" self-end text-2xl font-bold text-white pr-12 " onClick={() => toast.dismiss(t.id)}>X</button>
      <TokenChange />
    </div>
  ));
    }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.hash);
    const token = urlParams.get("#access_token");
    if (token) {
      localStorage.setItem("accessToken", token);
      window.location.hash = "";
    }
  }, []);


  useEffect( () => {
    if(localStorage.getItem("userName")){
      setUserName(localStorage.getItem("userName"));
      apiCalls.getUserTokens(localStorage.getItem("userName")).then((data) => {
        setToken(data.tokens);
        if(data.tokens > 0){
          sendToast();
        }
      });
    }else{
    if (localStorage.getItem("accessToken")) {
      const token = localStorage.getItem("accessToken");
      apiCalls.validateUser(token).then((data) => {
        setUserName(data.login);
        localStorage.setItem("userName", data.login);
        apiCalls.getUserTokens(data.login).then((data) => {
          setToken(data.tokens);
        });
      });
    }
  }
  }, []);

  const handleOnLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    window.location.reload();
  };

 const  client_id = import.meta.env.VITE_CLIENT_ID;



  return (
    <header className="text-gray-400 bg-twitch-dark body-font text-center">
      <div className="container  mx-auto flex justify-between p-5 flex-col md:flex-row items-center sm:flex-row">
        <div className="flex w-1/3 items-center title-font gap-4 font-medium  text-white mb-4 md:mb-0  flex-row justify-start">
          <a>
            <img
              src={wolfito}
              className="w-14 h-14 text-white p-2 bg-indigo-500 rounded-full"
              alt="Edy icon"
            />
          </a>
            <span className=" text-xl">EdyConY</span>
        </div>

        <nav className="md:mx-auto w-1/3 flex flex-wrap gap-4 items-center text-base justify-center">
          <a href="/" className=" text-xl hover:text-white">
            Juegos
          </a>
          {userName ? (
            <a href="/tokenValidation" className=" text-xl hover:text-white">
              Tokens
            </a>
          ) : (
            <></>
          )}
          <a href="/transactions"  className=" text-xl hover:text-white">
            Transacciones
          </a>
        </nav>
        {userName ? (
          <div className="flex w-1/3 gap-4 justify-end items-center">
            <span className="flex text-white text-xl  font-bold">
              Bienvenido: <p className=" text-twitch-blue px-2"> {userName}</p>
            </span>
            <span className="text-center ">
              Tienes:{" "}
              <p>
                {token} token{token > 1 ? "s" : ""}{" "}
              </p>
            </span>
            <a
              onClick={handleOnLogOut}
              className="content-center inline-block group bg-gray-800 rounded px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-gray-600   rounded text-base mt-4 md:mt-0 sm: mt-0">
              Salir
            </a>
          </div>
        ) : (
          <div className="w-1/3 flex justify-end">
            <a
              className="flex w-1/3 gap-2 justify-center content-center inline-block group bg-twitch-purple rounded px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-twitch-purple-dark  rounded text-base mt-4 md:mt-0 sm: mt-0"
              href={`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=https://point-games-web.vercel.app/&scope=user%3Aread%3Abroadcast`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 translate-y-1"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
              Login
            </a>
          </div>
        )}
      </div>
    </header>
  );

}

export default Header;
