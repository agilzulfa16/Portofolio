import SkillBar from "../components/skillbar";

const PageSkill = () => {
  return (
    <>
      <div className="bg-[#222222] w-screen min-h-screen text-white">
        <div className=" bg-[#252525] py-12 border-y-2  border-[#333333] mb-2">
          <h1 className="text-4xl px-8 font-sans font-extrabold text-center md:text-start">
            {" "}
            Front-End Skill
          </h1>
        </div>

        <div>
          <div className="min-h-screen bg-customBackground text-white md:p-8 p-2">
            <div className="w-screen-lg px-8">
              <div className="flex md:space-x-20 space-x-0 md:flex-row flex-col md:text-start">
                <div className="space-y-8 md:w-6/12 w-full leading-8">
                  <div className="text-2xl m-0 md:mr-9 mb-12 font-bold text-center md:text-start justify-center flex-col flex">
                    <h2>What I'm doing</h2>
                    <div className="w-20 h-0 border-b-2 border-[#353535] md:block hidden"></div>
                  </div>
                  <div className="flex md:space-x-8 md:flex-row flex-col items-center">
                    <img className="w-[62px] h-[59px]" src="icon.svg" />

                    <div>
                      <h3 className="text-lg font-semibold text-center md:text-start">
                        UI / UX Design
                      </h3>
                      <p className="opacity-70 text-base text-justify md:text-start">
                        Mempelajari bidang Web dan Application Design setahun
                        terakhir dengan tool utama figma. Berpengalaman Membuat
                        Web design untuk beberapa projek akhir mata kuliah.
                      </p>
                    </div>
                  </div>
                  <div className="flex md:space-x-8 md:flex-row flex-col items-center">
                    <img className="w-[62px] h-[59px]" src="pensil.svg" />

                    <div>
                      <h3 className="text-lg font-semibold text-center md:text-start">
                        HTML, CSS, JavaScript
                      </h3>
                      <p className="opacity-70 text-base text-justify md:text-start">
                        Menguasai elemen dan tag html dengan baik, Menguasai
                        Selector dan elemen CSS dan cukup menguasai Frameworknya
                        seperti TailwindCSS dan Bootstrap. Serta menguasai Dasar
                        dasar Javascript untuk pemrograman Web Seperti DOM
                        (Document Object Model) Manipulation.
                      </p>
                    </div>
                  </div>
                  <div className="flex md:space-x-8 md:flex-row flex-col items-center">
                    <img className="w-[62px] h-[59px] animate-spin-slow" src="react.svg" />
                    <div>
                      <h3 className="text-lg font-semibold text-center md:text-start">
                        REACT JS
                      </h3>
                      <p className="opacity-70 text-base text-justify md:text-start">
                        Mempelajari React selama 2 bulan terakhir, cukup
                        menguasai dasar dasar hook React seperti useState,
                        useEffect, useRef, dan lain lain. menguasai syntax
                        syntax JSX (JavaScript XML)
                      </p>
                    </div>
                  </div>
                  <div>
                
                  </div>
                </div>

                

                <div className="md:w-6/12 w-full">
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold  md:mt-0 mt-8 md:text-start text-center ">
                      Coding Skills
                    </h2>

                    <div className="w-20 h-0 border-2 border-[#353535] hidden md:block"></div>
                  </div>
                  <div className="mt-4 space-y-6">
                    <SkillBar skill="HTML" level={85} />
                    <SkillBar skill="CSS" level={80} />
                    <SkillBar skill="JavaScript" level={80} />
                    <SkillBar skill="PHP, MySql" level={70} />
                    <SkillBar skill="React" level={45} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageSkill;
