import styles from "./style.module.css";
import resume from "../../Assets/resume.pdf";

const Nav = () => {
  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_left}>
        <a href="#home">Tomal</a>
      </div>
      <div class={styles.nave_right}>
        <a href="#about" className={styles.nav_link}>
          <span>01</span>About
        </a>
        <a href="#experience" className={styles.nav_link}>
          <span>02</span>Experience
        </a>
        <a href="#work" className={styles.nav_link}>
          <span>03</span>Work
        </a>
        <a href="#contact" className={styles.nav_link}>
          <span>04</span>Contact
        </a>
        <button className={styles.nav_resume_btn}>
          <a href={resume} download>
            Resume
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
