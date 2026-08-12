import About from "./components/About";
import Agendamento from "./components/Agendamento";
import Depoimentos from "./components/Depoimentos";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Imoveis from "./components/Imoveis";
import Localizacao from "./components/Localizacao";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Imoveis />
      <Depoimentos />
      <Agendamento />
      <Localizacao />
      <Footer />
    </div>
  );
}

export default App;
