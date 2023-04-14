import styles from "./styles.module.css";

const Home = () => {
  return (
    <section className={styles.home_section} id="home">
      <p className={styles.greet}>Welcome to my page, my name is</p>
      <h1 className={styles.heading_1}>Minhazul Islam (Tomal)</h1>
      <h1 className={styles.heading_2}>I am an aspiring software engineer</h1>
      <p className={styles.desc}>
        I embrace technology like a puzzle waiting to be solved; If I don’t know
        how to do something my first protocol will be to search stack overflow
        or read documentation.
      </p>
      <a href="#work">
        <button className={styles.btn}>take a look at some of my work</button>
      </a>
    </section>
  );
};

export default Home;
