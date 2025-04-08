import { JSX } from "react";
import styles from './Features.module.css';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Publicar',
    description: 'Publique automaticamente seu conteúdo ou receba uma notificação quando for a hora de postar.',
  },
  {
    title: 'Engajar',
    description: 'Gerencie e responda a comentários a partir de um único painel simples.',
  },
  {
    title: 'Analisar',
    description: 'Veja os melhores horários, formatos e frequências para postar.',
  },
  {
    title: 'Criar',
    description: 'Importe conteúdo do Canva, Dropbox, Google e mais.',
  },
  {
    title: 'Colaborar',
    description: 'Convide colaboradores ilimitados e atribua funções.',
  },
];

function Features(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>Principais Funcionalidades</h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
              <a href="#" className={styles.cardLink}>Saiba Mais</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;