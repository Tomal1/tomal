import styles from "./style.module.css";

const Nav = () =>{
    return(

        <nav className={styles.nav_container}>
            <div className={styles.nav_left}>
                <a href ="#home">Tomal</a>
            </div>
            <div class={styles.nave_right}>
                <a href="#about" className={styles.nav_link}>
                <span>01</span>About
                </a>
                <a href="#about" className={styles.nav_link}>
                <span>02</span>Experience
                </a>
                <a href="#about" className={styles.nav_link}>
                <span>03</span>Work
                </a>
                <a href="#about" className={styles.nav_link}>
                <span>04</span>Contact
                </a>
                <button className={styles.nav_resume_btn}>Resume</button>
            </div>
        </nav>
    )
}

export default Nav;