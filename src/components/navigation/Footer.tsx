import facebook from '../../assets/facebook.png'
import instagram from '../../assets/Vector.png'
import twitter from '../../assets/Vector (1).png'
import "./navigation.css"

function Footer() {
    return (
        <>
            <div className="container">
                <div className="footer">
                    <div className="logo-and-media">
                        <h2 className="logo">Bandage</h2>
                        <p className="footer-media d-flex gap-20">
                            <a href="#"><img src={facebook} alt="Facebook logo" /></a>
                            <a href="#"><img src={instagram} alt="Instagram logo" /></a>
                            <a href="#"><img src={twitter} alt="Twitter logo" /></a>
                        </p>
                    </div>
                    <hr className='desktop'/>
                    <div className="links-and-news">
                        <div className="footer-links">
                            <div className="footer-columns">
                                <div className="footer-column">
                                    <h5>Company Info</h5>
                                    <a href="#">About us</a>
                                    <a href="#">Carrier</a>
                                    <a href="#">We are hiring</a>
                                    <a href="#">Blog</a>
                                </div>
                                <div className="footer-column">
                                    <h5>Legal</h5>
                                    <a href="#">About us</a>
                                    <a href="#">Carrier</a>
                                    <a href="#">We are hiring</a>
                                    <a href="#">Blog</a>
                                </div>
                            </div>
                            <div className="footer-columns">
                                <div className="footer-column">
                                    <h5>Features</h5>
                                    <a href="#">Business Marketing</a>
                                    <a href="#">User Analytic</a>
                                    <a href="#">Live Chat</a>
                                    <a href="#">Unlimited Support</a>
                                </div>
                                <div className="footer-column">
                                    <h5>Ressources</h5>
                                    <a href="#">IOS & Android</a>
                                    <a href="#">Watch a demo</a>
                                    <a href="#">Customers</a>
                                    <a href="#">API</a>
                                </div>
                            </div>
                        </div>
                        <div className="newsletter-column">
                            <h5>Get In Touch</h5>
                            <div className="">
                                <div className="newsletter">
                                    <input type="email" name="email" id="" placeholder="Your Email" />
                                    <button className='cta newsleter-button'>Subscribe</button>
                                </div>
                                <p className='text-gray'>Lore imp sum dolor Amit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p className='text-gray'>Made With Love By <br className="mobile" /> Finland All Right Reserved</p>
            </div>
        </>
    )
}

export default Footer