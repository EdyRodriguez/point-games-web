export default function LogOutButton() {
  const handleOnLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    window.location.reload();
  };

  return (
    <a
      onClick={handleOnLogOut}
      className="flex md:w-1/3 gap-2 justify-center content-center group bg-gray-800 rounded px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-gray-600   md:mt-4 -md:mt-0 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-door-exit"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
        <path d="M13 12v.01" /> <path d="M3 21h18" />{" "}
        <path d="M5 21v-16a2 2 0 0 1 2 -2h7.5m2.5 10.5v7.5" />{" "}
        <path d="M14 7h7m-3 -3l3 3l-3 3" />{" "}
      </svg>
      Salir
    </a>
  );
}
