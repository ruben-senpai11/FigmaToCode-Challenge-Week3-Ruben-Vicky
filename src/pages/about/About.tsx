import "./about.css";
import ButtonCTA from "../../components/ButtonCTA";
import videoCard from "../../assets/VideoCard.png";
import UserCard from "../../components/UserCard";
import user1 from "../../assets/team-1-user-1.jpg";
import user2 from "../../assets/team-1-user-2.jpg";
import user3 from "../../assets/team-1-user-3.jpg";

function About() {
  return (
    <>
      <div className="container">
        <section className="about-section">
          <div className="about-texts">
            <h5>ABOUT COMPANY</h5>
            <h1>ABOUT US</h1>
            <p>
              We know how large objects will act, but things on a small scale
            </p>
            <button className="cta">Get Quote Now</button>
          </div>
        </section>
      </div>
      <div className="about-image"></div>
      <div className="container">
        <section className="problem-trying flex-column">
          <p>Problems trying</p>
          <div className="content d-flex">
            <h2>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h2>
            <h4>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics. Newtonian mechanics{" "}
            </h4>
          </div>
        </section>
        <section className="stats">
          <div className="stat">
            <p className="stat-number">15K</p>
            <p className="stat-desctipion">happy customers</p>
          </div>
          <div className="stat">
            <p className="stat-number">150K</p>
            <p className="stat-desctipion">Monthly visitors</p>
          </div>
          <div className="stat">
            <p className="stat-number">15</p>
            <p className="stat-desctipion">countries WorldWide</p>
          </div>
          <div className="stat">
            <p className="stat-number">100+</p>
            <p className="stat-desctipion">Top Patners</p>
          </div>
        </section>
        <section className="video-and-team">
          <div className="video d-flex">
            <img src={videoCard} alt="Video Card" />
          </div>
          <div className="team">
            <div className="team-intro flex-column gap-20">
              <h2>Meet Our Team</h2>
              <p className="text-gray">
                Problems trying to resolve the conflict between <br /> the two
                major realms of Classical physics: Newtonian mechanics
              </p>
            </div>
            <div className="user-cards">
              <UserCard userImageSrc={user1} userImageAlt="User 1" />
              <UserCard userImageSrc={user2} userImageAlt="User 2" />
              <UserCard userImageSrc={user3} userImageAlt="User 3" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
