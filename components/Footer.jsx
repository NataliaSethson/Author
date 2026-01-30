import React from 'react'
import styles from '../styles/Footer.module.css'
import { Link } from 'react-router-dom'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';



export default function Footer() {
  return (
    <>

      <div className={styles.wrapper}>

        <div className={styles.index}>

          <Link
            to='/'
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <h3 className={styles.index_link}>INICIO</h3>
          </Link>

          <Link
            to='/books'
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <h3 className={styles.index_link}>LIBROS</h3>
          </Link>

          <Link
            to='/detective'
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <h3 className={styles.index_link}>EL DETECTIVE DE LO OCULTO</h3>
          </Link>

          <Link
            to='/about-me'
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <h3 className={styles.index_link}>SOBRE MÍ </h3>
          </Link>

          <Link
            to='/media'
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <h3 className={styles.index_link}>NOTICIAS</h3>
          </Link>


          <Link
            to='/contact'
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <h3 className={styles.index_link}>CONTACTO</h3>
          </Link>

        </div>


      </div>


      <div className={styles.socials}>

        <Link
          to='https://www.facebook.com'
          className={styles.socials_link}
          target='__blank'
          rel='noopener'
        >
          <FacebookOutlinedIcon className={styles.icon} fontSize='large' />
        </Link>

        <Link
          to='https://www.x.com'
          className={styles.socials_link}
          target='__blank'
          rel='noopener'
        >
          <XIcon className={styles.icon} fontSize='large' />
        </Link>

        <Link
          to='https://www.instagram.com'
          className={styles.socials_link}
          target='__blank'
          rel='noopener'
        >
          <InstagramIcon className={styles.icon} fontSize='large' />
        </Link>

        <Link
          to='https://www.youtube.com'
          className={styles.socials_link}
          target='__blank'
          rel='noopener'
        >
          <YouTubeIcon className={styles.icon} fontSize='large' />
        </Link>

      </div>


      <div className={styles.promotion}>

        <div className={styles.morgan_promo}>
          <p>&copy; {new Date().getFullYear()} Morgan Maxwell - All Rights Reserved.</p>
        </div>

        <div className={styles.separator_container}>
          <p className={styles.separator}></p>
        </div>

        <div className={styles.my_promo}>
          <p>Website created by <Link to='https:/www.alexhernan.com' target='__blank'><span>Alex Hernán</span></Link></p>
        </div>

      </div>


    </>
  )
}
