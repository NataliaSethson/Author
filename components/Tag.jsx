import React from 'react';
import styles from '../styles/Tag.module.css';

export default function Tag({ text, year }) {
  if (!text) return null;

  const normalizedText = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '')
    .replace(/-/g, '');

  const colorClass = styles[normalizedText] || styles.default;

  return (
    <div className={styles.wrapper}>
      <div className={styles.yearRow}>
        {year || "2024"}
      </div>
      <div className={`${styles.genreRow} ${colorClass}`}>
        {text}
      </div>
    </div>
  );
}