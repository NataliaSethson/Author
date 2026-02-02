import styles from '../styles/Banner.module.css';

function Banner() {
  return (
    <section className={styles.banner_wrapper}>
      <div className={styles.header_content}>
        <p className={styles.overline}>Sitio Oficial del Autor Best Seller</p>
        <h1 className={styles.author_name}>MARTIN LARSSEN</h1>
      </div>

      
      <div className={styles.main_stripe}>
        <div className={styles.content_container}>
          
          <div className={styles.book_side}>
            <img 
              src="/images/covers/crow.jpg" 
              alt="Crow - Martin Larssen" 
              className={styles.book_img} 
            />
          </div>

          <div className={styles.text_side}>
            <h2 className={styles.featured_title}>CROW</h2>
            <p className={styles.book_meta}>Una nueva novela de Martin Larssen</p>
            <p className={styles.release_date}>Lanzamiento Junio 2026</p>
            <p className={styles.description}>
              Un nuevo thriller de suspense del autor seleccionado por el New York Times.
            </p>
            <button className={styles.preorder_btn}>RESERVAR AHORA</button>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Banner;
