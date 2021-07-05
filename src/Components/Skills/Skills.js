import 'boxicons'
import ProgressBar from 'react-animated-progress-bar';
import "./Skills.css"


function Skills() {


  return (
    <>

      <section id="skills" class="skills">
        <div class="container">

          <div class="section-title">
            <h2>Skills</h2>
            <p> 
               I am familiar with C++/C, Python, Javascript, and various Back-end development frameworks such as Node.js, Express Js. In addition to this, I am well versed in Database Management Systems such as MongoDB. 
              In addition to this, to further develop my abilities, I familiar with Data Structures and algorithm concepts such as Dynamic Programming, Graphs, Binary Trees, etc. 
              I have also gained experience in version control platforms GitHub and Open-Source Programming</p>
          </div>

          <div class="row skills-content">

            <div class="col-md-6" data-aos="fade-up">

              <div class="progress">
                <span class="skill">HTML <i class="val">90%</i></span>
                    <ProgressBar
                      height="10px"
                      rect
                      fontColor="#eaf0fb"
                      percentage="90"
                      trackPathColor="transparent"
                      bgColor="black"
                      defColor={{
                        fair: '#149ddd',
                        good: '#149ddd',
                        excellent: '#149ddd',
                        poor: '#149ddd',
                      }}
                      trackBorderColor="grey"
                    />
              </div>

              <div class="progress">
                <span class="skill">CSS <i class="val">90%</i></span>
                <ProgressBar
                      height="10px"
                      rect
                      fontColor="#eaf0fb"
                      percentage="90"
                      trackPathColor="transparent"
                      bgColor="black"
                      defColor={{
                        fair: '#149ddd',
                        good: '#149ddd',
                        excellent: '#149ddd',
                        poor: '#149ddd',
                      }}
                      trackBorderColor="grey"
                    />
              </div>

              <div class="progress">
                <span class="skill">JavaScript <i class="val">75%</i></span>
                <ProgressBar
                      height="10px"
                      rect
                      fontColor="#eaf0fb"
                      percentage="75"
                      trackPathColor="transparent"
                      bgColor="black"
                      defColor={{
                        fair: '#149ddd',
                        good: '#149ddd',
                        excellent: '#149ddd',
                        poor: '#149ddd',
                      }}
                      trackBorderColor="grey"
                    />
              </div>

            </div>

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">

              <div class="progress">
                <span class="skill">Node..js <i class="val">80%</i></span>
                <ProgressBar
                      height="10px"
                      rect
                      fontColor="#eaf0fb"
                      percentage="80"
                      trackPathColor="transparent"
                      bgColor="black"
                      defColor={{
                        fair: '#149ddd',
                        good: '#149ddd',
                        excellent: '#149ddd',
                        poor: '#149ddd',
                      }}
                      trackBorderColor="grey"
                    />
              </div>

              <div class="progress">
                <span class="skill">React.js <i class="val">90%</i></span>
                <ProgressBar
                      height="10px"
                      rect
                      fontColor="#eaf0fb"
                      percentage="90"
                      trackPathColor="transparent"
                      bgColor="black"
                      defColor={{
                        fair: '#149ddd',
                        good: '#149ddd',
                        excellent: '#149ddd',
                        poor: '#149ddd',
                      }}
                      trackBorderColor="grey"
                    />
              </div>

              <div class="progress">
                <span class="skill">DBMS <i class="val">70%</i></span>
                <ProgressBar
                      height="10px"
                      rect
                      fontColor="#eaf0fb"
                      percentage="70"
                      trackPathColor="transparent"
                      bgColor="black"
                      defColor={{
                        fair: '#149ddd',
                        good: '#149ddd',
                        excellent: '#149ddd',
                        poor: '#149ddd',
                      }}
                      trackBorderColor="grey"
                    />
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Skills;
