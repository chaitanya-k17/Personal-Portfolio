import { ResumePrograaming, ResumeSection } from "../interfaces"
import { RESUME_SUB_TEXT_TYPES } from "./general"

export const LANGUAGE_SKILLS = {
    ReactNative: 80,
    Cpp: 90,
    Java: 90,
    Javascript: 90,
    HTML: 95,
    CSS: 95,
    Typescript: 70,
    SQL: 90
}
export const PROGRAMMING_SKILS:ResumePrograaming[] = [
    {
        "type": "Languages",
        "icon": "https://img.icons8.com/?size=100&id=11260&format=png&color=1E90FF",
        "items": [
            { "name": "C", "score": 85 },
            { "name": "C++", "score": 90 },
            { "name": "Java", "score": 75 },
            { "name": "Typescript", "score": 80 },
            { "name": "Javascript", "score": 95 }
        ]
    },
    {
        "type": "Cloud Services",
        "icon": "https://img.icons8.com/?size=100&id=2897&format=png&color=1E90FF",
        "items": [
            { "name": "SQL", "score": 70 },
            { "name": "Google Cloud", "score": 85 },
            { "name": "AWS", "score": 80 },
            { "name": "Firebase", "score": 75 }
        ]
    },
    {
        "type": "Technologies",
        "icon": "https://img.icons8.com/?size=100&id=100414&format=png&color=1E90FF",
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
        "icon": "https://img.icons8.com/?size=100&id=8305&format=png&color=1E90FF",
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
export const EXPERIENCE: ResumeSection[] = [{
    head: "Edfora",
    subText: [
        {
            type: RESUME_SUB_TEXT_TYPES.DATE,
            value: 'July\'23 - Present'
        },
        {
            type: RESUME_SUB_TEXT_TYPES.LOCATION,
            value: 'New Delhi'
        }
    ],
    position: "Full Stack Developer - Full Time",
    points: [
        "Developed and maintained modules using <strong>React Native with Redux</strong> for application features, posts listing, modules for liking, sharing, & commenting, with <strong> smooth animations with gesture handlers</strong>",
        "Spearheaded the development of critical component, streamlining integration across multiple modules <strong>reducing integration time (75%)</strong> and <strong>enhanced performance (15%)</strong>, boosting team efficiency",
        "Maintained and Improvised React Native modules with MobX for efficient state management, resulting in a <strong>30% increase in user interaction</strong> across multiple platforms.",
        "Collaborated with team to <strong>optimize performance (70%)</strong> and <strong>elevate code quality standards</strong>, implementing efficient coding practices",
    ]
},
{
    head: "Kuddle",
    subText: [
        {
            type: RESUME_SUB_TEXT_TYPES.DATE,
            value: 'February\'22 - July\'23'
        },
        {
            type: RESUME_SUB_TEXT_TYPES.LOCATION,
            value: 'Hyderabad'
        }
    ],
    position: "Software Development Intern",
    points: [
        "Revamped a <strong>horizontally scalable</strong> and maintainable server using <strong>Elastic-beanstalk and CI/CD pipeline</strong> using CircleCI and AWS Code Deploy <strong>decreasing deployment & server downtime by 30%</strong>",
        "Developed the cross-platform application using <strong>React Native</strong> and <strong>&nbsp; Redux / Redux Toolkit</strong> for central state management and API Layer.",
        "Engineered backend with <strong>GraphQL, Sequelize, & Cloud services</strong>",
        "<strong>Enhanced website performance by 100%</strong> through strategic implementation of Dynamic Import for efficient resource loading, Next/Image , and Pagination to streamline content navigation.",
        "Built FE & BE for the internal <strong>CRM Portal</strong>, building services like order, product and user management, customer support, sales dashboard, and engagement notification with <strong>RBAC for operations</strong>",
        // "Worked on <strong>Event-based communication system</strong>, user-to-user real-time chat and event based communication with <strong>Socket.io</strong>",
    ],
    // {

//     head: "Fart Magzine",
//     subText: [
//         {
//             type: RESUME_SUB_TEXT_TYPES.DATE,
//             value: 'April\'21 - June\'21'
//         },
//         {
//             type: RESUME_SUB_TEXT_TYPES.LOCATION,
//             value: 'New Delhi'
//         }
//     ],
//     position: "Full Stack Development Intern",
//     points: [
//         // "Established <strong>push notifications with Firebase</strong>, increasing <strong>user re-engagement by 30%</strong>",
//         // "Integrated Cloud storage for storage and retrieval using <strong>AWS S3</strong>",
//     ]
// }
},
{

    head: "Reasons Technology",
    subText: [
        {
            type: RESUME_SUB_TEXT_TYPES.DATE,
            value: 'August\'22 - September\'22'
        },
        {
            type: RESUME_SUB_TEXT_TYPES.LOCATION,
            value: 'Hyderabad'
        }
    ],
    position: "Software Development Intern",
    points: [
        "Created an <strong>Android app</strong> for business-use with <strong>React Native</strong> which is actively used in African Countries",
        "Integrated <strong>Android Native Modules</strong> to build POS features like card reader, bar-code scan, post tracking and receipt generation",
        "<strong>Integrated and patched various APIs</strong> like payment, tracking, customer support, etc using AWS and implemented an <strong>Authentication system</strong> integrating Graph API and Google OAuth along with <strong>Express/MongoDB</strong>"
    ]
}
]
export const POR: ResumeSection[] = [
    {
        head: "Kshitij, IIT Kharagpur",
        subText: [
            {
                type: RESUME_SUB_TEXT_TYPES.DATE,
                value: 'August 2019 - July 2020'
            },
            {
                type: RESUME_SUB_TEXT_TYPES.LOCATION,
                value: 'IIT Kharagpur'
            }
        ],
        position: "Core Team Member",
        points: [
            "Managed <strong>team of 42 Campus Affiliates</strong> & 12 Campus Ambassadors responsible for the publicity of Kshitij 2020",
            "<strong>Coordinated with a team of 7 developers</strong> in the creation of the Kshitij, IIT Kharagpur website and Internship Portal",
        ]
    }
]
export const PROJECTS: ResumeSection[] = [
    {
        subText: [
            {
                type:RESUME_SUB_TEXT_TYPES.LINK,
                value:'https://www.chaitanyak.info/'
            }
        ],
        position: "Personal Portfolio",
        points: [
            "Built a Portfolio website using <strong>Next.js (Typescript)</strong> and deployed it with AWS ",
            "Used <strong>Elastic Beanstalk</strong> to deploy it while provisioning load balancers, security groups, and VPC.",
            "Constructed <strong>Serverless backend</strong> using AWS Lambda for CRUD operations in <strong>DynamoDB.</strong>"
        ]
    }
]
export const EDUCATION: ResumeSection[] = [
    {

        head: "Indian Institute of Technology , Kharagpur",
        subText: [
            {
                type:RESUME_SUB_TEXT_TYPES.DATE,
                value:'2018-2023'
            },
            {
                type:RESUME_SUB_TEXT_TYPES.LOCATION,
                value:'Kharagpur'
            },
            {
                type:RESUME_SUB_TEXT_TYPES.CGPA,
                value:'7.66'
            }
        ],
        position: "Dual Degree ( M.Tech + B.Tech ) Chemical Engineering.",
    },
    {

        head: "Arts, Commerce & Science College, Chandrapur",
        subText: [
            {
                type:RESUME_SUB_TEXT_TYPES.DATE,
                value:'2016-2018'
            },
            {
                type:RESUME_SUB_TEXT_TYPES.LOCATION,
                value:'Maharashtra'
            },
            {
                type:RESUME_SUB_TEXT_TYPES.CGPA,
                value:'89.95%'
            }
        ],
        position: "Maharashtra HSC",
    },
    {
        head: "Macaroon Students' Academy CBSE School, Wani",
        subText: [
            {
                type:RESUME_SUB_TEXT_TYPES.DATE,
                value:'2016'
            },
            {
                type:RESUME_SUB_TEXT_TYPES.LOCATION,
                value:'Maharashtra '
            },
            {
                type:RESUME_SUB_TEXT_TYPES.PERCENT,
                value:'10'
            }
        ],       
        position: "CBSE SSC",
    }
]
export const EAA: ResumeSection[] = [
    {
        points: [
            "Oversaw the <strong>Web Development Summer Training </strong> conducted for freshers, with participation of <strong>250+ students</strong>",
            "Awarded Best Volunteer by <strong>National Service Scheme</strong> Camp, IIT Kharagpur for academic session 2019-2020"
        ]
    }
]
