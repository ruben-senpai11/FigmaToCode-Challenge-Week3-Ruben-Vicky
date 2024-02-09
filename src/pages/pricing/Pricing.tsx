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
import twitter from "../../assets/twitter.png";
import linkln from "../../assets/linklen.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import blueTwitter from "../../assets/blueTwitter.png";
import blueInstagram from "../../assets/blueInstagram.png";
import bluefacebook from "../../assets/bluefacebook.png";
// import shopping from "../../assets/shopping.png"
// import menu from "../../assets/menu.png";
// import search from "../../assets/search.png";

function Pricing() {
  return (
    <>
      <div className="ContainerPricing">
        <div className="headerBody">
          <div className="sectionB">
            <p className="pSection ">Pricing</p>
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
            <div className="sectionDiv">
              <p className="pSection">Monthly</p>
              <div className="pSectionImg">
                <img src={toggle} alt="" />
              </div>

              <p className="pSection">Yearly</p>
              <div className="section2bluebtn">save 25%</div>
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
        <div className="stickers">
          <h4>Trusted by over 4000 companies</h4>
          <div className="stickersImg">
            <div>
              <img src={sticker1} alt="" />
            </div>
            <div>
              <img src={sticker2} alt="" />
            </div>
            <div>
              <img src={sticker3} alt="" />
            </div>
            <div>
              <img src={sticker4} alt="" />
            </div>
            <div>
              <img src={sticker5} alt="" />
            </div>
            <div>
              <img src={sticker6} alt="" />
            </div>
          </div>
        </div>
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

          <p className="faqPEnd">haven't agot your answers, contact us</p>
        </div>
        <div className="trialSection">
          <h2 className="tialH2">Start Your 14days free trial</h2>
          <div className="trialP">
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent.
            </p>
          </div>
          <div className="blueBtn">Try it Free Now</div>
          <div className="trialIcon">
            <div className="iconCon">
              <img src={twitter} alt="" />
            </div>
            <div>
              <img src={facebook} alt="" />
            </div>
            <div>
              <img src={instagram} alt="" />
            </div>
            <div>
              <img src={linkln} alt="" />
            </div>
          </div>
        </div>
        <div className="priceFooter">
          <div className="priceFooterSec1">
            <h2>Bandage</h2>
            <div className="priceFooterminiSec trialIcon">
              <div>
                <img src={blueInstagram} alt="" />
              </div>
              <div>
                <img src={blueTwitter} alt="" />
              </div>
              <div>
                <img src={bluefacebook} alt="" />
              </div>
            </div>
          </div>
          <div className="priceFooterSec2">
            <ul>
              <h3>Company Info</h3>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are Hiring</li>
              <li>Blog</li>
            </ul>
            <ul>
              <h3>Company Info</h3>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are Hiring</li>
              <li>Blog</li>
            </ul>
            <ul>
              <h3>Company Info</h3>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are Hiring</li>
              <li>Blog</li>
            </ul>
            <ul>
              <h3>Company Info</h3>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are Hiring</li>
              <li>Blog</li>
            </ul>
            <ul>
              <h3>Company Info</h3>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are Hiring</li>
              <li>Blog</li>
            </ul>
            <div className="priceFooterBtn">Subscribe</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
