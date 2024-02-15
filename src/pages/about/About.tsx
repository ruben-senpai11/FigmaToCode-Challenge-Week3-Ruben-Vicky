import './about.css'
import videoCard from '../../assets/VideoCard.png'
import mobileVideoCard from '../../assets/Video card.png'
import UserCard from '../../components/UserCard'
import user1 from '../../assets/team-1-user-1.jpg'
import user2 from '../../assets/team-1-user-2.jpg'
import user3 from '../../assets/team-1-user-3.jpg'
import partner1 from '../../assets/fa-brands-1.png'
import partner2 from '../../assets/fa-brands-2.png'
import partner3 from '../../assets/fa-brands-3.png'
import partner4 from '../../assets/fa-brands-4.png'
import partner5 from '../../assets/fa-brands-5.png'
import partner6 from '../../assets/fa-brands-6.png'
import mobilePartner1 from '../../assets/fa-brands_hooli.svg'
import mobilePartner2 from '../../assets/fa-brands_lyft.svg'
import mobilePartner3 from '../../assets/fa-brands_pied-piper-hat.svg'
import mobilePartner4 from '../../assets/fa-brands_stripe.svg'
import mobilePartner5 from '../../assets/fa-brands_aws.svg'
import mobilePartner6 from '../../assets/fa-brands_reddit-alien.svg'
import workImage from '../../assets/unsplash_vjMgqUkS8q8.png'
import NumberAnimation from '../../components/NumberAnimation'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function About() {
  return (
    <>
      <div className="container">
        <section className="about-section">
          <div className="about-texts">
            <h5>ABOUT COMPANY</h5>
            <h1>ABOUT US</h1>
            <p className="text-gray">We know how large objects will act,
              but things on a small scale</p>
            <button className="cta">
              Get Quote Now
            </button>
          </div>
        </section>
        <div className="about-image"></div>
      </div>
      <div className="container">
        <section className="problem-trying flex-column">
          <p>Problems trying</p>
          <div className="content d-flex">
            <h2>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h2>
            <h4>Problems trying to resolve the conflict between the two major realms of Classical physics. Newtonian mechanics </h4>
          </div>
        </section>
        <section className="stats">
          <div className="stat">
            <p className="stat-number"><NumberAnimation finalNumber={15}></NumberAnimation>K</p>
            <p className="stat-desctipion">happy customers</p>
          </div>
          <div className="stat">
            <p className="stat-number"><NumberAnimation finalNumber={150}></NumberAnimation>K</p>
            <p className="stat-desctipion">Monthly visitors</p>
          </div>
          <div className="stat">
            <p className="stat-number"><NumberAnimation finalNumber={15}></NumberAnimation></p>
            <p className="stat-desctipion">countries WorldWide</p>
          </div>
          <div className="stat">
            <p className="stat-number"><NumberAnimation finalNumber={100}></NumberAnimation>+</p>
            <p className="stat-desctipion">Top Patners</p>
          </div>
        </section>
        <section className="video d-flex">
          <div className="desktop">
            <LazyLoadImage effect='blur' src={videoCard} alt="Video Card" className='desktop' />
          </div>
          <div className="mobile">
            <LazyLoadImage effect='blur' src={mobileVideoCard} alt="Video Card" className='mobile' />
          </div>
        </section>
        <section className="team">
          <div className="team-intro flex-column gap-20">
            <h2>Meet Our Team</h2>
            <p className='text-gray'>Problems trying to resolve the conflict between <br className='desktop' /> the two major realms of Classical physics: Newtonian mechanics</p>
          </div>
          <div className="user-cards">
            <UserCard userImageSrc={user1} userImageAlt='User 1' />
            <UserCard userImageSrc={user2} userImageAlt='User 2' />
            <UserCard userImageSrc={user3} userImageAlt='User 3' />
          </div>
        </section>
      </div>
      <section className="big-companies">
        <div className="container flex-column">
          <h2>Big Companies Are Here</h2>
          <p className='text-gray'>Problems trying to resolve the conflict between <br className='desktop' /> the two major realms of Classical physics: Newtonian mechanics</p>
          <div className="partenrs d-flex">
            <div className="desktop">
              <LazyLoadImage effect='blur' src={partner1} alt="parter logo" className='desktop' />
            </div>
            <div className="desktop">
              <LazyLoadImage effect='blur' src={partner2} alt="parter logo" className='desktop' />
            </div>
            <div className="desktop">
              <LazyLoadImage effect='blur' src={partner3} alt="parter logo" className='desktop' />
            </div>
            <div className="desktop">
              <LazyLoadImage effect='blur' src={partner4} alt="parter logo" className='desktop' />
            </div>
            <div className="desktop">
              <LazyLoadImage effect='blur' src={partner5} alt="parter logo" className='desktop' />
            </div>
            <div className="desktop">
              <LazyLoadImage effect='blur' src={partner6} alt="parter logo" className='desktop' />
            </div>
            <div className="mobile">
              <LazyLoadImage effect='blur' src={mobilePartner1} alt="parter logo" className='mobile' />
            </div>
            <div className="mobile">
              <LazyLoadImage effect='blur' src={mobilePartner2} alt="parter logo" className='mobile' />
            </div>
            <div className="mobile">
              <LazyLoadImage effect='blur' src={mobilePartner3} alt="parter logo" className='mobile' />
            </div>
            <div className="mobile">
              <LazyLoadImage effect='blur' src={mobilePartner4} alt="parter logo" className='mobile' />
            </div>
            <div className="mobile">
              <LazyLoadImage effect='blur' src={mobilePartner5} alt="parter logo" className='mobile' />
            </div>
            <div className="mobile">
              <LazyLoadImage effect='blur' src={mobilePartner6} alt="parter logo" className='mobile' />
            </div>
          </div>
        </div>
      </section>
      <section className="work-with-us">
        <div className="blue-side flex-column">
          <h5 className="text-white">WORK WITH US</h5>
          <h3 className="text-white">Now Let's grow Yours</h3>
          <p className="text-white">The gradual accumulation of information about atomic and <br className='desktop' />
            small-scale behavior during the first carter of the 20th  </p>
          <button className='cta'>Button</button>
        </div>
        <div className="image-side">
          <LazyLoadImage effect='blur' src={workImage} alt="Conciliant woman" />
        </div>
      </section>
    </>
  )
}

export default About;