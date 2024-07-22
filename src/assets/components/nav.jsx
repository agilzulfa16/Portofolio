import React from "react";
import { motion } from "framer-motion";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
function Navigasi() {
  const [openNav, setOpenNav] = React.useState(false);
  const fadeNav = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
 
 
  return (
    <>
    <motion.div  initial="hidden"
    animate="visible"
    variants={fadeNav}
    transition={{ duration: 1 }}>
    <Navbar className="mx-auto w-full px-4 py-2 lg:px-8 lg:py-4 border-none">
      <div className="container mx-auto px-8 md:px-20 flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Agil Zulfa
        </Typography>
       
        <div className="flex items-center gap-x-16">
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Projects</span>
          </Button>
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Skill</span>
          </Button>
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>About</span>
          </Button>
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Contact</span>
          </Button>
          
        </div>
        
        <Button
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </Button>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Projects</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Skill</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>About</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Contact</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar></motion.div></>
  );
}

export default Navigasi;