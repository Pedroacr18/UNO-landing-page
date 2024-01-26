import styles from "./footer.module.css";
import Logo from "../../assets/img/Uno-Logo-2020 1.svg";
import Instagram from "../../assets/img/Instagram.png"
import Facebook from "../../assets/img/Facebook.png"
import Twitter from "../../assets/img/Twitter.png"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_container}>
        <div>
          <img src={Logo} alt="Logo"></img>
          <p className={styles.footer_p}>
            Esta edição especial do UNO®, o jogo de cartas
            <br /> adorado por todos, tem um visual totalmente
            <br /> exclusivo. Concebida com uma estética minimalista,
            <br /> essa versão é um grande presente para colecionadores de UNO®.
          </p>
        </div>

        <div>
            <p className={styles.footer_p1}>Inscreva-se para saber de novidades do mundo uno. Se <br /> inscreva-se abaixo agora!</p>
           <div className={styles.footer_cad}>
            <input className={styles.footer_input} type="text" name="email" size="30" placeholder="Digite seu email aqui"></input>
            <div className={styles.footer_divbtn}>
              <button className={styles.footer_btn} type="submit">Cadastre-se</button>
              </div>
            </div>
        </div>
        </div>

        <div className={styles.footer_copy}>
            <div className={styles.footer_img}>
                <img src={Instagram} alt="Instagram"></img>
                <img src={Facebook} alt="Facebook"></img>
                <img src={Twitter} alt="Twitter"></img>
            </div>

            <div>
                <p className={styles.footer_copyp}>© 2024 MATEL. Todos os direitos reservados.</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
