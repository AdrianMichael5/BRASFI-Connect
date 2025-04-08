import { JSX } from "react";
import styles from "./Header.module.css";

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>BRASFI Connect</div>
        <div className={styles.navLinks}>
          <a href="#" className={styles.link}>
            A BRASFI
          </a>
          <a href="#" className={styles.link}>
            NOSSO IMPACTO
          </a>
          <a href="#" className={styles.link}>
            COMO ATUAMOS
          </a>
          <a href="#" className={styles.link}>
            FAÇA PARTE
          </a>
          <a href="#" className={styles.link}>
            CONTATO
          </a>
        </div>
        <div className={styles.actions}>
          <a href="#" className={styles.link}>
            Entrar
          </a>
          <button className={styles.button}>Comece Grátis</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
