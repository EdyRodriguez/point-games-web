import { useEffect, useState } from "react";

export default function LoginButton() {

    const [redirect_uri, setRedirect_uri] = useState("");
    useEffect(() => {
        const url = window.location.href;
        if (url.includes("localhost") || url.includes("192.168")) {
          setRedirect_uri("http://localhost:5173");
        } else {
          setRedirect_uri("https://point-games-web.vercel.app/");
        }
      }, []);

      const client_id = import.meta.env.VITE_WEB_CLIENT_ID;
  return (
    <a
      className="flex md:w-1/3 gap-2 justify-center content-center group bg-twitch-purple rounded px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-twitch-purple-dark mt-4 md:mt-0 sm:mt-0"
      href={`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=user%3Aread%3Abroadcast`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 translate-y-1"
        fill="currentColor"
        viewBox="0 0 24 24">
        <path
          d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
      Login
    </a>
  );
}
