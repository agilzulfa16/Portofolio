import CardCertificate from "../components/card";

const Certification = () => {
    
    return  (
        <>
        <div className="min-w-screen min-h-screen" id="portofolio">
        <div className=" bg-[#252525] py-12 border-y-2  border-[#333333] mb-10">
          <h1 className="text-4xl px-8 font-sans font-extrabold text-center md:text-start">
            {" "}
            CERTIFICATION
          </h1>
        </div>

        <div className="flex  items-center justify-center gap-x-8 gap-y-8 flex-wrap">
        <CardCertificate judul="MTCNA" by="Mikrotik" foto="mtcna.png" link="https://mikrotik.com/training/certificates/c311085c77a0f863dc8e"/>
        
        <CardCertificate judul="Front-end Development" by="MySkill" foto="myskill.png" link="https://drive.google.com/file/d/13FcqQ4GlAEAGfgev6RBTTpMkHJlxeTeo/view"/>
        <CardCertificate judul= "Dasar Pemrograman Web" by="Dicoding" foto="dicoding.png" link="https://www.dicoding.com/certificates/JLX1WY6W5P72"/>
        <CardCertificate judul="Pemrograman Web" by="HMIF" foto="hmif.png"/>
        
        </div>
        </div> </>
    )
}

export default Certification;