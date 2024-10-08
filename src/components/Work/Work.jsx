import styles from './Work.module.css';

function Work() {
  return (
    <div className={styles.workContainer}>
        <h2 className={styles.typography}>Let&apos;s work together.</h2>
        <h2 className={`${styles.typography} ${styles.touch}`}>
            <a className={styles.touch} href="">Get in touch.</a>
        </h2>
    </div>
  )
}

export default Work;