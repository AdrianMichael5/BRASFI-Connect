import { JSX } from "react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PartnersCarousel from "./components/PartnersCarousel";
import Features from "./components/Features";
import BenefitsSection from "./components/BenefitsSection"; // Importe o novo componente
import Transparency from "./components/Transparency";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import page from "./app/page"
import "./App.css";

interface ApiResponse {
  message: string;
}

interface Partner {
  id: number;
  name: string;
  logo: string;
}

function App(): JSX.Element {
  const [dados, setDados] = useState<ApiResponse | null>(null);

  const partners: Partner[] = [
    { id: 1, name: "Climate Company", logo: "/climatecompanylogo.svg" },
    { id: 2, name: "lab", logo: "/lablogo.jpg" },
    { id: 3, name: "unifor", logo: "/uniforlogo2.png" },
    { id: 4, name: "weesg", logo: "/weesglogo.svg" },
  ];

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((response) => response.json())
      .then((data: ApiResponse) => setDados(data))
      .catch((error) => console.error("Erro:", error));
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Hero dados={dados} />
        <PartnersCarousel speed={2} partners={partners} />
        <Features />
        <BenefitsSection /> {/* Adicionei aqui */}
        <Transparency />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;
