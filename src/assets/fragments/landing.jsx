import Footer from "../components/footer";
import Navigasi from "../components/nav";


function LandingPage() {
  return (
    <>
      <div className="bg-[#222222] w-screen h-screen text-white overflow-hidden">
        <Navigasi />
        <div className="flex justify-center items-center h-full pb-32 space-x-14">
          <div className="mr-4">
            <img width={350} className="rounded-full" src="agil.jpeg" alt="Agil Zulfa" />
          </div>
          <div className="space-y-5 w-5/12">
            <h2 className="text-xl opacity-50">Front-end Developer</h2>
            <h1 className="tex text-4xl font-extrabold">Agil Zulfa</h1>
            <p>
              Hello Everyone, My name is Agil Zulfa, and I am a passionate
              Front-end developer currently in my third year of studying
              Informatics/Computer Science at Siliwangi University. Feel free to
              explore my portfolio to see the diverse projects I've completed.
              If you're interested in my work and would like me to bring your
              project to life, don't hesitate to reach out to me!
            </p>
            
            <button type="button" className="border border-blue-900 border-2 px-7 py-2 rounded-3xl mr-4"> Portofolio </button>
            <button type="button" className="border border-2 px-6 py-2 rounded-3xl"> Contact </button>
          </div>
        </div>


        
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
