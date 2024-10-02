import style from './Navbar.module.css';

function Navbar() {
    return (
        <div className={style.navSpacer}>
            <div className={style.navbar}>
                <div className={`${style.navButton} ${style.navButtonSelected}`}>Home</div>
                <div className={style.navButton}>Profile</div>
                <div className={style.navButton}>Contact</div>
            </div>
        </div>
    )
}

export default Navbar;