import React from 'react';
import styles from '../styles/ElDetectiveDeloOculto.module.css';
import ProductData from '../constants/ProductData';

function ElDetectiveDeloOculto() {
    const books = ProductData.allBooks.filter(book => book.type === 'thriller');

    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>EL DETECTIVE DE LO OCULTO</h1>
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