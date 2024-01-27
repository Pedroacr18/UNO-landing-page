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
                    <h2>R$ 80,00</h2>
                    <p>Acaba em <span>01.34.45</span></p>
                </div>

                <div>
                    <p>Sobre este item:</p>
                    <div>
                    <ul>
                        <li>Edição especial - visual completamente único</li>
                        <li>Minimalista - projetado com uma estética minimalista.</li>
                        <li>Visual novo <br /> - visual totalmente novo, bonito e simplista idealizado pelo designer warleson oliveira</li>
                        <li></li>Jogo - o jogo é como o uno clássico,<br /> de 2 a 10 jogadores com 7 anos ou mais.
                    </ul>
                    </div>
                </div>

                </div>

                <div className={styles.comprar_menu}>
                    <h2>R$ 80,00</h2>
                    <p>Entrega GRÁTIS: Segunda-feira, 29 de Janeiro. Se pedir dentro de 2 hrs 2 mins</p>
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