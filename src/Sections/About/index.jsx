import Heading from "../../Components/Heading";
import styles from "./styles.module.css";
import Tomal from "./tomalBlank.png";

const About = () => {
  return (
    <section id="about">
      <Heading index="01" heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.desc}>
            Tomal is an aspiring software engineer; his tech journey began after
            browsing a job search website where he would repeatedly came across keywords such
            as: HTML, CSS & JavaScript. Curiosity played a role in Tomal’s
            investigation that eventually led him to the FreeCodeCamp website.
            For several months he dedicates his effort into studying the syllabus which spirals
            into an obsession.
          </p>
          <p className={styles.desc}>
            Tomal has now come to the conclusion that knowing how to learn,
            adapting to an ever changing environment and people skills are his 
            most precious qualities.
          </p>
        </div>
        <div className={styles.right}>
          <img src={Tomal} alt="profile" className={styles.profile_img} />
          <div className={styles.img_border}></div>
        </div>
      </div>
    </section>
  );
};
export default About;
