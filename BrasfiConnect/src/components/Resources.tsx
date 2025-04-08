import { JSX } from "react";
import styles from './Resources.module.css';

interface Resource {
  title: string;
  description: string;
}

const resources: Resource[] = [
  {
    title: 'Ferramentas Gratuitas',
    description: 'Uma coleção de ferramentas gratuitas para facilitar seu marketing nas redes sociais.',
  },
  {
    title: 'Glossário',
    description: 'Um glossário de termos populares para ajudá-lo a entender o jargão das redes sociais.',
  },
  {
    title: 'Guias',
    description: 'Seu guia essencial para dominar os fundamentos das redes sociais e além.',
  },
  {
    title: 'Melhores Horários para Postar',
    description: 'Descubra os melhores horários para postar nas redes sociais e maximizar o engajamento.',
  },
];

function Resources(): JSX.Element {
  return (
    <section className={styles.resources}>
      <div className={styles.container}>
        <h2 className={styles.title}>Recursos</h2>
        <div className={styles.grid}>
          {resources.map((resource, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{resource.title}</h3>
              <p className={styles.cardDescription}>{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;