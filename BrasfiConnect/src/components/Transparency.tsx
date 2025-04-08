import { JSX } from "react";
import styles from './Transparency.module.css';

function Transparency(): JSX.Element {
  return (
    <section className={styles.transparency}>
      <div className={styles.content}>
        <h2 className={styles.title}>Nossa cultura</h2>
        <p className={styles.description}>
        Como uma organização sem fins lucrativos, nossa cultura é fundamentada na criação
e fortalecimento de uma rede abrangente de profissionais e acadêmicos ligados às
áreas de finanças, investimentos sustentáveis e sustentabilidade corporativa.
        </p>
        <a href="#" className={styles.link}>Veja Nosso Painel Aberto</a>
      </div>
    </section>
  );
}

export default Transparency;