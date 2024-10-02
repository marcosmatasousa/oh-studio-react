import style from './Tags.module.css';

function Tags() {
    return (
        <div className={style.tagsContainer}>
            <p className={style.tag}>Expertise</p>
            <p className={style.tag}>Branding</p>
            <p className={style.tag}>Product</p>
            <p className={style.tag}>Design Systems</p>
        </div>
    )
}

export default Tags