import { JSX } from "react";
import styles from './Features.module.css';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Participar de Comunidades',
    description: 'Crie ou junte-se a comunidades sobre temas que você ama, como "Economia Sustentável ". Escolha entre comunidades públicas ou privadas e conecte-se com pessoas que compartilham seus interesses.',
  },
  {
    title: 'Canais de Texto',
    description: 'Participe de canais organizados, como "Dicas de Sustentabilidade", para trocar ideias com outros membros. Administradores podem criar canais com permissões específicas, garantindo uma comunicação clara e focada.',
  },
  {
    title: 'Interagir no Feed',
    description: 'Veja postagens de administradores e moderadores no feed, como avisos ou imagens educativas sobre sustentabilidade. Interaja com o conteúdo e fique por dentro das novidades da comunidade.',
  },
  {
    title: 'Mensagens Privadas',
    description: 'Converse diretamente com outros membros por mensagens privadas. Receba notificações de novas mensagens e mantenha a comunicação fluida e segura.',
  },
  {
    title: 'Apoie ideias',
    description: 'Você pode apoiar comunidades que se indentificar.',
  },
  {
    title: 'Gerenciar Perfil',
    description: 'Personalize seu perfil com foto, biografia e configurações de privacidade. Escolha quem pode ver suas postagens e mantenha o controle da sua experiência na plataforma.',
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;