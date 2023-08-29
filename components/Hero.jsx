export default function Hero() {
  return (
    <div className="w-screen ">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="h-screen rounded-lg  overflow-hidden">
          <p className="w-[121px] h-[102px] font-museo">
            <span className="text-pink text-[82px]">M</span>
            <span className="text-green text-[82px]">E</span>
          </p>
          <img className="mx-3 w-[664px] sm:ml-[40px] sm:h-[664px] " src="/images/portfoliocutout.png" />
          
        </div>
        <div className="h-screen rounded-lg  ">
          <div className="flex mr-6 space-x-7 font-mohave mt-10  justify-center">
            <div className="w-[139px] h-[78px] ml-2 bg-green rounded-tr-[50px] rounded-bl-[50px]">
              <a href="#About" className="hover:underline text-purple">
                <h1 className="text-3xl mx-10 mt-6 text-purple">About</h1>
              </a>
            </div>
            <div className="w-[139px] h-[78px] bg-pink rounded-[50px]">
              <a href="/projects" className="hover:underline text-purple">
                <h1 className="text-3xl mx-7 mt-6 text-purple">Projects</h1>
              </a>
            </div>
            <div className="w-[139px] h-[78px] bg-green rounded-tl-[50px] rounded-br-[50px]">
              <a href="/contact" className="hover:underline text-purple">
                <h1 className="text-3xl mx-7 mt-6 text-purple">Contact</h1>
              </a>
            </div>
          </div>
          <div className="w-[485px] h-[303px] mt-[12vh] mx-auto">
            <p className="text-white font-mohave text-[32px]">
              As a <span className="text-green">full</span>
              <span className="text-pink">-</span>
              <span className="text-green">stack</span> <span className="text-pink">software engineer</span> and formerly a culinary arts student, I've seamlessly blended my passion for <span className="text-pink">coding</span> with the art of crafting extraordinary creations from scratch.
            </p>
          </div>
       <div className="flex justify-center items-center mr-5 ">
          <div className="w-[395px] h-[134px] bg-gradient-to-b from-[#6C46D6] to-[#aa47cf] rounded-tr-[50px] rounded-bl-[50px]" > <h1 className="text-6xl font-mohave ml-10 mt-9 text-purple"> <span className="text-pink">Max</span> <span className="text-green">Espinosa</span> </h1></div>
        </div>

        </div>
      </div>
    </div>
  );
}
