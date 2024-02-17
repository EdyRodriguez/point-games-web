

const Modal = ({ isOpen, onClose, gameName, gameImage, gameKey}) => {
    if(!isOpen) return null;

    return (
        <div className=" fixed z-10 inset-0 bg-gray-600 overflow-y-auto bg-opacity-50 h-full w-full" onClick={onClose}>
            <div className="relative top-20 mx-auto text-center p-5 w-1/2 shadow-lg rounded-lg bg-twitch-dark" onClick={e => e.stopPropagation()}>
                <h2 className="text-2xl text-white font-bold">{gameName}</h2>
                <img className="my-3 w-full py-8 h-auto rounded-md" src={gameImage} alt={gameName} />
                <p className="text-white text-xl font-medium">Este es tu key:  {gameKey}</p>
                <button className="mt-3 px-4 py-2  bg-twitch-purple-dark text-xl font-medium text-white rounded-full hover:bg-twitch-purple" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}

export default Modal;