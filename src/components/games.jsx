import getGames from "./getGames";
import { useState, useEffect } from "react";

function Games(){
    let [showGames, setShowGames] = useState(false);
    let [page, setPage] = useState(1);
    let [games, setGames] = useState([]);
    useEffect(() => {
        getGames().then((data) => {
            setGames(data);
            setShowGames(true);
        });
    }
    , []);
    return(
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Lista De Juegos</h1>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-center whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">Nombre</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Disponible</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tr rounded-br">Ganador</th>
          </tr>
        </thead>
        {showGames ? games.map((game) => (
          <tbody key={game}>
          <tr>
            <td className="border-t-2 border-gray-800 px-4 py-3">{game.nombre}</td>
            <td className="border-t-2 border-gray-800 px-4 py-3">{game.canjeado ? "❌" : "✅"}</td>
            <td className="border-t-2 border-gray-800 px-4 py-3">{game.usuario == "" ? "❔" : game.usuario}</td>
          </tr>
          </tbody>
        )) : <></>}
      </table>
    </div>
  </div>
</section>
</>
    )
}

export default Games;