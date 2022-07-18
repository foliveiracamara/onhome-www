import Header from '../Header';

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from './style.module.scss';

const Banner = () => {
  return (
    <section className={styles.gradient}>
      <Header />
      <div className={styles.content}>
        <div className={styles.text}>
          <span className={styles.subtitle}>Potencializando o seu tempo</span>
          <span className={styles.title}>Locação de máquinas</span>
          <span className={styles.description}>
            Utilize de equipamentos da mais alta qualidade, com preços justos e
            serviços de suporte 24/7 a sua disposição!
          </span>
        </div>
        <div className={styles.arrow}>
            <ExpandMoreIcon
              style={{ color: 'white', fontSize: 100, cursor: 'pointer' }}
            />
        </div>
      </div>
    </section>
  );
};
export default Banner;
