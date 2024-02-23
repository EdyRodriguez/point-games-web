import { useEffect, useState } from "react";
import apiCalls from "../utils/apiCalls";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    apiCalls.getTransactions().then((data) => {
      setTransactions(data);
    });
  }, []);

  return (
    <section className="mx-auto flex flex-col gap-6 justify-center items-center min-h-[80vh]  text-center text-white py-12 bg-gray-900 ">
      <div className="w-full flex flex-col justify-center align-center gap-8">
        <h1 className="sm:text-3xl text-4xl font-bold ">Transactions</h1>
        <table className="w-2/3 mx-auto bg-gray-700 ">
          <thead className=" border-y-2">
            <tr className=" border-y-2 text-xl border-white rounded-full">
              <th>Usuario</th>
              <th>Tokens</th>
              <th>Descripcion</th>
              <th>Balance</th>
              <th>Fecha</th>
            </tr>
          </thead>
          {transactions.map((transaction, index) => {
            return (
              <tr className=" border-y-2 border-white text-xl" key={index}>
                <td className="py-4">{transaction.usuario}</td>
                <td className="py-4">{transaction.tokens_restantes}</td>
                <td className="py-4">{transaction.descripcion}</td>
                <td className={`py-4 ${transaction.obtencion ? " text-green-500" : " text-red-500"}`}>{transaction.obtencion ? "+1 Token" : "-1 Token"}</td>
                <td className="py-4">{new Date(transaction.fecha).toLocaleString()}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </section>
  );
}

export default Transactions;
