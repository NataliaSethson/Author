import { useParams } from 'react-router'
import styles from '../styles/BookDetails.module.css'
import { Link } from 'react-router-dom';
import ProductData from '../constants/ProductData'
import Tag from './Tag';



function BookDetails() {

    // Get the book name from the URL

    const { bookName } = useParams();
    const decodedBookName = decodeURIComponent(bookName);


    // Find the product based on the product name

    const currentBook = ProductData.allBooks.find(book => book.name === decodedBookName);

    // Return this statement if the product is not found

    if (!currentBook) {
        return <div className={styles.wrapper}>Book not found.</div>;
    }

    // Filter related books based on the type of the current book and exclude the current book

    const relatedBooks = ProductData.allBooks.filter(book => book.type === currentBook.type && book.name !== currentBook.name);


    return (

        <div className={styles.wrapper}>

            <div className={styles.book_container}>

                <div className={styles.image_container}>
                    <img
                        src={`/images/covers/${currentBook.image}`}
                        className={styles.img}
                        alt={currentBook.name}></img>

                    <Tag text={currentBook.type} year={currentBook.year} />
                </div>


                <div className={styles.info}>
                    <h1 className={styles.title}>{currentBook.name}</h1>
                    <h2 className={styles.collection}>{currentBook.collection}</h2>
                    <p className={styles.description}>{currentBook.description}</p>
                    
                    <Link to="https://www.amazon.es" target="_blank" className={styles.amazon_btn}>
                        COMPRAR EN AMAZON
                    </Link>
                </div>

            </div>


            <div className={styles.related_header}>
                <h1>Related Books</h1>
            </div>

            <div className={styles.related_books_wrapper}>

                {relatedBooks.map((book) => (

                    <div className={styles.related_container} key={book.name}>
                        <div className={styles.related_image_container}>
                            <Link
                                to={`/books/${encodeURIComponent(book.name)}`}
                                onClick={() => {
                                    window.scroll({ top: 0, left: 0, behavior: "smooth" });
                                }}
                            >
                                <img
                                    src={`/images/covers/${book.image}`}
                                    className={styles.related_img}
                                    alt={book.name}></img>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default BookDetails