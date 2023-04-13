import styles from "./styles.module.css";


const Home =()=>{

    return (
        <section className={styles.home_section} id="home">
            <p className={styles.greet}>Hi, my name is</p>
            <h1 className={styles.heading_1}>Minhazul Islam (Tomal)</h1>
            <h1 className={styles.heading_2}>I build things for the web.</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nisi nobis dolores odio non molestias nulla, blanditiis ab, 
                hic porro fuga fugiat unde a ullam autem architecto 
                accusamus expedita! Dolorum, quaerat?
            </p>
            <a href="#work">
                <button className={styles.btn}>here are some of my work</button>
            </a>
        </section>
    )
}

export default Home;
