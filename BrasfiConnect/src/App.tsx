import { JSX } from "react";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PartnersCarousel from "./components/PartnersCarousel/PartnersCarousel";
import Features from "./components/Features/Features";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection"; // Importe o novo componente
import Transparency from "./components/Transparency/Transparency";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
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
        <BenefitsSection />
        <Testimonial />
        <Transparency />
      </main>
      <Footer />
    </div>
  );
}

export default App;
