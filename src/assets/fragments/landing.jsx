
import Navigasi from "../components/nav";

function LandingPage() {
  return (
    <>
      
        <Navigasi />
        <div className="flex flex-col  justify-center items-center h-full md:pb-32 md:flex-row md:space-x-14 px-6 md:p-0 ">
          <div className="mb-8 md:mb-0 md:mr-4">
            <img width={320} className="rounded-full shadow-xl shadow-black" src="agil.jpeg" alt="Agil Zulfa" />
          </div>
          <div className="space-y-5 md:w-5/12 text-center md:text-left">
            <h2 className="text-xl opacity-50">Front-end Developer</h2>
            <h1 className="text-4xl font-extrabold">Agil Zulfa</h1>
            <p>
              Hello Everyone, My name is Agil Zulfa, and I am a passionate
              Front-end developer currently in my third year of studying
              Informatics/Computer Science at Siliwangi University. Feel free to
              explore my portfolio to see the diverse projects I've completed.
              If you're interested in my work and would like me to bring your
              project to life, don't hesitate to reach out to me!

             
              
            </p>
            
            <div className="flex flex-col w-ful md:justify-start md:flex-row">
              <button type="button" className="bg-[#333333] border-blue-900 border shadow-md shadow-blue-900 px-16 py-2 rounded-3xl md:mb-0 md:mr-4 hidden md:block ">Portfolio</button>
              <button type="button" className="bg-[#333333] border px-10 py-2  rounded-3xl">Contact</button>
            </div>
          </div>
        </div>
        
        
      
    </>
  );
}

export default LandingPage;
