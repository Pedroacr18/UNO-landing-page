import styles from "./Comprar.module.css"
import uno_min from "../../assets/img/uno_hero.png"
import mastercard from "../../assets/img/Mastercard.png"

function Comprar() {
  return (
        <section className={styles.Comprar}>
            <div className={styles.comprar_wrapper}>
                <div className={styles.comprar_img}>
                    <img src={uno_min} alt="uno minimalista"></img>
                </div>
                
                <div className={styles.comprar_content}>

                <div>
                    <h1 className={styles.comprar_titulo}>Jogo De Cartas UNO®<br /> minimalista Preto - mattel</h1>
                </div>

                <div className={styles.comprar_preco}>
                    <h2 className={styles.comprar_h2}>R$ 80,00</h2>
                    <p className={styles.comprar_p}>Acaba em <span className={styles.comprar_span}>01.34.45</span></p>
                </div>

                <div>
                    <p className={styles.comprar_sobre}>Sobre este item:</p>
                    <div>
                    <ul className={styles.comprar_lista}>
                        <li>Edição especial - visual completamente único</li>
                        <li>Minimalista - projetado com uma estética minimalista.</li>
                        <li>Visual novo <br /> - visual totalmente novo, bonito e simplista idealizado pelo designer warleson oliveira</li>
                        <li></li>Jogo - o jogo é como o uno clássico,<br /> de 2 a 10 jogadores com 7 anos ou mais.
                    </ul>
                    </div>
                </div>

                </div>

                <div className={styles.comprar_menu}>
                    <h2 className={styles.comprar_h2}>R$ 80,00</h2>
                    <p>Entrega GRÁTIS: <span className={styles.comprar_span}>Segunda-<br />feira, 29 de Janeiro.</span> Se<br /> pedir dentro de<span className={styles.comprar_span2}> 2 hrs 2 mins</span></p>
                    <p>Em estoque</p>
                    <button className={styles.comprar_btn} type="submit">Comprar</button>
                    <div>
                        <img src={mastercard} alt="cartao"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comprar