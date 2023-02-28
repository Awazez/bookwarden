import React, { useState } from 'react';
import Image from 'next/image';
import mypic from "../assets/book1.svg"
import styles from '@/styles/Home.module.css'

const books = [
  {
    id: 1,
    title: 'Book 1',
    imageUrl: mypic,
  },
  {
    id: 2,
    title: 'Book 2',
    imageUrl: '/book2.jpg',
  },
  {
    id: 3,
    title: 'Book 3',
    imageUrl: '/book3.jpg',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % books.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + books.length) % books.length);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.books}>
        {books.map((book, index) => (
          <div
            key={book.id}
            className={`${styles.book} ${
              index === currentIndex ? styles.active : ''
            }`}
          >
            <Image
              src={book.imageUrl}
              alt={book.title}
              width={200}
              height={300}
            />
            <div className={styles.bookInfo}>
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <svg className={styles.bookSvg}>
                <circle
                  cx="50%"
                  cy="50%"
                  r="30%"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <button className={`${styles.button} ${styles.prev}`} onClick={goToPrevSlide}>
        &lt;
      </button>
      <button className={`${styles.button} ${styles.next}`} onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;