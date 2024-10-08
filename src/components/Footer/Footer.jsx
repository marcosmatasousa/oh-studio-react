import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.author}>
        <img className={styles.icon} src="src/assets/dragon-sphere.png" alt="" />
        <p className={styles.authorName}>© Marcos Mata 2024 </p>
      </div>
      <div className={styles.medias}>
        <a target='_blank' className={styles.media} href='https://www.instagram.com/mqsesh/'>Instagram</a>
        <a target='_blank' className={styles.media} href='https://www.linkedin.com/in/marcos-da-mata-sousa-a5b386282/'>LinkedIn</a>
        <a target='_blank' className={styles.media} href='mailto:marcosdamata2000@gmail.com'>Mail</a>
      </div>
    </footer>
  )
}

export default Footer;