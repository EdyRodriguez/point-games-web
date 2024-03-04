import { useState } from "react";
import Navbar from "./navbar";
import { useUserContext } from "./userContext";
import LogOutButton from "./logOutButton";
import LoginButton from "./loginButton";

export default function UserDropdown() {
  const { user } = useUserContext();
  document.addEventListener("mousedown", function (event) {
    if (
      !event.target.closest("#dropdown") &&
      !event.target.closest("#dropdownDefaultButton")
    ) {
      setIsDropDownOpen(false);
    }
  });

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-testid="dropdownButton"
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        className="flex items-center  focus:outline-none">
        <span className=" text-twitch-blue text-xl font-bold lg:hidden">
          {user.userName ? (<><img
            src="https://cdn.freelogovectors.net/wp-content/uploads/2023/05/phantom-logo-freelogovectors.net_.png"
            className="h-12 w-16 text-white rounded-full"
            alt={user.userName + " icon"}
          /></>) : (<><img
            src={user.image || `https://cdn.freelogovectors.net/wp-content/uploads/2023/05/phantom-logo-freelogovectors.net_.png`}
            className="h-12 w-16 text-white rounded-full"
            alt={"default icon"}
          /></>)}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 lg:-translate-x-4 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        className={`z-10 top-20 xl:top-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700  ${
          isDropDownOpen ? "absolute" : "hidden"
        }`}>
        {user.userName ? (
          <>
            <span className="text-center flex gap-2 px-2 pt-2 text-gray-300">
              Tienes:{" "}
              <p>
                {user.tokens} token{user.tokens > 1 ? "s" : ""}{" "}
              </p>
            </span>
          </>
        ) : (
          <div className=' w-3/4 mx-auto pb-2'>
            <LoginButton />
          </div>
        )}

        <nav
          className="flex flex-col gap-2 py-2 items-start border-none rounded-lg w-full px-2 lg:hidden"
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
          <Navbar />
        </nav>
        {user.userName ? (
          <div className=' w-full mx-auto border-none'>
            <LogOutButton />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
