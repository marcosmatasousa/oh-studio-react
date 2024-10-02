import Tags from '../Tags/Tags';

import style from './Main.module.css'

function Main() {
    return (
        <section className={style.main}>
            <h1 className={style.presentation}>A brand and product designer working with clients globally</h1>
            <Tags />
        </section>
    )
}

export default Main;