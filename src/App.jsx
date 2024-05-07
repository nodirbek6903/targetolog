import Main from "./components/Main/Main";
import About from "./components/About/About"
import Service from "./components/Service/Service";
import Tarif from "./components/Tarif/Tarif";

function App() {
  return (
    <div className="container">
      <Main />
      <About />
      <Service />
      <Tarif />
    </div>
  );
}

export default App;
