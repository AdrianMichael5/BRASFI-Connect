import { JSX } from "react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PartnersCarousel from "./components/PartnersCarousel";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import Transparency from "./components/Transparency";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
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
    { id: 1, name: "Microsoft", logo: "/logomicrosoft.png" },
    { id: 2, name: "NPGA", logo: "/NPGA-Apoiador1.png" },
    { id: 3, name: "Brasfi", logo: "/LogoBrasfi.jpg" },
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
        <UseCases />
        <Transparency />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;