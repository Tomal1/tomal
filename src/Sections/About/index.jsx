
import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

const About =()=>{

    return(
        <section id="about">
            <Heading index="01" heading="About Me"/>
            <div className={styles.container}>
                <div className={styles.left}>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dolores, iusto commodi inventore quae pariatur quos neque tempore, debitis numquam necessitatibus eligendi dolore earum officia, sit ea eos at molestias.
                    </p>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dolores, iusto commodi inventore quae pariatur quos neque tempore, debitis numquam necessitatibus eligendi dolore earum officia, sit ea eos at molestias.
                    </p>
                </div>
                <div className={styles.right}>
                    <img 
                        src="../"
                        alt="profile"
                        className={styles.profile_img}
                    />
                    <div className={styles.img_border}></div>
                </div>
            </div>
        </section>
    )

}
export default About;