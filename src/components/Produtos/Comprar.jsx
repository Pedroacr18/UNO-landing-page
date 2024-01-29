import styles from "./Comprar.module.css"
import uno_min from "../../assets/img/uno_prod.png"
import mastercard from "../../assets/img/Mastercard.png"

function Comprar() {
  return (
        <section className={styles.Comprar}>
            <div className={styles.comprar_wrapper}>
                <div className={styles.comprar_img}>
                    <img src={uno_min} className={styles.comprar_img} alt="uno minimalista"></img>
                </div>
                
                <div className={styles.comprar_content}>

                <div className={styles.comprar_title}>
                    <h1 className={styles.comprar_titulo}>Jogo De Cartas UNO®<br /> minimalista Preto - mattel</h1>
                </div>

                <div className={styles.comprar_preco}>
                    <h2 className={styles.comprar_h}>R$ 80,00</h2>
                    <p className={styles.comprar_p}>Acaba em <span className={styles.comprar_span}>01.34.45</span></p>
                </div>

                <div>
                    <p className={styles.comprar_sobre}>Sobre este item:</p>
                    <div>
                    <ul className={styles.comprar_lista}>
                        <li className={styles.comprar_li}>Edição especial - visual completamente único</li>
                        <li className={styles.comprar_li}>Minimalista - projetado com uma estética minimalista.</li>
                        <li className={styles.comprar_li}>Visual novo - visual totalmente novo, bonito e simplista idealizado pelo designer warleson oliveira</li>
                        <li className={styles.comprar_li}>Jogo - o jogo é como o uno clássico, de 2 a 10 jogadores com 7 anos ou mais.</li>
                    </ul>
                    </div>
                </div>

                </div>

                <div className={styles.comprar_menu}>
                    <h2 className={styles.comprar_h2}>R$ 80,00</h2>
                    <h3 className={styles.comprar_entrega}>Entrega GRÁTIS: <span className={styles.comprar_span}>Segunda-<br />feira, 29 de Janeiro.</span> Se<br /> pedir dentro de<span className={styles.comprar_span2}> 2 hrs 2 mins</span></h3>
                    <p className={styles.comprar_estoque}>Em estoque</p>
                    <a className={styles.comprar_btn} type="submit">Comprar</a>

                    <div className={styles.comprar_card}>
                        <img src={mastercard} alt="cartao"></img>
                        <div>
                        <h4 className={styles.comprar_h4}>Paga com: <span className={styles.comprar_span3}>CARTÃO <br />2567*</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comprar