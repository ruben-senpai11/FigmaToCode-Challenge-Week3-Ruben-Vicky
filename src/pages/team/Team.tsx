import './team.css'
import rightArrow from '../../assets/icn arrow-right icn-xs.svg'
import leftImg from '../../assets/left-img.png'
import fourImg1 from '../../assets/four1.png'
import fourImg2 from '../../assets/four2.png'
import fourImg3 from '../../assets/four3.png'
import fourImg4 from '../../assets/four4.png'
import mobileLeftImg from '../../assets/up1.png'
import mobileFourImg1 from '../../assets/f1.png'
import mobileFourImg2 from '../../assets/f2.png'
import mobileFourImg3 from '../../assets/f3.png'
import mobileFourImg4 from '../../assets/f4.png'
import UserCard from '../../components/UserCard'
import user1 from '../../assets/media.png'
import user2 from '../../assets/media (1).png'
import user3 from '../../assets/media (2).png'
import user4 from '../../assets/team-1-user-3.jpg'
import user5 from '../../assets/media (3).png'
import user6 from '../../assets/team-1-user-1.jpg'
import user7 from '../../assets/team-1-user-2.jpg'
import user8 from '../../assets/media (4).png'
import user9 from '../../assets/team-1-user-3 (1).jpg'
import facebook from '../../assets/logos_facebook.png'
import instagram from '../../assets/ant-design_instagram-outlined.svg'
import twitter from '../../assets/logos_twitter.svg'
import linkedin from '../../assets/logos_linkedin-icon.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Team() {
  return (
    <>
      <section className="what-we-do">
        <div className="container">
          <h5 className='text-gray'>WHAT WE DO</h5>
          <h1>Innovation tailored for you</h1>
          <p className="breadcum"><a href='#' className='text-bold'>Home</a> <img src={rightArrow} alt=">" /> <span className="text-gray">Team</span></p>
        </div>
        <div className="wwd-images">
          <div className="left-img">
            <LazyLoadImage effect='blur' src={leftImg} alt="Dress Image" className='desktop' />
            <LazyLoadImage effect='blur' src={mobileLeftImg} alt="Dress Image" className='mobile' />
          </div>
          <div className="four-images">
            <div className="split-2">
              <div className="desktop">
                <LazyLoadImage effect='blur' src={fourImg1} alt="Dress Image" className='desktop' />
              </div>
              <div className="desktop">
                <LazyLoadImage effect='blur' src={fourImg2} alt="Dress Image" className='desktop' />
              </div>
              <div className="mobile">
                <LazyLoadImage effect='blur' src={mobileFourImg1} alt="Dress Image" className='mobile' />
              </div>
              <div className="mobile">
                <LazyLoadImage effect='blur' src={mobileFourImg2} alt="Dress Image" className='mobile' />
              </div>
            </div>
            <div className="split-2">
              <div className="desktop">
                <LazyLoadImage effect='blur' src={fourImg3} alt="Dress Image" className='desktop' />
              </div>
              <div className="desktop">
                <LazyLoadImage effect='blur' src={fourImg4} alt="Dress Image" className='desktop' />
              </div>
              <div className="mobile">
                <LazyLoadImage effect='blur' src={mobileFourImg3} alt="Dress Image" className='mobile' />
              </div>
              <div className="mobile">
                <LazyLoadImage effect='blur' src={mobileFourImg4} alt="Dress Image" className='mobile' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="team">
          <div className="team-intro flex-column gap-20">
            <h2>Meet Our Team</h2>
          </div>
          <div className="user-cards">
            <UserCard userImageSrc={user1} userImageAlt='Team user 1 picture' />
            <UserCard userImageSrc={user2} userImageAlt='Team user 2 picture' />
            <UserCard userImageSrc={user3} userImageAlt='Team user 3 picture' />
          </div>
          <div className="user-cards">
            <UserCard userImageSrc={user4} userImageAlt='Team user 4 picture' />
            <UserCard userImageSrc={user5} userImageAlt='Team user 5 picture' />
            <UserCard userImageSrc={user6} userImageAlt='Team user 6 picture' />
          </div>
          <div className="user-cards">
            <UserCard userImageSrc={user7} userImageAlt='Team user 7 picture' />
            <UserCard userImageSrc={user8} userImageAlt='Team user 8 picture' />
            <UserCard userImageSrc={user9} userImageAlt='Team user 9 picture' />
          </div>
        </section>
      </div>
      <section className="free-trial">
        <div className="container">
          <h2>Start your 14 days free trial</h2>
          <h6 className='text-gray'>Met minim Mollie non desert Alamo est sit cliquey dolor <br className="desktop" /> do met sent. RELIT official consequent.</h6>
          <button className="cta">Try it free now</button>
          <div className="freeT-media d-flex">
            <a href="#"><LazyLoadImage effect='blur' src={twitter} alt="Twitter logo" /></a>
            <a href="#"><LazyLoadImage effect='blur' src={facebook} alt="Facebook logo" /></a>
            <a href="#"><LazyLoadImage effect='blur' src={instagram} alt="Instagram logo" /></a>
            <a href="#"><LazyLoadImage effect='blur' src={linkedin} alt="Linkedin logo" /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team;