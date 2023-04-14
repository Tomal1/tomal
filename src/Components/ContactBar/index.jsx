import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./styles.module.css";

const ContactBar = () => {
  return (
    <div className={styles.contact_bar_wrapper}>
      <div className={styles.contact_bar}>
        <a href="https://www.linkedin.com/in/minhazul-islam-54b08812a/" target="_blank" className={styles.icon}>
          <LinkedInIcon />
        </a>
        <a href="https://github.com/Tomal1" target="_blank" className={styles.icon}>
          <GitHubIcon />
        </a>
        <div className={styles.line}></div>
      </div>
      <div className={styles.contact_bar}>
        <a href="mailto:minhazulislam@hotmail.com" className={styles.email}>
          minhazulislam@hotmail.com
        </a>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default ContactBar;
