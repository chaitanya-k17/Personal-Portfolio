import { RESUME_SUB_TEXT_TYPES } from "../../constants/general"
import { ResumePrograaming, ResumeSection } from "../../interfaces"

export const PROGRAMMING_SKILLS: ResumePrograaming[] = [
  {
    "type": "Languages",
    "icon": "https://img.icons8.com/?size=100&id=11260&format=png&color=000000",
    "items": [
      { "name": "C++", "score": 90 },
      { "name": "Kotlin", "score": 95 },
      { "name": "Typescript", "score": 80 },
      { "name": "Javascript", "score": 95 },
      { "name": "Java", "score": 75 },
      // { "name": "Swift", "score": 95 }


    ]
  },
  {
    "type": "Cloud Services",
    "icon": "https://img.icons8.com/?size=100&id=2897&format=png&color=000000",
    "items": [
      { "name": "SQL", "score": 70 },
      { "name": "Google Cloud", "score": 85 },
      { "name": "AWS", "score": 80 },
      { "name": "Firebase", "score": 75 }
    ]
  },
  {
    "type": "Tech Stack",
    "icon": "https://img.icons8.com/?size=100&id=100414&format=png&color=000000",
    "items": [
      { "name": "NodeJs", "score": 90 },
      { "name": "React.js", "score": 85 },
      { "name": "Serverless", "score": 80 },
      { "name": "Socket.io", "score": 70 },
      { "name": "Next.js", "score": 75 },
      { "name": "React-Native", "score": 65 },
      { "name": "Express", "score": 80 },
      { "name": "C++ STL", "score": 85 },
      { "name": "GraphQL", "score": 70 },
      { "name": "Sequelize", "score": 60 },
      { "name": "Redux", "score": 95 },
      { "name": "Mobx", "score": 60 },
      { "name": "Redux Toolkit", "score": 90 },
      { "name": "JQuery", "score": 60 }
    ]
  },
  {
    "type": "DBMS/Others",
    "icon": "https://img.icons8.com/?size=25&id=8305&format=png&color=000000",
    "items": [
      { "name": "MySQL", "score": 80 },
      { "name": "MongoDB", "score": 75 },
      { "name": "DynamoDB", "score": 70 },
      { "name": "Firestore", "score": 85 },
      { "name": "Git", "score": 90 },
      { "name": "Android Studio", "score": 65 },
      { "name": "Redis", "score": 60 }
    ]
  }
]

export const EDUCATION: ResumeSection[] = [
  {

    head: "Indian Institute of Technology , Kharagpur",
    subText: [
      {
        type: RESUME_SUB_TEXT_TYPES.DATE,
        value: '2018-2023'
      },
      {
        type: RESUME_SUB_TEXT_TYPES.LOCATION,
        value: 'Kharagpur'
      },
      // {
      //   type: RESUME_SUB_TEXT_TYPES.CGPA,
      //   value: '7.66'
      // }
    ],
    position: "Dual Degree ( M.Tech + B.Tech )",
  },
  // {

  //   head: "Arts, Commerce & Science College, Chandrapur",
  //   subText: [
  //     {
  //       type: RESUME_SUB_TEXT_TYPES.DATE,
  //       value: '2016-2018'
  //     },
  //     {
  //       type: RESUME_SUB_TEXT_TYPES.LOCATION,
  //       value: 'Maharashtra'
  //     },
  //     {
  //       type: RESUME_SUB_TEXT_TYPES.PERCENT,
  //       value: '89.95% '
  //     }
  //   ],
  //   position: "Maharashtra HSC",
  // },
  // {
  //   head: "Macaroon Students' Academy CBSE School, Wani",
  //   subText: [
  //     {
  //       type: RESUME_SUB_TEXT_TYPES.DATE,
  //       value: '2016'
  //     },
  //     {
  //       type: RESUME_SUB_TEXT_TYPES.LOCATION,
  //       value: 'Maharashtra '
  //     },
  //     {
  //       type: RESUME_SUB_TEXT_TYPES.CGPA,
  //       value: '  10    '
  //     }
  //   ],
  //   position: "CBSE SSC",
  // }
]

export const EAA: ResumeSection[] = [
  {
    points: [
      "Oversaw the <strong>Web Development Summer Training </strong> conducted for freshers, with participation of <strong>250+ students</strong>",
      "Awarded Best Volunteer by <strong>National Service Scheme</strong> Camp, IIT Kharagpur for academic session 2019-2020"
    ]
  }
]

export enum RESUME_TYPE {
  ANDROID = 'android',
  REACT_NATIVE = 'reactNative',
  FULL_STACK = 'fullStack'
}

export const RESUME_TYPE_LIST = [
  RESUME_TYPE.ANDROID,
  RESUME_TYPE.REACT_NATIVE,
  RESUME_TYPE.FULL_STACK,
];