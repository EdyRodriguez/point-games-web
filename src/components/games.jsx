import apiCalls from "../utils/apiCalls";
import { useState, useEffect } from "react";
import { FaSteam } from "react-icons/fa";
import canjeado from "../assets/canjeado.png";
import TokenChange from "./tokenChange";
function Games() {
  let [showGames, setShowGames] = useState(false);
  let [page, setPage] = useState(1);
  const gamesPerPage = 9;
  const lastIndex = page * gamesPerPage;
  const firstIndex = lastIndex - gamesPerPage;
  let [games, setGames] = useState([]);
  let [gamesToShow, setGamesToShow] = useState([]);
  let [numbers, setNumbers] = useState([]);
  useEffect(() => {
    apiCalls.getGames().then((data) => {
      setGames(data);
      setShowGames(true);
    });
  }, []);
  useEffect(() => {
    setGamesToShow(games.slice(firstIndex, lastIndex));
  }, [games, firstIndex, lastIndex]);
  useEffect(() => {
    let numbers = [];
    for (let i = 1; i <= Math.ceil(games.length / gamesPerPage); i++) {
      numbers.push(i);
    }
    setNumbers(numbers);
  }, [games]);

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font pb-8">
        <div className="container flex flex-col justify-center px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              Lista De Juegos
            </h1>
          </div>
          <div className="w-full mx-auto overflow-auto pb-8 sm:w-full ">
            <div className="flex flex-wrap justify-center gap-4 ">
              {showGames ? (
                gamesToShow.map((game, index) => (
                  <div
                    className={`max-w-sm rounded text-center  ${
                      game.canjeado
                        ? " bg-twitch-pink"
                        : "bg-twitch-purple-dark"
                    }`}
                    key={index}>
                    <img
                      className={` inline w-full ${
                        game.canjeado
                          ? " bg-white max-h-[180px] min-w-[384px]"
                          : ""
                      }`}
                      href={game.link}
                      alt={game.nombre}
                      title={game.name}
                      src={game.canjeado ? canjeado : game.img}
                    />
                    <p
                      className={` px-4 py-2 font-bold -translate-y-44 text-white rounded-full absolute translate-x-2 w-fit ${
                        game.canjeado
                          ? "bg-twitch-pink"
                          : "bg-twitch-purple-dark"
                      }   text-xl`}>
                      {index + page * gamesPerPage - (gamesPerPage - 1)}
                    </p>
                    <div className="text-center pb-8">
                      <h3 className="text-white flex justify-center items-center content-center text-xl font-bold py-4">
                        {" "}
                        🎮 {game.nombre}
                      </h3>
                      {game.canjeado ? (
                        <p className="text-white text-xl font-bold py-4">
                          Canjeado por: {game.usuario}
                        </p>
                      ) : (
                        <></>
                      )}

                      <a
                        target="_blank"
                        href={game.link}
                        title={game.nombre}
                        rel="noreferrer"
                        className={`flex justify-center mx-auto items-center rounded-full bg-gray-800 w-fit px-4 py-2 text-white ${
                          game.canjeado
                            ? "hover:bg-twitch-purple-dark"
                            : "hover:bg-gray-600"
                        }  `}>
                        <FaSteam className="w-6 h-6" />
                        <p className="text-xl px-2 font-semibold">Steam</p>
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
            <nav className="flex flex-wrap items-center justify-center mx-auto py-8 xl:w-2/3 sm:w-full  ">
              <ul className="flex flex-wrap gap-2">
                <button
                  onClick={() => setPage(page - 1 < 1 ? page : page - 1)}
                  className="mx-1 px-3 py-2 bg-gray-800 text-white hover:bg-gray-600 rounded-md  max-sm:hidden">
                  ⏮️
                </button>
                {numbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => setPage(number)}
                    className={`mx-1 px-4 py-2 bg-gray-800 text-white text-xl  hover:bg-gray-600 rounded-md ${
                      number === page
                        ? "active: bg-gray-700 underline underline-offset-4 font-bold "
                        : ""
                    }`}>
                    {number}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setPage(page + 1 > numbers.length ? page : page + 1)
                  }
                  className="mx-1 px-3 py-2 bg-gray-800 text-white hover:bg-gray-600 rounded-md max-sm:hidden">
                  ⏭️
                </button>
              </ul>
            </nav>
          </div>
          <div
            className={`w-1/2 justify-center mx-auto p-8 bg-twitch-pink shadow-lg rounded-full pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5`}>
            <TokenChange />
          </div>
        </div>
      </section>
    </>
  );
}

export default Games;
