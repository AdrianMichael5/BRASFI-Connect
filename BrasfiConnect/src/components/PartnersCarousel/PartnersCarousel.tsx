// PartnersCarousel.tsx
import './PartnersCarousel.css';

interface Partner {
  id: number;
  name: string;
  logo: string;
}

interface PartnersCarouselProps {
  speed?: number;
  partners: Partner[];
}

const PartnersCarousel: React.FC<PartnersCarouselProps> = ({ 
  speed = 1,
  partners 
}) => {
  const repeatedPartners = Array(5).fill(partners).flat(); // Repete 5 vezes (15 itens)

  return (
    <div className="partners-container">
      <div className="partners-carousel" style={{ animationDuration: `${30 / speed}s` }}>
        {repeatedPartners.map((partner, index) => (
          <div key={`${partner.id}-${index}`} className="partner-item">
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;