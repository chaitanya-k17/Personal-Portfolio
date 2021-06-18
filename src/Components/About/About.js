import 'boxicons'
import profile from "../profile.jpeg"


function About() {
  return (
      <>
    <section id="about" className="about section-bg">
      <div class="container">

        <div class="section-title ">
          <h2>About</h2>
        </div>
        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img src={profile} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Web Developer.</h3>
            <p class="fst-italic">
            &nbsp; I am Chaitanya Khiratkar, a third-year undergraduate student at the Indian Institute of Technology, Kharagpur, one of the top universities in India. 
            I am currently pursuing a major in Chemical Engineering ( B.Tech). During my course of study, I have developed a keen interest in Software Development.
            </p>
            <br></br>
            <br></br>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>17 Sept 2000</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91-7057868697</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Kharagpur,West Bengal</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of Technology</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>chaitanyak.iitkgp@gmail.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


      </>
  );
}

export default About;
