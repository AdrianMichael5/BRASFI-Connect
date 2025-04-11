import { JSX } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h3 className={styles.sectionTitle}>BRASFI</h3>
            <p className={styles.sectionText}>Gerenciamento de redes sociais para todos.</p>
          </div>
          <div>
            <h3 className={styles.sectionTitle}>Produto</h3>
            <ul className={styles.list}>
              <li><a href="#" className={styles.link}>Funcionalidades</a></li>
              <li><a href="#" className={styles.link}>Integrações</a></li>
            </ul>
          </div>
          <div>
            <h3 className={styles.sectionTitle}>Recursos</h3>
            <ul className={styles.list}>
              <li><a href="#" className={styles.link}>Blog</a></li>
              <li><a href="#" className={styles.link}>Central de Ajuda</a></li>
              <li><a href="#" className={styles.link}>Status</a></li>
            </ul>
          </div>
          <div>
            <h3 className={styles.sectionTitle}>Siga-nos</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}><FaFacebook size={24} /></a>
              <a href="#" className={styles.socialLink}><FaInstagram size={24} /></a>
              <a href="#" className={styles.socialLink}><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© 2025 BRASFI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;