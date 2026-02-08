import React, { useState } from 'react';
import styles from '../styles/Books.module.css';
import ProductData from '../constants/ProductData';
import { Link } from 'react-router-dom';
import Tag from './Tag';

function Books() {
  const [selectedCategory, setSelectedCategory] = useState('allBooks');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const getBooksForCategory = () => {
    return ProductData[selectedCategory] || [];
  };

  const getCategoryName = (key) => {
    const names = {
      allBooks: 'All Books',
      standalones: 'Standalones',
      secretsOfTime: 'Secrets of Time',
      mysticFire: 'Mystic Fire',
      valhalla: 'Valhalla',
      finalGirl: 'Final Girl',
      silentStranger: 'Silent Stranger',
    };
    return names[key] || 'Category';
  };

  const genreMapping = {
    'secrets-of-time': 'Distopía',
    'thriller': 'Thriller',
    'recent': 'Thriller',
    'science-fiction': 'Ciencia Ficción',
    'final-girl': 'Terror',
    'finalgirl': 'Terror',
    'mystic-fire': 'Sobrenatural',
    'valhalla': 'Sobrenatural',
    'silent-stranger': 'Sobrenatural',
    'crimen': 'Terror',
    'standalones': 'Thriller'
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title_container}>
          <div className={styles.header_text}>
            <h2 className={styles.category_header}>{getCategoryName(selectedCategory)}</h2>
            <p className={styles.total_books_header}>
              Showing a total of {getBooksForCategory().length} results
            </p>
          </div>
        </div>

        <div className={styles.content_container}>
          <div className={styles.selector_container}>
            <p className={styles.category_title}>Category</p>
            {['allBooks', 'standalones', 'secretsOfTime', 'mysticFire', 'valhalla', 'finalGirl', 'silentStranger'].map((cat) => (
              <p
                key={cat}
                className={styles.individual_selector}
                onClick={() => {
                  handleCategoryChange(cat);
                  window.scroll({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                {getCategoryName(cat)}
              </p>
            ))}
          </div>

          <div className={styles.header_text_smallScreens}>
            <h2 className={styles.category_header}>{getCategoryName(selectedCategory)}</h2>
            <p className={styles.total_books_header}>
              Showing a total of {getBooksForCategory().length} results
            </p>
          </div>

          <div className={styles.books_container}>
            {getBooksForCategory().map((book) => {
              const genreToShow = genreMapping[book.type] || book.type;

              return (
                <div className={styles.book_card} key={book.name}>
                  <Link
                    to={`/books/${encodeURIComponent(book.name)}`}
                    className={styles.book_link}
                    onClick={() => {
                      window.scroll({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    <img
                      className={styles.image}
                      src={`images/covers/${book.image}`}
                      alt={book.name}
                    />
                  </Link>

                  <Tag
                    text={
                      book.collection?.includes('Final Girl') ? 'Terror' :
                        (genreMapping[book.type] || book.type)
                    }
                    year={book.year}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
