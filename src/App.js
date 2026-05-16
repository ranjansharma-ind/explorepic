import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Alternatives from "./components/Alternatives";
import InitialPopup from "./components/InitialPopup";
import TheCollection from "./components/TheCollection";
import Footer from "./components/footer";
import Testimonials from "./components/Testimonials";
import ExpeditionForm from "./components/ExpeditionForm";
// import Tested from "./components/Tested"
import FeaturedCarousal from "./components/FeaturedCarousal"
import TermsConditions from "./components/TermsConditions"

function App() {
  return (
    <div className="App">
      <InitialPopup />
      <Navbar />
      <Hero />
      {/* <Tested/> */}
      <TheCollection />
      <Alternatives />
      <Testimonials />
      <FeaturedCarousal/>
      <TermsConditions/>
      <ExpeditionForm />
      <Footer />
    </div>
  );
}

export default App;
