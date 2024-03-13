import { useEffect } from "react";
import apiCalls from "../utils/apiCalls";
import wolfito from "../assets/wolfito-removebg-preview.png";
import { toast } from "react-hot-toast";
import TokenChange from "./tokenChange";
import { useUserContext } from "../utils/userContext";
import Navbar from "../utils/navbar";
import LoginButton from "../utils/loginButton";
import UserDropdown from "../utils/userDropdown";

function Header() {
  const { user, updateUser } = useUserContext();

  function sendToast() {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } w-1/2 justify-center p-8 bg-twitch-pink shadow-lg rounded-full pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5`}>
        <button
          className=" self-end text-2xl font-bold text-white pr-12 "
          onClick={() => toast.dismiss(t.id)}>
          X
        </button>
        <TokenChange />
      </div>
    ));
  }

 async  function validateUserToken(userToken) {
    await apiCalls.validateUser(userToken).then((data) => {
      localStorage.setItem("userName", data.login);
      localStorage.setItem("userToken", data.userToken);
      localStorage.setItem("userTokenChanged", true);
      localStorage.setItem("userImage", data.profileImage);
      if (user.tokens == "" || user.tokens == 0) {
        userTokenChanged(data.login, data.userToken);
      }
    });
    localStorage.setItem("userTokenChanged", false);
  }

  function userTokenChanged(dataUserName, dataUserToken) {
    apiCalls.getUserTokens(dataUserName).then((data) => {
      updateUser({
        userName: dataUserName,
        userToken: dataUserToken || localStorage.getItem("userToken"),
        tokens: data.tokens,
        userImage: localStorage.getItem("userImage"),
      });
    });
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.hash);
    const token = urlParams.get("#access_token");
    if (token) {
      localStorage.setItem("accessToken", token);
      validateUserToken(token);
      window.location.hash = "";
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      if (localStorage.getItem("userTokenChanged")) {
        userTokenChanged(localStorage.getItem("userName"));
        localStorage.setItem("userTokenChanged", false);

      }
      if (user.tokens != "" && user.tokens == 0) {
        sendToast();
      }
    } else {
      if (localStorage.getItem("accessToken")) {
        let userToken = localStorage.getItem("accessToken");
        validateUserToken(userToken);
      }
    }
  }, []);



  return (
    <header className="text-gray-400 bg-twitch-dark body-font text-center">
      <div className="container  mx-auto flex justify-between p-5 md:flex-row  items-center max-sm:gap-4 max-sm:flex-row">
        <div className="flex md:w-1/3 max-sm:w-1/2 items-center title-font gap-4 font-medium  text-white mb-4 md:mb-0  flex-row justify-start">
          <a>
            <img
              src={wolfito}
              className="w-14 h-14 -md:w-full text-white p-2 bg-indigo-500 rounded-full"
              alt="Edy icon"
            />
          </a>
          <span className=" text-xl">EdyConY</span>
        </div>
        <div className="flex max-md:w-1/2 items-center title-font gap-4 font-medium xl:hidden text-white  mb-4 md:mb-0  flex-row justify-end">
          <UserDropdown />
        </div>
        <nav className="md:mx-auto md:w-1/3 flex flex-wrap gap-4 items-center text-base justify-center max-xl:hidden">
          <Navbar />
        </nav>
        {user.userName ? (
          <div className="flex md:w-1/3 gap-4 justify-end items-center max-xl:hidden">
            <span className="flex text-white text-xl  font-bold">
              Bienvenido: <p className=" text-twitch-blue px-2"> {user.userName}</p>
            </span>
            <UserDropdown />
          </div>
        ) : (
          <div className="md:w-1/3 flex md:justify-end -md:justify-center max-xl:hidden">
            <LoginButton />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
