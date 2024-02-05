import './about.css'
import ButtonCTA from '../layouts/ButtonCTA';

function About() {
  return (
    <>
      <div className="container">
        <section className="about-section">
          <div className="about-texts">
            <h5>ABOUT COMPANY</h5>
            <h1>ABOUT US</h1>
            <p>We know how large objects will act,
              but things on a small scale</p>
              <button className="cta">
                Get Quote Now
              </button>
          </div>
        </section>
      </div>
      <div className="about-image"></div>
    </>
  )
}

export default About;