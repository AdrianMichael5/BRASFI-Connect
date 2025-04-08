import React from "react";
import {
  FaUsers,
  FaGraduationCap,
  FaLeaf,
  FaLightbulb,
  FaChalkboardTeacher,
} from "react-icons/fa";
import "./BenefitsSection.css";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  number: number;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  number,
  description,
}) => {
  return (
    <div className="benefit-card">
      <div className="benefit-icon">{icon}</div>
      <h3 className="benefit-title">{title}</h3>
      <p className="benefit-number">+{number}</p>
      <p className="benefit-description">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <FaUsers size={40} />,
      title: "ALOCAÇÃO PROFISSIONAL",
      number: 20,
      description: "Jovens profissionais alocados no mercado profissional",
    },
    {
      icon: <FaGraduationCap size={40} />,
      title: "FORMAÇÃO",
      number: 20,
      description: "Bolsas de estudo",
    },
    {
      icon: <FaLeaf size={40} />,
      title: "EVENTOS DE IMPACTO",
      number: 40,
      description: "ESG e temas sobre sustentabilidade",
    },
    {
      icon: <FaLightbulb size={40} />,
      title: "PRODUÇÃO INTELECTUAL",
      number: 10,
      description: "Pesquisas publicadas",
    },
    {
      icon: <FaChalkboardTeacher size={40} />,
      title: "CURSOS E WORKSHOPS",
      number: 50,
      description: "Treinamentos realizados",
    },
  ];

  return (
    <section className="benefits-section">
      {benefits.map((benefit, index) => (
        <BenefitCard
          key={index}
          icon={benefit.icon}
          title={benefit.title}
          number={benefit.number}
          description={benefit.description}
        />
      ))}
    </section>
  );
};

export default BenefitsSection;
