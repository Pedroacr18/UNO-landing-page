import styles from "./section.module.css";
import verificado from "../../assets/img/verificado.png"
import caixa from "../../assets/img/caixa.png"
import papel from "../../assets/img/papel.png"
import rocket from "../../assets/img/rocket.png"

const Page = () => {
    return (
        <section className={styles.Page}>
            <div className={styles.page_wrapper}>
                <div className={styles.page_container}>
                    <h3 className={styles.page_title}>Benefícios de joga uno</h3>
                    <p className={styles.page_para}>Saiba mais sobres os benefícios de joga uno com seus amigos e família</p>
                </div>
                
                <div className={styles.page_content}>
                <div className={styles.pag_div}>
                    <img className={styles.page_img} src={verificado} alt="verificado"></img>
                    <p className={styles.page_p}>Divirta-se com <br /><span className={styles.page_span}>segurança.</span></p>
                </div>

                <div className={styles.pag_div}>
                    <img className={styles.page_img} src={caixa} alt="caixa"></img>
                    <p className={styles.page_p}>Pensamentos fora da<br /><span className={styles.page_span}>caixinha.</span></p>
                </div>

                <div className={styles.pag_div}>
                    <img className={styles.page_img} src={papel} alt="papel"></img>
                    <p className={styles.page_p}>Ativa o seu lado.<br /><span className={styles.page_span}>criativo.</span></p>
                </div>

                <div className={styles.pag_div}>
                    <img className={styles.page_img} src={rocket} alt="rocket"></img>
                    <p className={styles.page_p}>Estimula o raciocínio<br /><span className={styles.page_span}>rápido.</span></p>
                </div>

            </div>
            </div>
        </section>
    );
};

export default Page