import LandingPage from "./assets/fragments/landing";
import Footer from "./assets/components/footer";
import "./index.css";
import { useEffect } from "react";
import PageSkill from "./assets/fragments/page2";


function App() {
  useEffect(() => {
    document.title = "My Portofolio";
  }, [])
  return (
    <>
    
    
    <div className="bg-[#222222] w-screen h-screen text-white overflow-auto">
    <LandingPage></LandingPage>
    <PageSkill/>
    
    <Footer />
    </div>
    </>
  );
}

export default App;
