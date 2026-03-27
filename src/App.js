import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Heritage from "./components/Heritage";
import Alternatives from "./components/Alternatives";
import InitialPopup from "./components/InitialPopup";
import Moments from "./components/Moments";
import TheCollection from "./components/TheCollection";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <InitialPopup />
      <Navbar />
      <Hero />
      <TheCollection />
      <Heritage />
      <Alternatives />
      <Moments />
      <Footer />
    </div>
  );
}

export default App;
