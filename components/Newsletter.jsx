import { useEffect } from 'react';
import styles from '../styles/Newsletter.module.css';

export default function Newsletter() {
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://eocampaign1.com/form/04755312-0123-11f1-938b-bf68279d53ca.js";
    script.async = true;
    script.dataset.form = "04755312-0123-11f1-938b-bf68279d53ca";

    const container = document.getElementById('eo-form-container');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3 className={styles.text}>
          Recibe todas las noticias e información de Martin Larssen en tu bandeja de entrada
        </h3>
      </div>

      <div id="eo-form-container" className={styles.container}>
      </div>
    </div>
  );
}
