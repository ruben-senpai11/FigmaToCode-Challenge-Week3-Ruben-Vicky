import "./pricing.css";
import arrowR from "../../assets/arrowR.png";
import toggle from "../../assets/toggle.png";
import tick from "../../assets/tick.png";
import graytick from "../../assets/greyTick.png";
import sticker1 from "../../assets/sticker1.png";
import sticker2 from "../../assets/sticker2.png";
import sticker3 from "../../assets/sticker3.png";
import sticker4 from "../../assets/sticker4.png";
import sticker5 from "../../assets/sticker5.png";
import sticker6 from "../../assets/sticker6.png";
import facebook from '../../assets/logos_facebook.png'
import instagram from '../../assets/ant-design_instagram-outlined.svg'
import twitter from '../../assets/logos_twitter.svg'
import linkedin from '../../assets/logos_linkedin-icon.svg'
import blueTwitter from "../../assets/blueTwitter.png";
import blueInstagram from "../../assets/blueInstagram.png";
import bluefacebook from "../../assets/bluefacebook.png";
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
// import shopping from "../../assets/shopping.png"
// import menu from "../../assets/menu.png";
// import search from "../../assets/search.png";

function Pricing() {
  return (
    <>
      <div className="ContainerPricing">
        <div className="headerBody">
          <div className="sectionB">
            <p className="pSection desktop">Pricing</p>
            <h1 className="section1h1">Simple Pricing</h1>
            <div className="sectionDiv">
              <p className="sectionHBold">Home</p>
              <img src={arrowR} alt="" />
              <p className="sectionBColorGrey">Pricing</p>
            </div>
          </div>
          <div className="sectionB sectionGrey  ">
            <h2 className="sectionh2">Pricing</h2>
            <p className="section2p sectionBColorGrey priceSecB">
              Problems trying to resolve the conflict between <br></br> the two
              major realms of Classical physics: Newtonian mechanics
            </p>
            <div className="sectionDiv comparativePricing">
              <p className="pSection">Monthly</p>
              <div className="pSectionImg">
                <img src={toggle} alt="" />
              </div>

              <p className="pSection">Yearly</p>
              <div className="section2bluebtn">Save 25%</div>
            </div>
          </div>
        </div>
        <div className="pricingFlexContainers sectionGrey">
          <div className="pricingminiFlexContainers">
            <h3 className="semiflexh3">Free</h3>
            <p className="semiflexP">Organise accross all apps by hand</p>
            <div className="semiPricePrice">
              <h2 className="bigNum">19.99</h2>
              <div className="bigNumdiv">
                <h3>$</h3>
                <p>Per Month</p>
              </div>
            </div>
            <div className="miniflexText">
              <div>
                <img src={tick} alt="" />
                <p>Unlimited product updates</p>
              </div>
              <div>
                <img src={tick} alt="" />
                <p>Unlimited product updates</p>
              </div>
              <div>
                <img src={tick} alt="" />
                <p>Unlimited product updates</p>
              </div>
              <div>
                <img src={graytick} alt="" />
                <p>Unlimited product updates</p>
              </div>
              <div>
                <img src={graytick} alt="" />
                <p>Unlimited product updates</p>
              </div>
              <div className="priceBtn blueBtn">Try For Free</div>
            </div>
          </div>
          <div className="pricingminiFlexContainers miniflexTall miniflexcolor">
            <h3 className="semiflexh3">STANDARD</h3>
            <p className="semiflexP">Organise accross all apps by hand</p>
            <div className="semiPricePrice">
              <h2 className="bigNum">19.99</h2>
              <div className="bigNumdiv">
                <h3>$</h3>
                <p>Per Month</p>
              </div>
            </div>
            <div className="miniflexText">
              <div>
                <img src={tick} alt="" />
                <p>Unlimited product updates</p>
              </div>
              <div>
                <img src={tick} alt="" />
                <p>Unlimited product updates</p>
              </div>
              <div>
                <img src={tick} alt="" />
                <p>Unlimited product updates</p>
              </div>
              <div>
                <img src={graytick} alt="" />
                <p>Unlimited product updates</p>
              </div>
              <div>
                <img src={graytick} alt="" />
                <p>Unlimited product updates</p>
              </div>
              <div className="priceBtn">Try For Free</div>
            </div>
          </div>
          <div className="pricingminiFlexContainers">
            <h3 className="semiflexh3">PREMIUM</h3>
            <p className="semiflexP">Organise accross all apps by hand</p>
            <div className="semiPricePrice">
              <h2 className="bigNum">19.99</h2>
              <div className="bigNumdiv">
                <h3>$</h3>
                <p>Per Month</p>
              </div>
            </div>
            <div className="miniflexText">
              <div>
                <img src={tick} alt="" />
                <p>Unlimited product updates</p>
              </div>
              <div>
                <img src={tick} alt="" />
                <p>Unlimited product updates</p>
              </div>
              <div>
                <img src={tick} alt="" />
                <p>Unlimited product updates</p>
              </div>
              <div>
                <img src={graytick} alt="" />
                <p>Unlimited product updates</p>
              </div>
              <div>
                <img src={graytick} alt="" />
                <p>Unlimited product updates</p>
              </div>
              <div className="priceBtn">Try For Free</div>
            </div>
          </div>
        </div>
      <section className="big-companies stickers">    
        <div className="container flex-column">
          <h4>Trusted by over 4000 companies</h4>
          <div className="partenrs d-flex">
            <img src={partner1} alt="parter logo" className='desktop' />
            <img src={partner2} alt="parter logo" className='desktop' />
            <img src={partner3} alt="parter logo" className='desktop' />
            <img src={partner4} alt="parter logo" className='desktop' />
            <img src={partner5} alt="parter logo" className='desktop' />
            <img src={partner6} alt="parter logo" className='desktop' />
            <img src={mobilePartner1} alt="parter logo" className='mobile'/>
            <img src={mobilePartner2} alt="parter logo" className='mobile'/>
            <img src={mobilePartner3} alt="parter logo" className='mobile'/>
            <img src={mobilePartner4} alt="parter logo" className='mobile'/>
            <img src={mobilePartner5} alt="parter logo" className='mobile'/>
            <img src={mobilePartner6} alt="parter logo" className='mobile'/>
          </div>
        </div>  
      </section>
        <div className="Faqs">
          <div className="FaqSec1">
            <h2 className="Faqsh2 sectionBColorGrey">Pricing Faqs</h2>
            <p className="FaqP">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          <div className="faqsText">
            <div className="priceSection">
              <div className="FaqImg">
                <img src={arrowR} alt="" />
              </div>
              <div className="priceminiSection">
                <h5>the quick fox jumps over the lazy dog</h5>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
            <div className="priceSection">
              <div className="FaqImg">
                <img src={arrowR} alt="" />
              </div>
              <div className="priceminiSection">
                <h5>the quick fox jumps over the lazy dog</h5>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
            <div className="priceSection">
              <div className="FaqImg">
                <img src={arrowR} alt="" />
              </div>
              <div className="priceminiSection">
                <h5>the quick fox jumps over the lazy dog</h5>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
            <div className="priceSection">
              <div className="FaqImg">
                <img src={arrowR} alt="" />
              </div>
              <div className="priceminiSection">
                <h5>the quick fox jumps over the lazy dog</h5>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
            <div className="priceSection">
              <div className="FaqImg">
                <img src={arrowR} alt="" />
              </div>
              <div className="priceminiSection">
                <h5>the quick fox jumps over the lazy dog</h5>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
            <div className="priceSection">
              <div className="FaqImg">
                <img src={arrowR} alt="" />
              </div>
              <div className="priceminiSection">
                <h5>the quick fox jumps over the lazy dog</h5>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
          </div>

          <p className="faqPEnd text-gray">Haven't agot your answers? contact our support</p>
        </div>
        <section className="free-trial">
          <div className="container">
            <h2>Start your 14 days free trial</h2>
            <h6 className='text-gray'>Met minim Mollie non desert Alamo est sit cliquey dolor <br className="desktop" /> do met sent. RELIT official consequent.</h6>
            <button className="cta">Try it free now</button>
            <div className="freeT-media d-flex">
                <a href="#"><img src={twitter} alt="Twitter logo" /></a>
                <a href="#"><img src={facebook} alt="Facebook logo" /></a>
                <a href="#"><img src={instagram} alt="Instagram logo" /></a>
                <a href="#"><img src={linkedin} alt="Linkedin logo" /></a>
            </div>
          </div>
        </section>     
      </div>
    </>
  );
}

export default Pricing;