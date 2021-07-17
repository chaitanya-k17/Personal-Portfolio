import 'boxicons'
import { useState } from 'react'
import "./Resume.css"

const Data = [
  {
    title: "Work Experience",
    content: [
      {
        title: "Web Development Intern",
        time: "April'21-June'21",
        company: "F.A.R.T. Magazine",
        content: [
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          }
        ]
      }
    ]
  },
  {
    title: "Projects",
    content: [
      {
        title: "Personal Portfolio",
        time: "April'21-June'21",
        company: "",
        content: [
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          }
        ]
      },
      {
        title: "Cubicle",
        time: "April'21-June'21",
        content: [
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials sdsasdasd"
          }
        ]
      },
    ]
  },
  {
    title: "Academics",
    content: [
      {
        title: "B.Tech",
        time: "2018 - 2022",
        company: "Indian Institute of Technology, Kharagpur",
        content: [
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          }
        ]
      },
      {
        title: "HSC-Maharashtra State Board",
        time: "2016 - 2018",
        company:"Arts Commerce and Science College,Chandrapur",
        content: [
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials sdsasdasd"
          }
        ]
      },
      {
        title: "SSC-CBSE",
        time: "2008 - 2016",
        company:"Macaroon Students' Academy CBSE School, Wani",
        content: [
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials"
          },
          {
            para: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials sdsasdasd"
          }
        ]
      },
    ]
  },
]

const CardItem = ({ content }) => {
  return (
    <div className="resume-item">
      <h4>{content.title}</h4>
      <h5> {content.time} </h5>
      <p><em> {content.company} </em></p>
      <ul>
        {
          content.content.map((para, index) => {
            return (
              <>
                <li> {para.para} </li>
              </>
            )
          })
        }
      </ul>
    </div>
  )
}

const Card = ({ element }) => {

  const [select, setselect] = useState(false)

  return (
    <>
          <div className="switch" onClick={() => { setselect(prv => { return !prv }) }}>{select ? <i class='bx bx-exit-fullscreen'></i>:<i class='bx bx-expand'></i> }  </div>
      <div className="content">
        <h3 className={select ? "resume-title col-lg-3 col-12" : "resume-title col-lg-11 col-12"}>{element.title}
        </h3>
        <div className={select ? "col-lg-8 my-auto" : "col-lg-0 d-none "} data-aos="fade-up">
          {
            element.content.map((ele, index) => {
              return (
                <>
                  < CardItem
                    key={index}
                    content={ele}
                  />
                </>
              )
            })
          }
        </div>
      </div>


    </>
  )
}



function Resume() {
  return (
    <>
      <section id="resume" className="resume  bg-white">
        <div className="container">

          <div className="section-title">
            <h2>Resume</h2>
          </div>

          <div className="row  ">
            {
              Data.map((element, index) => {
                return (
                  < Card
                    element={element}
                  />
                )

              })
            }
            {/* <h3 className="resume-title col-lg-2 ">Work Experience</h3>
            <div className="col-lg-10 mb-5" data-aos="fade-up">
              <div className="resume-item">
                <h4>Web Development Intern</h4>
                <h5>April'21-June'21</h5>
                <p><em>F.A.R.T. Magazine</em></p>
                <ul>
                  <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                  <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                  <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                  <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                </ul>
              </div>
            </div>
            <h3 className="resume-title col-lg-2">Projects</h3>
            <div className="col-lg-10 mb-5" data-aos="fade-up" data-aos-delay="100">
              <div className="resume-item">
                <h4>Core-organizing Team Member</h4>
                <h5>2019-2020</h5>
                <p><em>Kshitij 2020 </em></p>
                <p>Part of the 23 Member Core Team of the symposium which is responsible for Publicity and Sponsorship<br></br>
                  Also Web Sub-coordinator managed Kshitij official website and ensured the updates about the website
                </p>
              </div>

              <div className="resume-item">
                <h4>Design Team Member</h4>
                <h5>2019</h5>
                <p><em>MMM Hall of Residence</em></p>
                <p>Part of the Design Team of MMM Hall of Residence, managing a team of 20 freshers for all the design related tasks<br></br>
                  Responsible for the creation of the main design of Illumination adhering to the theme of the competition.<br></br>
                  Responsible for the ideation and delivery of other artworks and ensuring active participation from all the boarders.</p>
              </div>
            </div>
            <h3 className="resume-title col-lg-2">Academics</h3>

            <div className="col-lg-10 mb-5" data-aos="fade-up" data-aos-delay="100">

              <div className="resume-item">
                <h4>B.Tech</h4>
                <h5>2018 - 2022</h5>
                <p><em>Indian Institute of Technology, Kharagpur</em></p>
                <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisqua
                  m iusto autem sit. Ea vero voluptatum qui ut dignissimos deleni
                  ti nerada porti sand markend</p>
              </div>

              <div className="resume-item">
                <h4>HSC-Maharashtra State Board</h4>
                <h5>2016 - 2018</h5>
                <p><em>Arts Commerce and Science College,Chandrapur</em></p>
                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
              </div>
              <div className="resume-item">
                <h4>SSC-CBSE</h4>
                <h5>2008 - 2016</h5>
                <p><em>Macaroon Students' Academy CBSE School, Wani</em></p>
                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
              </div>
            </div>
            <h3 className="resume-title col-lg-2">Activities</h3>

            <div className="col-lg-10 mb-5" data-aos="fade-up" data-aos-delay="100">
              <div className="resume-item">
                <h4>Core-organizing Team Member</h4>
                <h5>August 2019 - March 2020</h5>
                <p><em>Kshitij 2020 </em></p>
                <p>Part of the 23 Member Core Team of the symposium which is responsible for Publicity and Sponsorship
                  Also Web Sub-coordinator managed Kshitij official website and ensured the updates about the website</p>
              </div>
              <div className="resume-item">
                <h4>Kshitij Campus Affliate</h4>
                <h5>September 2018 - August 2019</h5>
                <p><em>Kshitij 2020 </em></p>
                <p>Part of the 23 Member Core Team of the symposium which is responsible for Publicity and Sponsorship<br></br>
                  Also Web Sub-coordinator managed Kshitij official website and ensured the updates about the website
                </p>
              </div>
              <div className="resume-item">
                <h4>Design Team Member</h4>
                <h5>October 2019 - February 2020</h5>
                <p><em>MMM Hall of Residence</em></p>
                <p>Part of the Design Team of MMM Hall of Residence, managing a team of 20 freshers for all the design related tasks
                  Responsible for the creation of the main design of Illumination adhering to the theme of the competition.
                  Responsible for the ideation and delivery of other artworks and ensuring active participation from all the boarders.</p>
              </div>

            </div>
           */}
          </div>

        </div>
      </section>



    </>
  );
}

export default Resume;
