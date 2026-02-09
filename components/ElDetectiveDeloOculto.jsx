import React from 'react';
import styles from '../styles/ElDetectiveDeloOculto.module.css';
import ProductData from '../constants/ProductData';

function ElDetectiveDeloOculto() {
    const books = ProductData.allBooks.filter(book => book.type === 'thriller');

    return (
        <div className={styles.container}>
            <section className={styles.series_hero}>
                <div className={styles.hero_content}>
                    <h4 className={styles.series_subtitle}>EL AUTOR</h4>
                    <h1 className={styles.series_title}>MARTIN LARSSEN</h1>
                    <div className={styles.series_summary}>
                        <p>
                            Maestro de la atmósfera y narrador de lo inexplicable, <strong>Martin Larssen</strong> ha dedicado su obra a cartografiar los horrores que acechan en los límites de la realidad. Con una voz única en el género, invita al lector a descender por los rincones más oscuros de la psique humana.
                        </p>
                        <p>
                            A través de la saga de <em>El Detective de lo Oculto</em>, Larssen teje una red de antiguos rituales y manifestaciones de pesadilla, consolidando un universo gótico que desafía la lógica y redefine el terror sobrenatural contemporáneo.
                        </p>
                    </div>
                    <div className={styles.series_meta}>
                        <span>6 VOLÚMENES PUBLICADOS</span>
                        <span className={styles.separator}>|</span>
                        <span>GÓTICO SOBRENATURAL</span>
                    </div>
                </div>
            </section>
            <div className={styles.bookList}>
                {books.map((book) => (
                    <div key={book.id} className={styles.bookRow}>
                        <div className={styles.imageCol}>
                            <img
                                src={`images/covers/${book.image}`}
                                alt={book.name}
                                className={styles.coverImage}
                            />
                        </div>
                        <div className={styles.infoCol}>
                            <h2 className={styles.bookTitle}>{book.name.toUpperCase()}</h2>
                            <p className={styles.description}>{book.description}</p>
                            <div className={styles.buttonContainer}>
                                <a
                                    href={`https://www.amazon.es`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.amazonButton}
                                >
                                    VER EN AMAZON
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ElDetectiveDeloOculto;