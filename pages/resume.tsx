import type { NextPage } from 'next'
import Image from 'next/image'
import { CalendarIcon, LocationIcon } from '../components'
import { RESUME_DATA, EAA, EDUCATION, EXPERIENCE, POR, PROGRAMMING_SKILS, PROJECTS, RESUME_SUB_TEXT_TYPES } from '../constants'
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
        <div className={styles.random}>
            <div>
                <div className={styles.expHeading}>{position}</div>
                <div className={styles.expSubHeading}>{head}</div>
            </div>
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
    return  <div className={styles.techHead}>
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
 }

const Section = (section: string) => {

    let component = null
    let sectionStyle = null

    switch (section) {
        case 'PROGRAMMING_SKILS':
            component = TechCard
            sectionStyle = styles.techSection
            break
        default:
            component = ExperienceCard
            sectionStyle = styles.section

    }

    return <>
        <div className={styles.sectionHead}>
            {section}
        </div>
        <div className={sectionStyle}>
            {
                RESUME_DATA[section]?.map(component)
            }
        </div>
    </>
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
                {
                    Object.keys(RESUME_DATA).map(Section)
                }
            </div>
        </div>
    </div>
}

export default Resume
