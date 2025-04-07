import CardCertificate from "../components/card";

const Projects = () => {
    
    return  (
        <>
        <div className="min-w-screen min-h-screen" id="portofolio">
        <div className=" bg-[#252525] py-12 border-y-2  border-[#333333] mb-10">
          <h1 className="text-4xl px-8 font-sans font-extrabold text-center md:text-start">
            {" "}
            My Projects
          </h1>
        </div>

        <div className="flex  items-center justify-center gap-x-8 gap-y-8 flex-wrap">
        <CardCertificate judul="Website Pengelolaan Data Peternakan" by="Html, PHP, MySql" foto="poultry.png"/>
        
        <CardCertificate judul="Apotek" by="Html, PHP, MySql" foto="apotek.png" />
        <CardCertificate judul= "Portofolio" by="React.JS" foto="porto.png" />
        
        
        </div>
        </div> </>
    )
}

export default Projects;