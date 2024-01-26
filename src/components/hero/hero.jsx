import styles from "./hero.module.css";
import hero_img from "../../assets/img/Union.png";

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div className={styles.hero_wrapper}>
        <div className={styles.hero_imagem}>
        <img src={hero_img} alt="hero img"></img>
        </div>
        <div>
        <h1 className={styles.hero_title}>
          <span className={styles.hero_span}>UNO® minimalista,</span> <br />
          representa uma excelente <br />
          opção de presente para <br />
          colecionadores!
        </h1>

        <p className={styles.hero_p}>Esta edição especial do UNO®, o jogo de cartas <br />
        adorado por todos, tem um visual totalmente <br />
        exclusivo.</p>
        <div className={styles.hero_btn}>
        <a className={styles.hero_sm} href="#">Saiba mais</a>
        <a className={styles.hero_oc} href="#">Onde encontrar</a>
        </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
