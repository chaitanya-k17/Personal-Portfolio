import type { NextPage } from 'next'
import Image from 'next/image'
import { CalendarIcon, LocationIcon } from '../components'
import { EAA, EDUCATION, EXPERIENCE, POR, PROGRAMMING_SKILS, PROJECTS, RESUME_SUB_TEXT_TYPES } from '../constants'
import { ResumePrograaming, ResumeSection, ResumeSubText } from '../interfaces'
import styles from "../styles/Resume.module.css"

const TimeLineItem = (item: ResumeSubText) => {
    const { type, value = '' } = item

    let renderItem

    switch (type) {
        case RESUME_SUB_TEXT_TYPES.LOCATION:
            renderItem = <>
                <LocationIcon width={"13px"} height={"13px"} />
                &nbsp;
            </>
            break
        case RESUME_SUB_TEXT_TYPES.DATE:
            renderItem = <>
                <CalendarIcon width={"13px"} height={"13px"} />
                &nbsp;</>
            break
        case RESUME_SUB_TEXT_TYPES.CGPA:
            renderItem = <div className={styles.timeTitle}>CGPA:</div >
            break
        case RESUME_SUB_TEXT_TYPES.LINK:
            return <a className={styles.time} href={value}>
                <i>{value}</i>
            </a>
            break
        case RESUME_SUB_TEXT_TYPES.PERCENT:
            renderItem = <div className={styles.timeTitle}>%:</div >
            break
        default:
            break
    }

    return <span className={styles.time}>
        {renderItem}
        {value}&nbsp;
    </span>
}

const ExperienceCard = ({ head, subText, position, points }: ResumeSection, index: number) => {
    return <div className={styles.expMain}>
        <div className={styles.expHeading}>{position}</div>
        <div>
            <div className={styles.expSubHeading}>{head}</div>
            <div className={styles.timeline}>
                {
                    subText?.map(TimeLineItem)
                }

            </div>
        </div>
        <ul className={styles.expView}>
            {
                points?.map((point: string, index: number) => {
                    return <li className={styles.point} key={index} dangerouslySetInnerHTML={{ __html: `${point}` }}>
                    </li>
                })
            }
        </ul>
    </div>
}

const TechCard = ({ type, items, icon }: ResumePrograaming, index: number) => {
    return <div className={styles.expMain}>
        <div className={styles.techHead}>
            <img width="23" height="23" src={icon} alt={icon} />
            <div className={styles.techLeft}>
                <div className={styles.techHeading}>{type}</div>
                <div className={styles.stacks}>
                    {
                        items?.map(({ name }) => {
                            return name
                        }).join(', ')
                    }
                </div>
            </div>
        </div>
    </div>
}

const Resume: NextPage = () => {


    return <div className={styles.pageContainer}>
        <div className={styles.mainDiv}>
            <div className={styles.name}>Chaitanya Khiratkar</div>
            <div className={styles.sublabel}>Software Developer | IIT Kharagpur</div>
            <div className={styles.topDiv}>
                <span className={styles.topBar}>
                    <Image className={styles.chaitanya} width="11" height="11" src="https://img.icons8.com/?size=100&id=85059&format=png&color=1E90FF" alt={'mobile: '} />
                    &nbsp;+91-7057868697
                </span>
                <span className={styles.topBar}>
                    <Image width="11" height="11" src="https://img.icons8.com/?size=100&id=86875&format=png&color=1E90FF" alt={'email: '} />
                    &nbsp;chaitanyak.iitkgp@gmail.com
                </span>
                <span className={styles.topBar}>
                    <Image width="11" className='img' height="11" src="https://img.icons8.com/?size=100&id=85799&format=png&color=1E90FF&rotation=90" alt={'link: '} />
                    &nbsp;https://www.chaitanyak.info/
                </span>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.left}>
                    {/* Experience */}
                    <div className={styles.sectionHead}>
                        EXPERIENCE
                    </div>
                    <div className={styles.section}>
                        {
                            EXPERIENCE.map(ExperienceCard)
                        }
                    </div>
                    {/* POR */}
                    <div className={styles.sectionHead}>
                        POSITION OF RESPONSIBILITY
                    </div>
                    <div className={styles.section}>

                        {
                            POR.map(ExperienceCard)
                        }
                    </div>
                </div>
                <div className={styles.right}>
                    {/* Education */}
                    <div className={styles.sectionHead}>
                        EDUCATION
                    </div>
                    <div className={styles.section}>

                        {
                            EDUCATION.map(ExperienceCard)
                        }
                    </div>
                    {/* Projects */}
                    <div className={styles.sectionHead}>
                        PROJECTS
                    </div>
                    <div className={styles.section}>

                        {
                            PROJECTS.map(ExperienceCard)
                        }
                    </div>
                    {/* Programming stack */}
                    <div className={styles.sectionHead}>
                        PROGRAMMING SKILLS
                    </div>
                    <div className={styles.section}>

                        {
                            PROGRAMMING_SKILS.map(TechCard)
                        }
                    </div>
                    {/* ECA */}
                    <div className={styles.sectionHead}>
                        Extra Activities
                    </div>
                    <div className={styles.section}>
                        {
                            EAA.map(ExperienceCard)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Resume
