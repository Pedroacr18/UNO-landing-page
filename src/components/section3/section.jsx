import styles from "./section.module.css";
import uno_min from "../../assets/img/uno_hero.png";
import uno_flip from "../../assets/img/uno_flip.png"
import uno_ori from "../../assets/img/uno_original.png"
import dos from "../../assets/img/dos.png"
import marvel from "../../assets/img/marvel.png"
import barbie from "../../assets/img/barbie.png"

const Descobrir = () => { 
  return (
    <section className={styles.Descobrir}>
      <div className={styles.descobrir_wrapper}>
        <div className={styles.descobrir_new}>
          <h2 className={styles.descobrir_title}>Descobrir</h2>
          <a className={styles.descobrir_filtro}>Filtrar</a>
        </div>
        <div className={styles.descobrir_container}>
          <div className={styles.descobrir_div}>
            <img src={uno_flip} alt="uno flip"></img>
            <div className={styles.descobrir_anuncio}>
              <p className={styles.descobrir_p}>UNO® Flip SIOC</p>
              <p className={styles.descobrir_pri}>R$104,99</p>
            </div>
            <div className={styles.descobrir_preco}>
              <p className={styles.descobrir_acaba}>
                Acaba em<span className={styles.descobrir_span}> 01.34.45</span>
              </p>
              <a className={styles.descobrir_btn} href="#">Comprar</a>
            </div>
          </div>

          <div className={styles.descobrir_div}>
            <img src={dos} alt="uno dos"></img>
            <div className={styles.descobrir_anuncio}>
              <p className={styles.descobrir_p}>UNO® Dos</p>
              <p className={styles.descobrir_pri}>R$50,00</p>
            </div>
            <div className={styles.descobrir_preco}>
              <p className={styles.descobrir_acaba}>
                Acaba em<span className={styles.descobrir_span}> 01.34.45</span>
              </p>
              <a className={styles.descobrir_btn} href="#">Comprar</a>
            </div>
          </div>

          <div className={styles.descobrir_div}>
            <img src={uno_ori} alt="uno original"></img>
            <div className={styles.descobrir_anuncio}>
              <p className={styles.descobrir_p}>UNO® Original</p>
              <p className={styles.descobrir_pri}>R$29,90</p>
            </div>
            <div className={styles.descobrir_preco}>
              <p className={styles.descobrir_acaba}>
                Acaba em<span className={styles.descobrir_span}> 30.34.45</span>
              </p>
              <a className={styles.descobrir_btn} href="#">Comprar</a>
            </div>
          </div>

          <div className={styles.descobrir_div}>
            <img src={marvel} alt="uno marvel"></img>
            <div className={styles.descobrir_anuncio}>
              <p className={styles.descobrir_p}>Amet pellentesq..</p>
              <p className={styles.descobrir_pri}>R$34,99</p>
            </div>
            <div className={styles.descobrir_preco}>
              <p className={styles.descobrir_acaba}>
                Acaba em<span className={styles.descobrir_span}> 01.34.45</span>
              </p>
              <a className={styles.descobrir_btn} href="#">Comprar</a>
            </div>
          </div>
        </div>

        
        <div className={styles.descobrir_container}>
          <div className={styles.descobrir_div}>
            <img src={marvel} alt="uno marvel"></img>
            <div className={styles.descobrir_anuncio}>
              <p className={styles.descobrir_p}>UNO® Masters</p>
              <p className={styles.descobrir_pri}>R$34,99</p>
            </div>
            <div className={styles.descobrir_preco}>
              <p className={styles.descobrir_acaba}>
                Acaba em<span className={styles.descobrir_span}> 01.34.45</span>
              </p>
              <a className={styles.descobrir_btn} href="#">Comprar</a>
            </div>
          </div>

          <div className={styles.descobrir_div}>
            <img src={barbie} alt="uno barbie"></img>
            <div className={styles.descobrir_anuncio}>
              <p className={styles.descobrir_p}>UNO® Barbie</p>
              <p className={styles.descobrir_pri}>R$23,99</p>
            </div>
            <div className={styles.descobrir_preco}>
              <p className={styles.descobrir_acaba}>
                Acaba em<span className={styles.descobrir_span}> 01.34.45</span>
              </p>
              <a className={styles.descobrir_btn} href="#">Comprar</a>
            </div>
          </div>

          <div className={styles.descobrir_div}>
            <img src={uno_min} alt="uno minimalista"></img>
            <div className={styles.descobrir_anuncio}>
              <p className={styles.descobrir_p}>UNO® Minimalista</p>
              <p className={styles.descobrir_pri}>R$29,90</p>
            </div>
            <div className={styles.descobrir_preco}>
              <p className={styles.descobrir_acaba}>
                Acaba em<span className={styles.descobrir_span}> 30.34.45</span>
              </p>
              <a className={styles.descobrir_btn} href="#">Comprar</a>
            </div>
          </div>

          <div className={styles.descobrir_div}>
            <img src={uno_flip} alt="uno flip"></img>
            <div className={styles.descobrir_anuncio}>
              <p className={styles.descobrir_p}>UNO® Flip</p>
              <p className={styles.descobrir_pri}>R$104,99</p>
            </div>
            <div className={styles.descobrir_preco}>
              <p className={styles.descobrir_acaba}>
                Acaba em<span className={styles.descobrir_span}> 20.23.25</span>
              </p>
              <a className={styles.descobrir_btn} href="#">Comprar</a>
            </div>
          </div>
        </div>

        <div className={styles.descobrir_vermais}>
            <a className={styles.descobrir_vermaisbtn} href="#">Ver Mais</a>
        </div>
      </div>
    </section>
  );
};

export default Descobrir;
