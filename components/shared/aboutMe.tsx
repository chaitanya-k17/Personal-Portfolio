import { NextPage } from "next";
import Link from "next/link";


import styles from "../../styles/shared/AboutMe.module.css"
import InfoCard from "../infoCard";
import ProgressBar from "../ProgressBar";

const AboutMe: NextPage = () => {

    return (
        <>
            <section id={styles.about}>
                <div className={styles.container}>
                    <div className={styles.roww}>
                        <div className={styles.main_title}>
                            <h3 className={styles.subtitle}>About Me</h3>
                            <h3 className={styles.title}>Biography</h3>
                            <p className={styles.desc}>I am Chaitanya Khiratkar, a Final-year undergraduate student at the Indian Institute of Technology, Kharagpur, one of the top universities in India. I am currently pursuing a major in Chemical Engineering ( B.Tech). During my course of study, I have developed a keen interest in Software Development.</p>
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
                                <InfoCard

                                    head="Kuddle"
                                    span="February'22 - Today"
                                    position="Software Development Intern"
                                    points={[
                                        "Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    ]}
                                />



                                <InfoCard

                                    head="Reasons Technology"
                                    span="August'22 - Today"
                                    position="Software Development Intern"
                                    points={[
                                        "Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    ]}
                                />


                                <InfoCard

                                    head="Fart Magzine"
                                    span="April'21 - June'21"
                                    position="Full Stack Development Intern"
                                    points={[
                                        "Built the web application using React-Redux(Frontend) and Nodejs(Backend)",
                                        "Built a cloud storage and notifications service in the application using Firebase",
                                        "Built the user-to-user and user-to-admin realtime chat system and event based communication with Socket.io",
                                        "Developed and integrated various APIs like tracking, customer support, and location based outlets in Nodejs/Mongodb",
                                        "Built an authentication system integrating Facebook Graph API and Google OAuth in Nodejs/Express"

                                    ]}
                                />



                            </div>

                            <div className={styles.tablet}>
                                <h3 className={styles.info_title} >Education</h3>
                                <InfoCard

                                    head="Indian Institute of Technology , Kharagpur"
                                    span="2018 - 2023"
                                    position="Dual Degree ( M.Tech + B.Tech )"
                                    points={[
                                        "Member of the Illumination 2019 team, achieving 4th rank in the institute, joint highest in the history of MMM Hall",
                                        "Served in Rangamatia village as a member of NSS by organizing event and welfare activities for the underprivileged children"
                                    ]}
                                />
                                <InfoCard

                                    head="Arts, Commerce & Science College, Chandrapur"
                                    span="2016 - 2018"
                                    position="Maharashtra HSC"
                                    points={[
                                        "Acquired 99.9 percentile in IIT-JEE Mains 2018 among 1.14 million candidates who appeared for the Exam",
                                        "Obtained a score of 167 in Maharashtra Common Entrance Test among 4.35 lakh candidates in May 2018"
                                    ]}
                                />
                                <InfoCard

                                    head="Macaroon Students' Academy CBSE School, Wani"
                                    span="2016"
                                    position="CBSE  SSC"
                                    points={[


                                    ]}
                                />



                            </div>

                            <div className={styles.tablet + " " + styles.tablet_skills}>
                                <h3 className={styles.info_title} >Skills</h3>

                                <ProgressBar

                                    head="HTML"
                                    value={85}
                                />
                                <ProgressBar

                                    head="React"
                                    value={65}
                                />
                                <ProgressBar

                                    head="React Native"
                                    value={94}
                                />
                                <ProgressBar

                                    head="JS"
                                    value={76}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe;