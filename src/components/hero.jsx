

function Hero() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font pb-8">
  <div className="container mx-auto flex px-5 pb-4 items-center justify-center flex-col">
  <div className="text-center lg:w-2/3 pt-4 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Visitame en tuish :3</h1>
    </div>
  <iframe src="https://player.twitch.tv/?channel=edycony&parent=point-games-web.vercel.app&muted=true" autoPlay={true} allowFullScreen={true} className=" max-md:w-[90%] w-3/4 aspect-video"   scrolling="no" ></iframe>

  </div>
</section>
  );
}

export default Hero;