import './about.css'
import ButtonCTA from '../layouts/ButtonCTA';

function About() {
  return (
    <>
      <div className="container">
        <section className="about-section">
          <div className="about-texts">
            <p>ABOUT COMPANY</p>
            <h1>ABOUT US</h1>
            <p className='about-text'>We know how large objects will act,
              but things on a small scale</p>
            <ButtonCTA>Get quote now</ButtonCTA>  
          </div>
        </section>
      </div>
      <div className="about-image"></div>
    </>
  )
}

export default About;