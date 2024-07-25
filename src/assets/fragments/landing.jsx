import Navigasi from "../components/nav";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function LandingPage() {
  
    const handleClick = () => {
      const element = document.getElementById("portofolio");
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

  const imageVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Navigasi />
      <div className="flex flex-col justify-center items-center h-full md:pb-32 md:flex-row md:space-x-14 px-6 md:p-0">
        <motion.div
          
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 1 }}
          className="mb-8 md:mb-0 md:mr-4 "
        >
          <motion.img
          whileHover={{ scale: 1.3 }}
            width={320}
            className="rounded-full shadow-xl shadow-black"
            src="agil.jpeg"
            alt="Agil Zulfa"
          />
        
        </motion.div>
        <div className="space-y-5 md:w-5/12 text-center md:text-left">
          <h2 className="text-xl opacity-50">Front-end Developer</h2>
          <h1 className="text-3xl font-extrabold mb-10">
            <Typewriter
              words={["Hi Everyone!", "My Name is Agil Zulfa"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
            transition={{ duration: 1 }}
          >
            I am a passionate Front-end developer currently in my third year of
            studying Informatics/Computer Science at Siliwangi University. Feel
            free to explore my portfolio to see the diverse projects I've
            completed. If you're interested in my work and would like me to
            bring your project to life, don't hesitate to reach out to me!
          </motion.p>
          <motion.div className="flex flex-col w-full md:justify-start md:flex-row" initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 1 }}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              onClick={() => handleClick()}
              type="button"
              className="bg-[#333333] border-blue-900 border-2 px-16 py-2 rounded-3xl md:mb-0 md:mr-4 mb-2"
            >
              Portfolio
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              type="button"
              className="bg-[#333333] border px-10 py-2 rounded-3xl"
              onClick={() => window.location.href = 'https://wa.me/6289687405602'}
            >
              Contact
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
