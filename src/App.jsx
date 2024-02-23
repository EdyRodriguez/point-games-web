import Games from "./components/games";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Header from "./components/header";
import TokenValidation from "./components/tokenValidation";
import Transactions from "./components/transactions";
import Modal from "./utils/modal";
import Purchases from "./components/Purchases";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { UserProvider } from "./utils/userProvider";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("gameName") &&
      localStorage.getItem("gameImage") &&
      localStorage.getItem("gameKey")
    ) {
      setIsModalOpen(true);
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    localStorage.removeItem("gameName");
    localStorage.removeItem("gameImage");
    localStorage.removeItem("gameKey");
  };

  return (
    <UserProvider>
      <Router>
        <Header />
        <Toaster />
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          gameName={localStorage.getItem("gameName")}
          gameImage={localStorage.getItem("gameImage")}
          gameKey={localStorage.getItem("gameKey")}
        />
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/tokenValidation" element={<TokenValidation />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/purchases" element={<Purchases />} />
        </Routes>
        <Hero />
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
