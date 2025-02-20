import { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/shared/AboutMe.module.css";
import { REACT_NATIVE_RESUME_DATA } from "../resume";
import { EDUCATION, PROGRAMMING_SKILLS } from "../resume/genral";
import { InfoCard } from "./InfoCard";
import { ProgressBar } from "../general";

export const AboutMe: NextPage = () => {

  return (
    <section id="about" >
      <div className={styles.about}>
        <div className={styles.container}>
          <div className={styles.roww}>
            <div className={styles.main_title}>
              <h3 className={styles.subtitle}>About Me</h3>
              <h3 className={styles.title}>Biography</h3>
              <p className={styles.desc}>I am Chaitanya Khiratkar,
                Software Developer, the Indian Institute of Technology,
                Kharagpur Alumini one of the top universities in India.
                I have completed my major in Chemical Engineering ( B.Tech + M.Tech).
                During my course of study, I have developed a keen interest in
                Software Development.
              </p>
            </div>
            <div className={styles.about_info}>
              <div className={styles.about_left}>
                <table>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>Chaitanya Khiratkar</th>
                    </tr>
                    <tr>
                      <th>DOB</th>
                      <th>17 September 2000</th>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <th><Link href="tel:+917057868697">(+91) 7057868697</Link></th>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <th><Link href="mailto:chaitanyak.iitkgp@gmail.com">chaitanyak.iitkgp@gmail.com</Link></th>
                    </tr>
                    <tr>
                      <th>City</th>
                      <th>Kharagpur</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="about_right">
                <div className="resumo_fn_cv_btn">
                </div>
              </div>
            </div>
            <div className={styles.resumo_fn_tabs}>

              <div className={styles.tablet}>
                <h3 className={styles.info_title} >Experience</h3>
                {
                  REACT_NATIVE_RESUME_DATA['EXPERIENCE'].map((itemProps, index) => {
                    return <InfoCard
                      {...itemProps}
                      key={`${index}+exp`}
                    />
                  })
                }
              </div>

              <div className={styles.tablet}>
                <h3 className={styles.info_title} >Projects</h3>
                {
                  REACT_NATIVE_RESUME_DATA['PROJECTS'].map((itemProps, index) => {
                    return <InfoCard
                      {...itemProps}
                      key={`${index}+exp`}
                    />
                  })
                }
              </div>

              <div className={styles.tablet}>
                <h3 className={styles.info_title} >Education</h3>

                {
                  EDUCATION.map((itemProps, index) => {
                    return <InfoCard
                      {...itemProps}
                      key={`${index}+edu`}
                    />
                  })
                }

              </div>

              <div className={styles.tablet + " " + styles.tablet_skills}>
                <h3 className={styles.info_title} >Skills</h3>
                {
                  PROGRAMMING_SKILLS.map((item, index) => {
                    return <div key={'dsadsa'} className={styles.skillsData}>
                      <div className={styles.item_top}>
                        <h5>{item.type}</h5>
                      </div>
                      <div className={styles.skillsItems}>
                      {item?.items?.map(({ name, score }) => {
                        return <div key={'dasd'}>
                          <ProgressBar
                            key={index}
                            head={name}
                            value={score}
                            />
                        </div>
                      })}
                      </div>

                    </div>
                  })
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}