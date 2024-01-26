import styles from "./section.module.css";
import flecha from "../../assets/img/flecha.svg"
import uno_min from "../../assets/img/uno_hero.png";
import uno_flip from "../../assets/img/uno_flip.png"
import uno_ori from "../../assets/img/uno_original.png"
import dos from "../../assets/img/dos.png"

const Section = () => { 
  return (
    <section className={styles.Section}>
      <div className={styles.section_wrapper}>
        <div className={styles.section_new}>
          <h2 className={styles.section_title}>Nossos novos modelos</h2>
          <div className={styles.section_vertodos}>
          <a className={styles.section_newp} href="#">Ver todos</a>
          <img src={flecha} alt="flecha" />
          </div>
        </div>
        <div className={styles.section_container}>
          <div className={styles.section_div}>
            <img src={uno_min} alt="uno minimalista"></img>
            <div className={styles.section_anuncio}>
              <p className={styles.section_p}>UNO® minimalista</p>
              <p className={styles.section_pri}>R$ 80</p>
            </div>
            <div className={styles.section_preco}>
              <p className={styles.section_acaba}>
                Acaba em<span className={styles.section_span}> 01.34.45</span>
              </p>
              <a className={styles.section_btn} href="/Produtos">Comprar</a>
            </div>
          </div>

          <div className={styles.section_div}>
            <img src={uno_flip} alt="uno flip"></img>
            <div className={styles.section_anuncio}>
              <p className={styles.section_p}>UNO® Flip SIOC</p>
              <p className={styles.section_pri}>R$104,99</p>
            </div>
            <div className={styles.section_preco}>
              <p className={styles.section_acaba}>
                Acaba em<span className={styles.section_span}> 01.34.45</span>
              </p>
              <a className={styles.section_btn} href="/Produtos">Comprar</a>
            </div>
          </div>

          <div className={styles.section_div}>
            <img src={uno_ori} alt="uno original"></img>
            <div className={styles.section_anuncio}>
              <p className={styles.section_p}>UNO® Original</p>
              <p className={styles.section_pri}>R$29,90</p>
            </div>
            <div className={styles.section_preco}>
              <p className={styles.section_acaba}>
                Acaba em<span className={styles.section_span}> 30.34.45</span>
              </p>
              <a className={styles.section_btn} href="/Produtos">Comprar</a>
            </div>
          </div>

          <div className={styles.section_div}>
            <img src={dos} alt="uno dos"></img>
            <div className={styles.section_anuncio}>
              <p className={styles.section_p}>Amet pellentesq..</p>
              <p className={styles.section_pri}>R$50,00</p>
            </div>
            <div className={styles.section_preco}>
              <p className={styles.section_acaba}>
                Acaba em<span className={styles.section_span}> 20.23.25</span>
              </p>
              <a className={styles.section_btn} href="/Produtos">Comprar</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
