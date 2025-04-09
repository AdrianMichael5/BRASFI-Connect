import { JSX } from "react";
import styles from "./Hero.module.css";

interface HeroProps {
  dados: { message: string } | null;
}

function Hero({ dados }: HeroProps): JSX.Element {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          A BRASFI tem como propósito promover a transformação sustentável no Brasil,
          atuando como catalisadora no desenvolvimento de lideranças e soluções
          em finanças e investimentos sustentáveis.
        </h1>
        {dados ? (
          <p className={styles.backendMessage}>
            Mensagem do backend: {dados.message}
          </p>
        ) : (
          <p className={styles.backendMessage}>

          </p>
        )}
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Comece Grátis</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
