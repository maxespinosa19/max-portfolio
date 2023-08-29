export default function Hero (){
  return (
    <div className=" w-screen bg-gradient-to-b from-[#280A50] to-[#56438e]  animate-gradient-y">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
  <div className="h-screen rounded-lg ">
  <p className=" w-[121px] h-[102px] font-museo "><span className="text-pink text-[82px]  ">M</span><span className="text-green text-[82px] ">E</span></p>

  <img className="mx-3 w-[574px]  h-[574px]" src="/images/portfoliocutout.png" />
  </div>
  <div className="h-screen rounded-lg border">
  <div className="flex space-x-10 font-mohave  
mt-10 ">
  <div className="w-[199px] h-[98px] ml-2 bg-green rounded-tr-[50px] rounded-bl-[50px]"> <h1 className="text-5xl mx-7 mt-6 text-purple">About</h1> </div>
  <div className="w-[199px] h-[98px] bg-pink rounded-[50px]  " > <h1 className="text-5xl mx-7 mt-6 text-purple">Projects</h1></div>
  <div className="w-[199px] h-[98px] bg-green rounded-tl-[50px] rounded-br-[50px] " />
</div>

  
  <div className="w-[485px] h-[303px] mt-[12vh] mx-auto "><p className="text-white font-mohave text-[32px]">As a <span className="text-green">full</span><span className="text-pink">-</span><span className="text-green">stack</span> <span className="text-pink">software engineer</span> and formerly a culinary arts student, I've seamlessly blended my passion for <span className="text-pink">coding</span> with the art of crafting extraordinary creations from scratch.</p></div>
  </div>
</div>
</div>
  )
}


// span className="text-white text-[37px] font-normal">As a </span><span className="text-green-300 text-[37px] font-normal">full</span><span className="text-fuchsia-400 text-[37px] font-normal">-</span><span className="text-green-300 text-[37px] font-normal">stack</span><span className="text-white text-[37px] font-normal"> </span><span className="text-fuchsia-400 text-[37px] font-normal">software engineer</span><span className="text-white text-[37px] font-normal"> and formerly a culinary arts student, I've seamlessly blended my passion for </span><span className="text-green-300 text-[37px] font-normal">coding</span><span className="text-white text-[37px] font-normal"> with the art of crafting extraordinary creations from scratch</span><span className="text-fuchsia-400 text-[37px] font-normal">.</span>