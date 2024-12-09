import type { NextPage } from "next";
import Image from "next/image";
import { RESUME_ICONS, RESUME_SUB_TEXT_TYPES } from "../../constants";
import { ResumeSection, ResumeSubText } from "../../interfaces";
import styles from "../../styles/components/InfoCard.module.css";


export const TimeLineItem = (item: ResumeSubText) => {
  const { type, value = '' } = item

  let renderItem

  switch (type) {
    case RESUME_SUB_TEXT_TYPES.LOCATION:
      renderItem = <Image width="20" height="20" src={RESUME_ICONS.LOCATION} alt={'at:'} />
      break
    case RESUME_SUB_TEXT_TYPES.DATE:
      renderItem = <Image width="20" height="20" src={RESUME_ICONS.CALENDAR} alt={'time: '} />
      break
    case RESUME_SUB_TEXT_TYPES.CGPA:
      renderItem = <div className={styles.timeTitle}>CGPA:</div >
      break
    case RESUME_SUB_TEXT_TYPES.LINK:
      return <a className={styles.time}>
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
    {renderItem}&nbsp;
    {value}
  </span>
}

export const InfoCard: NextPage<ResumeSection> = ({ head, subText, position, points }) => {

  return (
    <>
      <div className={styles.item}>
        <div className={styles.item_top}>
          <h5>{head}</h5>
        </div>
        <h3>{position}</h3>
        <div className={styles.timeline}>

          {
            subText?.map(TimeLineItem)
          }
        </div>
        <ul>
          {

            points?.map((point, index) => {
              return (
                <li key={index} dangerouslySetInnerHTML={{ __html: `${point}` }}>
                </li>
              )
            })
          }
        </ul>

      </div>
    </>
  )
}