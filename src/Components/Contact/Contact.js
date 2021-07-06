import 'boxicons'
import './Contact.css';

function Contact() {
  return (
    <>

    <section id="contact" class="contact bg-white">
      <div class="container">

        <div class="section-title">
          <h2>Contact</h2>
        </div>

        <div class="row" data-aos="fade-in">

          <div class="col-lg-8 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form  class="contact-email-form">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" required/>
                </div>
              </div>
              <div class="form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="10" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-start"><button type="submit">Send Message</button></div>
            </form>
          </div>

          <div class="col-lg-4 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Yavatmal ,Maharashtra 445304</p>
              </div>

              <div class="email">
              <a href="mail:chaitanyak.iitkgp@gmail.com"><i class="bi bi-envelope"></i></a>
                <h4>Email:</h4>
                <p>chaitanyak.iitkgp@gmail.com</p>
              </div>
              <div class="phone">
                <a href="tel:+917057868697"><i class='bx bxs-phone-call bx-tada bx-rotate-180' ></i></a>
                <h4>Call:</h4>
                <p>+91 -7057868697</p>
              </div>

               {/* <iframe title="IIT KGP" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14610.336369830386!2d87.30113982949591!3d22.31461641505658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d44031d91072d%3A0x750e832f90176385!2sIIT%20Kharagpur%2C%20Kharagpur%2C%20West%20Bengal!5e1!3m2!1sen!2sin!4v1620914148258!5m2!1sen!2sin" frameborder="0" style={{border:0, width: '100%', height: '290px'}}  allowfullscreen></iframe> */}
           </div>

          </div>

        </div>

      </div>
    </section>
    </>
  );
}

export default Contact;
