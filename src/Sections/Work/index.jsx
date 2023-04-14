import styles from "./styles.module.css";
import Heading from "../../Components/Heading";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenNewIcon from "@mui/icons-material/OpenInNew";
import constant from "../../constant.json";

const Work = () => {
  return (
    <section id="work">
      <Heading index="03" heading="some Things I've Built" />
      <div className={styles.container}>
        {constant.projects.map((project, index) =>
          index % 2 === 0 ? (
            <div className={styles.project}>
              <div className={styles.left}>
                <a href={project.link} target="_blank">
                  <img
                    src={project.image}
                    className={styles.img}
                    alt="screen_shot_of_project"
                  />
                </a>
              </div>

              <div className={styles.right}>
                <a href={project.link} className={styles.heading}>
                  {project.title}
                </a>
                <p className={styles.desc}>{project.desc}</p>

                <div className={styles.skill_container}>
                  {project.skills.map((skill) => (
                    <p>{skill}</p>
                  ))}
                </div>

                <div>
                  <a href="/" className={styles.link}>
                    <GitHubIcon />
                  </a>
                  <a href="/" className={styles.link}>
                    <OpenNewIcon />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.project}>
              <div className={styles.left}>
                <a href={project.link} className={styles.heading}>
                  {project.title}
                </a>
                <p className={styles.desc}>{project.desc}</p>

                <div className={styles.skill_container}>
                  {project.skills.map((skill) => (
                    <p>{skill}</p>
                  ))}
                </div>

                <div>
                  <a href="/" className={styles.link}>
                    <GitHubIcon />
                  </a>
                  <a href="/" className={styles.link}>
                    <OpenNewIcon />
                  </a>
                </div>
              </div>
              <div className={styles.right}>
                <a href={project.link} target="_blank">
                  <img
                    src={project.image}
                    className={styles.img}
                    alt="screen_shot_of_project"
                  />
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Work;
