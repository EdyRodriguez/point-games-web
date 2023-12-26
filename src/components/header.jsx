import wolfito from '../assets/wolfito-removebg-preview.png'

function Header(){
    return(
        <header className="text-gray-400 bg-twitch-dark body-font">
  <div className="container mx-auto flex justify-between p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img src={wolfito}  className="w-14 h-14 text-white p-2 bg-indigo-500 rounded-full" alt="Edy icon" />
      <span className="ml-3 text-xl">EdyConY</span>
    </a>

    <button className="mb-2 inline-block group bg-twitch-purple rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-twitch-purple-dark  rounded text-base mt-4 md:mt-0">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 "
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
      fillRule="evenodd"
      clipRule="evenodd" />
  </svg>
    </button>

  </div>
</header>
    )
}

export default Header;