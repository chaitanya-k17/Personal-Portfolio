import { NextPage } from "next";
import Link from "next/link";


import styles from "../../styles/shared/AboutMe.module.css"
import InfoCard from "../infoCard";
import ProgressBar from "../ProgressBar";


const languageSkillData = {
    ReactNative:80,
    Cpp: 90,
    Java: 90,
    Javascript: 90,
    HTML: 95,
    CSS: 95,
    Typescript: 70,
    SQL:90
}



const AboutMe: NextPage = () => {

    return (
        <section id="about" >
            <div className={styles.about}>
                <div className={styles.container}>
                    <div className={styles.roww}>
                        <div className={styles.main_title}>
                            <h3 className={styles.subtitle}>About Me</h3>
                            <h3 className={styles.title}>Biography</h3>
                            <p className={styles.desc}>I am Chaitanya Khiratkar,
                                Software Developer, the Indian Institute of Technology Alumini,
                                Kharagpur, one of the top universities in India.
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
                                <InfoCard

                                    head="Kuddle"
                                    span="February'22 - Today"
                                    position="Software Development Intern"
                                    points={[
                                        "Developed the cross-platform childcare application using <strong>React Native</strong> and <strong>Redux</strong> for central state management",
                                        "Revamped and built a horizontally scalable and maintainable server architecture using <strong>Elastic Beanstalk</strong> and CI / CD pipeline using CircleCI and AWS CodeDeploy decreasing deploy time by 80 % and server downtime by 90 % ",
                                        "Built the backend using GraphQL, Sequelize, and Cloud services like AWS SES, S3, Beanstalk, and GCP Firestore",
                                        "Optimised website performance using Dynamic Import, Next/Image, Pagination and Script Optimization  from <strong>40% to 85% on Lighthouse</strong>",
                                        "Built FE & BE for the internal <strong>CRM Portal</strong>, building services like order and product management, user management customer support, sales dashboard, and engagement notification with <strong>RBAC</strong> for all company employees"
                                    ]}
                                />



                                <InfoCard

                                    head="Reasons Technology"
                                    span="August'22 - Today"
                                    position="Software Development Intern"
                                    points={[
                                        "Developed an Android app for business-use using React Native being actively used in multiple African Countries",
                                        "Developed various <strong>Android Native Modules</strong> to build POS features like card reader, barcode scanner and biometrics",
                                        "Integrated and patched various APIs like payment, tracking, service renewal, customer support, etc using AWS"
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




                                <InfoCard

                                    head="Project"
                                    span="January 2021"
                                    position="Personal Portfolio and Blogging"
                                    points={[
                                        "Built a Portfolio and Blogging website using Next.js (Typescript) and deployed it with CircleCI CI/CD Piepeline",
                                        "Used Elastic Beanstalk to deploy it while provisioning load balancers, security groups, VPC and compute resources",
                                        "Built Serverless backend using AWS Lambda, API Gateway for blog creation and fetching and storing in DynamoDB"
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

                                {
                                    (Object.keys(languageSkillData) as Array<keyof typeof languageSkillData>).map((value, index) => {
                                        return (
                                            <ProgressBar
                                                key={index}
                                                head={value}
                                                value={languageSkillData[value]}
                                            />
                                        )
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

export default AboutMe;