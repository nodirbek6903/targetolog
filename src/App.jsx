import Main from "./components/Main/Main";
import About from "./components/About/About"
import Service from "./components/Service/Service";
import Tarif from "./components/Tarif/Tarif";
import HomeCard from "./components/HomeCard/HomeCard";
import Faq from "./components/Faq/Faq";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="container">
      <ToastContainer />
      <Main />
      <About />
      <Service />
      <Tarif />
      <HomeCard />
      <Faq />
    </div>
  );
}

export default App;
