import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, About, NotFound, CallOfDuty, GrandTheftAuto, RainbowSixSiege } from "./pages";

function App() {
  return (
    <>
      <Navbar color="light" light expand="md" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/call-of-duty-modern-warfare-2/" element={<CallOfDuty />} />
          <Route path="/grand-theft-auto-5/" element={<GrandTheftAuto />} />
          <Route path="/tom-clancys-rainbow-six-siege/" element={<RainbowSixSiege />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
