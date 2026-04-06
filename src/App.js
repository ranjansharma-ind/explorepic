import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/UpdatedNavbar";
import Alternatives from "./components/Alternatives";
import InitialPopup from "./components/InitialPopup";
import TheCollection from "./components/TheCollection";
import Footer from "./components/footer";
import Testimonials from "./components/Testimonials";
import ExpeditionForm from "./components/ExpeditionForm";

function App() {
  return (
    <div className="App">
      <InitialPopup />
      <Navbar />
      <Hero />
      <TheCollection />
      <Alternatives />
      <Testimonials />
      <ExpeditionForm />
      <Footer />
    </div>
  );
}

export default App;
