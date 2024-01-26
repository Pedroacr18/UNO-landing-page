import { useState } from "react";
import styles from "./ada.module.css";
import LogoMenu from "../../assets/img/Uno-Logo-2020 1.svg";
import IconsBars from "../../assets/img/menu-togle.svg";
import IconCloser from "../../assets/img/menu-closer.svg";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const links = [
    { name: "inicio", link: "/" },
    { name: "Onde encontrar", link: "/" },
    { name: "Novos Produtos", link: "/" },
    { name: "Creditos", link: "/" },
  ];

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header
      id={styles.Menu}
      className={`${styles.header} ${menuActive ? styles.active : ""}`}
    >
      <div className={styles.header_wrapper}>
        <div>
          <button className={styles.LogoButton}>
            <img src={LogoMenu} alt="Logo menu" />
          </button>
        </div>
        <button id={styles.buttonMobile} onClick={toggleMenu}>
          <img
            id={styles.MenuIcons}
            src={menuActive ? IconCloser : IconsBars}
            alt="Icone Menu"
          />
        </button>
        <nav className={menuActive ? styles.active : ""}>
          <ul id={styles.ulmenu} className={styles.ul_wrapper}>
            {links.map((link, index) => (
              <li className={styles.nav_li} key={link.name}>
                <a className={styles.navLink} href={link.link} key={index}>
                  {link.name}
                </a>
              </li>
            ))}

            <li className={styles.nav_li}>
                <a href="#" className={styles.btn_login}>
                    Entrar
                </a>
            </li>
            <li className={styles.nav_li}>
                    <a href="#" className={styles.btn_singIn}>cadastre-se</a>
                </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
