import { useEffect, useState } from "react";
import apiCalls from "../utils/apiCalls";
import { FaEye, FaRegCopy, FaCopy, FaEyeSlash, FaSteam } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Purchases() {
  const [games, setGames] = useState([]);
  const [showPassword, setShowPassword] = useState({});
  const [copied, setCopied] = useState(false);

  const handleTogglePassword = (id) => {
    setShowPassword((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setCopied(false);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copiado al portapapeles");
    setCopied(true);
  }

  useEffect(() => {
    if (localStorage.getItem("userToken") && localStorage.getItem("userName")) {
      const userName = localStorage.getItem("userName");
      apiCalls.getUserGames(userName).then((data) => {
        setGames(data);
      });
    } else {
      return window.location.replace("/");
    }
  }, []);

  return (
    <>
      <section className="mx-auto flex flex-col gap-6 justify-center min-h-[80vh] items-center text-center text-white py-12 bg-gray-900 ">
        <div className="w-2/3 mx-auto  flex justify-center align-center gap-8">
          {games.length === 0 ? (
            <div>
              <h1 className="sm:text-3xl text-4xl font-bold ">
                No tienes juegos
              </h1>
              <h2 className="sm:text-2xl text-3xl font-bold ">
                Compra tokens para obtener juegos
              </h2>
            </div>
          ) : (
            <>
                {games.map((game, index) => {
                  return (
                    <div
                      className="flex flex-col items-center justify-center align-middle text-xl py-8 gap-4 bg-twitch-purple-dark rounded-3xl"
                      key={index} >
                      <h2 className="py-4 font-bold text-2xl">{game.nombre}</h2>
                      <img className="w-3/4" src={game.img} alt={game.nombre} />
                      <div  className="py-4 flex items-center bg-gray-700 px-6 rounded-full justify-center">
                        <input
                          className=" bg-transparent border-0 w-fit pointer-events-none"
                          type={showPassword[index] ? "text" : "password"}
                          value={game.key}></input>
                        <a className={`px-2 ${showPassword[index] ? " opacity-100 " : " opacity-0"}`} onClick={() => handleCopy(game.key)}> {copied ?  <FaCopy /> : <FaRegCopy /> } </a>
                        <a onClick={() => handleTogglePassword(index)}>
                          {showPassword[index] ? (
                            <FaEye />
                          ) : (
                            <FaEyeSlash />
                          )}
                        </a>
                      </div>
                      <a href={`https://store.steampowered.com/account/registerkey?key=${game.key}`} target="_blank" rel="noreferrer" className="px-4 py-4 flex items-center justify-center mx-auto w-2/3 bg-gray-800 text-xl font-medium text-white rounded-full hover:bg-gray-700" > <FaSteam className="w-7" /> <p> Canjear en Steam </p> </a>
                    </div>
                  );
                })}
            </>
          )}
        </div>
      </section>
    </>
  );
}
