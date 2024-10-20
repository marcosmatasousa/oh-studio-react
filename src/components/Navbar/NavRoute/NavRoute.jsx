import PropTypes from 'prop-types';
import styles from './NavRoute.module.css';


function NavRoute({id, isActive, routeName, handleClick}) {
  return (
    <div onClick={() => handleClick(id)} className={isActive ? `${styles.navButton} ${styles.navButtonSelected}` : `${styles.navButton}`}>
      {routeName}
    </div>
  );
}

NavRoute.propTypes = {
  isActive: PropTypes.bool,
  routeName: PropTypes.string,
  id: PropTypes.number,
  handleClick: PropTypes.func
}

export default NavRoute;