import { useState } from 'react';
import styles from '../styles/Contact.module.css'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    const formData = new FormData(e.target);
    
    fetch("https://formspree.io/f/mjgekaww", {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Reset form fields
          setName('');
          setEmail('');
          setMessage('');
          // Here you can add your submit logic (e.g., sending data to a server)
          setSubmitted(true);
        } else {
          alert("Error sending message");
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h3 className={styles.text}>Ponte en contacto conmigo</h3>
        </div>

        <form 
          className={styles.container} 
          onSubmit={handleSubmit}
        >
          <h3 className={styles.signup}>Envíame un mensaje</h3>
          <p className={styles.description}>Me encanta hablar con mis lectores. Escríbeme.</p>
          <input 
            type="text" 
            name="name"
            placeholder="name" 
            className={styles.input} 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="email" 
            name="email"
            placeholder="email address" 
            className={styles.input} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea 
            name="message"
            placeholder="message" 
            className={styles.input_message}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button 
            type="submit"
            className={styles.button}
          >
            {submitted ? 'Your message has been sent!' : 'Submit'}
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
