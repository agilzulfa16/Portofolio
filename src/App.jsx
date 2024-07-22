import LandingPage from "./assets/fragments/landing";
import Footer from "./assets/components/footer";
import "./index.css";

function App() {
  return (
    <>
    <div className="bg-[#222222] w-screen h-screen text-white overflow-auto">
    <LandingPage></LandingPage>

    <Footer />
    </div>
    </>
  );
}

export default App;
