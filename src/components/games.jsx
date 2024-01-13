import getGames from "./getGames";
import { useState, useEffect } from "react";

function Games(){
    let [showGames, setShowGames] = useState(false);
    let [page, setPage] = useState(1);
    const gamesPerPage = 10;
    const lastIndex = page * gamesPerPage;
    const firstIndex = lastIndex - gamesPerPage;
    let [games, setGames] = useState([]);
    let [gamesToShow, setGamesToShow] = useState([]);
    let [numbers, setNumbers] = useState([]);
    useEffect(() => {
        getGames().then((data) => {
            setGames(data);
            setShowGames(true);
        });
    }
    , []);
    useEffect(() => {
        setGamesToShow(games.slice(firstIndex, lastIndex));
    }, [games, firstIndex, lastIndex]);
    useEffect(() => {
        let numbers = [];
        for(let i = 1; i <= Math.ceil(games.length / gamesPerPage); i++){
            numbers.push(i);
        }
        setNumbers(numbers);
    }, [games]);
    return(
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto sm: px-0">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Lista De Juegos</h1>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto sm:w-full ">
      <table className="table-auto w-full text-center whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">Numero</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Nombre</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Disponible</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tr rounded-br">Ganador</th>
          </tr>
        </thead>
        {showGames ? gamesToShow.map((game, index) => (
          <tbody key={index}>
          <tr>
            <td className="border-t-2 border-gray-800 px-4 py-3">{index+(page*10)-9}</td>
            <td className="border-t-2 border-gray-800 px-4 py-3">{game.nombre}</td>
            <td className="border-t-2 border-gray-800 px-4 py-3">{game.canjeado ? "❌" : "✅"}</td>
            <td className="border-t-2 border-gray-800 px-4 py-3">{game.usuario == "" ? "❔" : game.usuario}</td>
          </tr>
          </tbody>
        )) : <></>}
      </table>
      <nav className="flex flex-wrap items-center justify-center mx-auto py-8 xl:w-2/3 sm:w-full  ">
        <ul className="flex flex-wrap gap-2">
        <button onClick={() => setPage(page -1 < 1 ? page : page-1)} className="mx-1 px-3 py-2 bg-gray-800 text-white hover:bg-gray-600 rounded-md  max-sm:hidden">⏮️</button>

        {numbers.map((number) => (
          <button key={number} onClick={() => setPage(number)} className={`mx-1 px-4 py-2 bg-gray-800 text-white hover:bg-gray-600 rounded-md ${number === page ? 'active: bg-gray-700 underline ' : ''}`}>{number}</button>
        ))}
        <button onClick={() => setPage(page+1 > numbers.length ? page : page+1)} className="mx-1 px-3 py-2 bg-gray-800 text-white hover:bg-gray-600 rounded-md max-sm:hidden">⏭️</button>
          </ul>

      </nav>
    </div>
  </div>
</section>
</>
    )
}

export default Games;