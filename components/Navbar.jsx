import { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'


export default function Navbar() {

    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!burgerMenuOpen);
    };

    return (
        <>
            <nav className={`${styles.links_container} ${burgerMenuOpen ? styles.burgerMenuOpen : ''}`}>
                {burgerMenuOpen && (
                    <>

                    </>
                )}

                <Link to="/"
                    className={styles.individual_link}
                    onClick={() => {
                        setBurgerMenuOpen(false);
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                    }}
                >
                    <h1 className={styles.links}>INICIO</h1>
                </Link>

                <Link to="/books"
                    className={styles.individual_link}
                    onClick={() => {
                        setBurgerMenuOpen(false);
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                    }}
                >
                    <h1 className={styles.links}>LIBROS</h1>
                </Link>

                <Link to="/detective"
                    className={styles.individual_link}
                    onClick={() => {
                        setBurgerMenuOpen(false);
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                    }}
                >
                    <h1 className={styles.links}>EL DETECTIVE DE LO OCULTO</h1>
                </Link>

                <Link to="/"
                    onClick={() => {
                        setBurgerMenuOpen(false);
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                    }}
                >
                    <img className={styles.logo} src='images/logo-small-nobg.png'></img>
                </Link>

                <Link to="/noticias"
                    className={styles.individual_link}
                    onClick={() => {
                        setBurgerMenuOpen(false);
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                    }}
                >
                    <h1 className={styles.links}>NOTICIAS</h1>
                </Link>

                <Link to="/about-me"
                    className={styles.individual_link}
                    onClick={() => {
                        setBurgerMenuOpen(false);
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                    }}
                >
                    <h1 className={styles.links}>SOBRE MÍ</h1>
                </Link>

                <Link to="/contact"
                    className={styles.individual_link}
                    onClick={() => {
                        setBurgerMenuOpen(false);
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                    }}
                >
                    <h1 className={styles.links}>CONTACTO</h1>
                </Link>

            </nav>


            {burgerMenuOpen ? (
                <CloseIcon fontSize='large' className={`${styles.burgerMenuIcon} ${styles.closeIcon}`} onClick={toggleBurgerMenu} />
            ) : (
                <MenuIcon fontSize='large' className={styles.burgerMenuIcon} onClick={toggleBurgerMenu} />
            )}
        </>
    )
}
