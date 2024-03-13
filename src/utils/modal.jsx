const Modal = ({ isOpen, onClose, gameName, gameImage, gameKey }) => {
  if (!isOpen) return null;

  return (
    <div
      className=" fixed z-10 inset-0 bg-gray-600 overflow-y-auto  bg-opacity-70 h-full w-full"
      onClick={onClose}>
      <div className="relative top-20 mx-auto text-center justify-center items-center w-1/4 max-md:w-[80%] rounded-lg">
        <div className="absolute -inset-1 bg-gradient-to-r from-twitch-pink to-twitch-blue animate-shadow-spin  rounded-lg"></div>
        <div
          className="relative flex flex-col bg-twitch-dark rounded-lg py-4 "
          onClick={(e) => e.stopPropagation()}>
          <h2 className="max-md:text-2xl text-4xl text-white font-bold">
            {gameName}
          </h2>
          <img
            className="my-3 rounded-2xl "
            src={gameImage}
            alt={gameName}
          />
          <p className="text-white max-md:text-lg text-2xl max-md:p-0 p-4 font-medium">
            Este es tu key: {gameKey}
          </p>
          <div className="flex justify-around gap-8 max-md:py-2 py-4 items-center">
            <a
              href={`https://store.steampowered.com/account/registerkey?key=${gameKey}`}
              target="_blank"
              rel="noreferrer"
              className="max-md:px-3 px-4 max-md:py-1 py-2 mx-auto w-fit bg-twitch-pink max-md:text-base text-xl font-medium text-white rounded-full hover:bg-twitch-purple"
              onClick={onClose}>
              Canjear en Steam
            </a>
            <button
              className="max-md:px-3 px-4 max-md:py-1 py-2 mx-auto w-fit bg-twitch-purple-dark max-md:text-base text-xl font-medium text-white rounded-full hover:bg-twitch-purple"
              onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
