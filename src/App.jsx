import LandingPage from "./assets/fragments/landing";
import Footer from "./assets/components/footer";
import "./index.css";
import { useEffect } from "react";
import PageSkill from "./assets/fragments/page2";
import OnDev from "./assets/fragments/ondev";
import Certification from "./assets/fragments/page3";
import Projects from "./assets/fragments/page4";


function App() {
  useEffect(() => {
    
    
    alert("80% Zoom Ratio is Recommended");
    
  }, [])
  
  return (
    
    <>
    
    
    <div className="bg-[#222222] w-screen h-screen text-white overflow-auto space-y-8 overflow-x-hidden">
    <LandingPage></LandingPage>
    <PageSkill/>
    <Certification/>
    <Projects/>
    <OnDev/>
    <Footer />
    </div>
    </>
  );
}

export default App;
