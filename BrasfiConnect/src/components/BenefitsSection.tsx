import React, { useEffect, useRef, useState } from 'react';
import { FaUsers, FaGraduationCap, FaLeaf, FaLightbulb, FaChalkboardTeacher } from 'react-icons/fa';
import './BenefitsSection.css';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  number: number;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, number, description }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = number;
          const duration = 2000; // Duração da animação em milissegundos (2 segundos)
          const increment = end / (duration / 50); // Incremento por frame (50ms)

          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(counter);
            } else {
              setCount(Math.ceil(start));
            }
          }, 50);
        }
      },
      { threshold: 0.5 } // Dispara quando 50% do elemento está visível
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [number]);

  return (
    <div className="benefit-card" ref={cardRef}>
      <div className="benefit-icon">{icon}</div>
      <h3 className="benefit-title">{title}</h3>
      <p className="benefit-number">+{count}</p>
      <p className="benefit-description">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <FaUsers size={40} />,
      title: 'ALOCAÇÃO PROFISSIONAL',
      number: 20,
      description: 'Jovens profissionais alocados no mercado profissional',
    },
    {
      icon: <FaGraduationCap size={40} />,
      title: 'FORMAÇÃO DE PESSOAS',
      number: 20,
      description: 'Bolsas de estudo',
    },
    {
      icon: <FaLeaf size={40} />,
      title: 'EVENTOS DE IMPACTO',
      number: 40,
      description: 'ESG e temas sobre sustentabilidade',
    },
    {
      icon: <FaLightbulb size={40} />,
      title: 'PRODUÇÃO INTELECTUAL',
      number: 10,
      description: 'Pesquisas publicadas',
    },
    {
      icon: <FaChalkboardTeacher size={40} />,
      title: 'CURSOS E WORKSHOPS',
      number: 50,
      description: 'Treinamentos realizados',
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