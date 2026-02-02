import { useState, useEffect } from 'react';
import styles from '../styles/Noticias.module.css';
import { Link } from 'react-router-dom';

function Noticias() {
  const newsData = [
    {
      id: 1,
      date: 'December 11, 2023',
      title: '2024 tour dates announced',
      text: 'Martin Larssen will embark on a tour supporting the release of The Haunted House...',
      image: '/images/announcement.jpg',
      link: '/events',
      type: 'standard'
    },
    {
      id: 2,
      date: 'January 15, 2024',
      title: 'Mira la entrevista en YouTube',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 
      type: 'youtube'
    },
    {
      id: 3,
      date: 'February 01, 2026',
      title: 'Novedades en X',
      tweetUrl: 'https://twitter.com/Netflix/status/1853110260464013444', 
      type: 'twitter'
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; 
  const currentNews = newsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const getYTId = (url) => url.split('v=')[1] || url.split('/').pop();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [currentPage]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {currentNews.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.image_container}>
              {item.type === 'standard' && (
                <Link to={item.link}><img src={item.image} className={styles.img} alt="news" /></Link>
              )}
              
              {item.type === 'youtube' && (
                <div className={styles.video_wrapper}>
                  <iframe 
                    width="100%" height="100%" 
                    src={`https://www.youtube.com/embed/${getYTId(item.videoUrl)}`}
                    title="YouTube preview" frameBorder="0" allowFullScreen
                  />
                </div>
              )}

              {item.type === 'twitter' && (
                <div className={styles.twitter_wrapper}>
                  <blockquote className="twitter-tweet" data-theme="light">
                    <a href={item.tweetUrl}>Ver publicación en X (Twitter)</a>
                  </blockquote>
                </div>
              )}
            </div>

            <div className={styles.content_container}>
              <p className={styles.date}>{item.date}</p>
              <h2 className={styles.title}>{item.title}</h2>
              {item.text && <p className={styles.text}>{item.text}</p>}
            </div>
          </div>
        ))}

        <div className={styles.pagination}>
          <button onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1} className={styles.pagi_btn}>
            ANTERIOR
          </button>
          <span className={styles.page_info}>PÁGINA {currentPage} DE {totalPages}</span>
          <button onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage === totalPages} className={styles.pagi_btn}>
            SIGUIENTE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Noticias;