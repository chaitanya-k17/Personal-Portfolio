import type { NextPage } from 'next';
import Image from 'next/image';
import {
  ANDROID_RESUME_DATA,
  CalendarIcon,
  FULL_STACK_RESUME_DATA,
  LocationIcon,
  REACT_NATIVE_RESUME_DATA,
} from '../../components';
import { RESUME_TYPE } from '../../components/resume/genral';
import { RESUME_SUB_TEXT_TYPES } from '../../constants';
import { ResumePrograaming, ResumeSection, ResumeSubText } from '../../interfaces';
import styles from '../../styles/Resume.module.css';

export async function getServerSideProps(context: { query: { type: string } }) {
  const { type = '' } = context.query;
  let data: {
    [key: string]: ResumePrograaming[] | ResumeSection[]
  } = {};

  switch (type) {
    case RESUME_TYPE.ANDROID:
      data = ANDROID_RESUME_DATA;
      break;
    case RESUME_TYPE.REACT_NATIVE:
      data = REACT_NATIVE_RESUME_DATA;
      break;
    default:
      data = FULL_STACK_RESUME_DATA;
      break;
  }

  return {
    props: {
      data, // Pass data to the page
    },
  };
}

const TimeLineItem = (item: ResumeSubText, idx: number) => {
  const { type, value = '' } = item;
  let renderItem;

  switch (type) {
    case RESUME_SUB_TEXT_TYPES.LOCATION:
      renderItem = (
        <>
          <LocationIcon width="13px" height="13px" /> &nbsp;
        </>
      );
      break;
    case RESUME_SUB_TEXT_TYPES.DATE:
      renderItem = (
        <>
          <CalendarIcon width="13px" height="13px" /> &nbsp;
        </>
      );
      break;
    case RESUME_SUB_TEXT_TYPES.CGPA:
      renderItem = <div className={styles.timeTitle}>CGPA:</div>;
      break;
    case RESUME_SUB_TEXT_TYPES.LINK:
      return (
        <a className={styles.time} href={value} key={idx}>
          <i>{value}</i>
        </a>
      );
    case RESUME_SUB_TEXT_TYPES.PERCENT:
      renderItem = <div className={styles.timeTitle}>%:</div>;
      break;
    default:
      break;
  }

  return (
    <span className={styles.time} key={idx}>
      {/* {renderItem} */}
      {value} &nbsp;
    </span>
  );
};

const ExperienceCard = (
  { head, subText, position, points }: ResumeSection,
  index: number
) => {
  return (
    <div className={styles.expMain} key={index}>
      <div className={styles.random}>
        <div>
          <div className={styles.expHeading}>{position}</div>
          <div className={styles.expSubHeading}>{head}</div>
        </div>
        <div className={styles.timeline}>{subText?.map(TimeLineItem)}</div>
      </div>
      <ul className={styles.expView}>
        {points?.map((point, idx) => (
          <li
            className={styles.point}
            key={idx}
            dangerouslySetInnerHTML={{ __html: point }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

const TechCard = (
  { type, items, icon = '' }: ResumePrograaming,
  index: number
) => {
  return (
    <div className={styles.techHead} key={index}>
      <div className={styles.techLeft}>
        <div className={styles.techHeading}>{type} :
          <span className={styles.stacks}>
            {items.map(({ name }) => name).join(', ')}
          </span>
        </div>
      </div>
    </div>
  );
};

const Section = ({
  title = '',
  data = [],
  Component = ExperienceCard,
  sectionStyle = styles.section,
}: {

  title: any,
  data: any[],
  Component?: any
  sectionStyle?: any
}) => {
  return (
    <>
      <div className={styles.sectionHead}>{title}</div>
      <div className={sectionStyle}>{data?.map(Component)}</div>
    </>
  );
};

type DATA = {
  [key: string]: ResumePrograaming[] | ResumeSection[];
};

const Resume: NextPage<{ data: DATA }> = ({ data }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.mainDiv}>
        <div className={styles.topDiv}>
          <div className={styles.toprightDiv}>
            <div className={styles.name}>Chaitanya Khiratkar</div>
            <div className={styles.sublabel}>Software Developer | IIT Kharagpur</div>
          </div>
          <div className={styles.topLeftDiv}>
            <span className={styles.topBar}>
              <Image
                width="11"
                height="11"
                src="https://img.icons8.com/?size=100&id=85059&format=png&color=000000"
                alt="mobile: "
              />
              &nbsp;+91-7057868697
            </span>
            <span className={styles.topBar}>
              <Image
                width="11"
                height="11"
                src="https://img.icons8.com/?size=100&id=86875&format=png&color=000000"
                alt="email: "
              />
              &nbsp;chaitanyak.iitkgp@gmail.com
            </span>
            <span className={styles.topBar}>
              <Image
                width="11"
                height="11"
                src="https://img.icons8.com/?size=100&id=85799&format=png&color=000000&rotation=90"
                alt="link: "
              />
              &nbsp;https://www.chaitanyak.info/
            </span>
            <span className={styles.topBar}>
              <Image
                width="11"
                height="11"
                src="https://img.icons8.com/?size=100&id=85799&format=png&color=000000&rotation=90"
                alt="link: "
              />
              &nbsp;https://www.linkedin.com/in/chaitanyak17/
            </span>
            <span className={styles.topBar}>
              <Image
                width="11"
                height="11"
                src="https://img.icons8.com/?size=100&id=85799&format=png&color=000000&rotation=90"
                alt="link: "
              />
              &nbsp;https://leetcode.com/u/chaitanyakhiratkar17/
            </span>

          </div>
        </div>



        <div className={styles.mainContent}>
          {Object.entries(data).map(([title, values]) => {
            if (title === 'PROGRAMMING_SKILLS') {
              return (
                <Section
                  key={title}
                  title={title}
                  data={values}
                  Component={TechCard}
                  sectionStyle={styles.techSection}
                />
              );
            }
            return <Section key={title} title={title} data={values} />;
          })}
        </div>


      </div>
    </div>
  );
};

export default Resume;