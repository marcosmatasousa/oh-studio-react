import PropTypes from 'prop-types';

import styles from './ImageRow.module.css';

function ImageRow({ leftImage, rightImage }) {
  return (
    <div className={styles.framer}>
      <div className={styles.framerContainer}>
        <img className={styles.framerImg} src={`src/assets/${leftImage}`} alt="" />
      </div>
      <div className={styles.framerContainer}>
        <img className={styles.framerImg} src={`src/assets/${rightImage}`} alt="" />
      </div>
    </div>
  )
}

ImageRow.propTypes = {
  leftImage: PropTypes.string,
  rightImage: PropTypes.string
}

export default ImageRow;