import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>Copyright {new Date().getFullYear()} by WorldWise.inc</p>
    </footer>
  );
}

export default Footer;
