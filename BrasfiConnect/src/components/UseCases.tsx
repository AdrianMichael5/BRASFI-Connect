import { JSX } from "react";
import styles from './UseCases.module.css';

interface UseCase {
  title: string;
  description: string;
}

const useCases: UseCase[] = [
  {
    title: 'Pequenas Empresas',
    description: 'Cada minuto e cada dólar contam. O Buffer mantém sua presença online prosperando com o mínimo de esforço.',
  },
  {
    title: 'Criadores',
    description: 'Seja você um iniciante ou esteja expandindo sua audiência, o Buffer coloca seu conteúdo na frente de mais pessoas.',
  },
  {
    title: 'Freelancers e Agências',
    description: 'O Buffer tem ajudado freelancers e agências a crescerem suas contas de clientes por mais de uma década.',
  },
];

function UseCases(): JSX.Element {
  return (
    <section className={styles.useCases}>
      <div className={styles.container}>
        <h2 className={styles.title}>Quem Ajudamos</h2>
        <div className={styles.grid}>
          {useCases.map((useCase, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{useCase.title}</h3>
              <p className={styles.cardDescription}>{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;