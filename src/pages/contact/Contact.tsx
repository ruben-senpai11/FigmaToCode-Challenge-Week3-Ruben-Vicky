import './contact.css'
import facebook from '../../assets/logos_facebook (1).png'
import instagram from '../../assets/ant-design_instagram-outlined.png'
import twitter from '../../assets/logos_twitter.png'
import linkedin from '../../assets/logos_linkedin-icon.png'
import NumberAnimation from '../../components/NumberAnimation'
import ContactCard from '../../components/ContactCard'
import contactImg1 from '../../assets/icn settings .icn-xl.svg'
import contactImg2 from '../../assets/icn settings .icn-xl (1).svg'
import contactImg3 from '../../assets/icn settings .icn-xl (2).svg'
import arrow2 from '../../assets/Arrow 2.svg'

function Contact() {
  return (
    <>
      <div className="container">
        <section className="about-section contact">
          <div className="about-texts">
            <h5>CONTACT US</h5>
            <h1>Get in touch <br className="desktop" /> today!</h1>
            <p className="text-gray">We know how large objects will act,
              but things on a small scale</p>
            <div className="contacts flex-column gap-20">
              <p>Phone : +451 215 <NumberAnimation finalNumber={215} /></p>
              <p>Fax : +451 215 <NumberAnimation finalNumber={215} /></p>
            </div>
            <div className="freeT-media d-flex gap-20">
              <a href="#"><img src={twitter} alt="Twitter logo" /></a>
              <a href="#"><img src={facebook} alt="Facebook logo" /></a>
              <a href="#"><img src={instagram} alt="Instagram logo" /></a>
              <a href="#"><img src={linkedin} alt="Linkedin logo" /></a>
            </div>
          </div>
        </section>
      </div>
      <div className="about-image contact"></div>
      <div className="container desk-container">
        <section className="location flex-column">
          <h5>Visit our office</h5>
          <h2>We help small businesses <br className="desktop" /> with big ideas</h2>
          <div className="contact-cards">
            <ContactCard imageSrc={contactImg1} imageAlt='Phone image' middle={false}/>
            <ContactCard imageSrc={contactImg2} imageAlt='Location image' middle={true} />
            <ContactCard imageSrc={contactImg3} imageAlt='Mail image' middle={false} />
          </div>
        </section >
        <section className="talk">
          <div className="talk-arrow">
            <img src={arrow2} alt="pointing down arrow" />
          </div>
          <h5>WE Can't WAIT TO MEET YOU</h5>
          <h2>Let's Talk</h2>
          <button className="cta">Try it for free now</button>
        </section>
      </div >
    </>
  )
}

export default Contact;