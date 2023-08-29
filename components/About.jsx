export default function About() {
  return (
    <div className="relative w-screen h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url('/images/backgrounddesigns.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
      <div className="">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 h-full">
          <div className="h-screen rounded-lg border">
            <div className="flex items-center justify-center mt-8 ml-6 w-[210px] h-[77px] bg-green rounded-tr-[50px] rounded-bl-[50px]">
              <h1 id="About" className="text-5xl font-mohave text-purple">
                About
              </h1>
            </div>
            <div className="mt-12 ml-[130px] sm:w-[466px] h-[125px] ">
              <h1 className="text-light-pink font-mohave  text-2xl">
                Prior to my career as a Software Engineer, I spent 2 years immersed
                in Culinary Arts. This journey fueled my passion for diverse
                flavors and the thrill of exploration.
              </h1>
            </div>


           
              <img className="w-[245px] h-[314px] border absolute ml-[160px] transform -translate-x-1/2 mt-8" src="/images/pina.png" /> {/* Image */}
              <div className="w-[245px] h-[314px] border bg-green mt-4  ml-[70px]"/> {/* Green container */}
             
          
          </div>
          <div className="h-screen rounded-lg border"></div>
        </div>
      </div>
    </div>
  );
}
