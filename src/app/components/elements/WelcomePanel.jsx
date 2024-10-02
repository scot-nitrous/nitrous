import React from 'react';
import CloseButton from 'app/components/elements/CloseButton';
import { Link } from 'react-router';
import tt from 'counterpart';
import { HIVE_SIGNUP_URL, SIGNUP_URL } from 'shared/constants';

export default class WelcomePanel extends React.Component {
    constructor(props) {
        super(props);
        this.setShowBannerFalse = props.setShowBannerFalse;
    }

    render() {
        const signup = (
            <a className="button ghost fade-in--5" href={HIVE_SIGNUP_URL}>
                {tt('navigation.sign_up')}
            </a>
        );

        const learn = (
            <Link href="/faq.html" className="button ghost fade-in--7">
                {tt('navigation.learn_more')}
            </Link>
        );

        return (
            <div className="welcomeWrapper">
                <div className="welcomeBanner">
                    <CloseButton onClick={this.setShowBannerFalse} />
                    <div className="rows">
                        <div className="large-2 medium-1 show-for-medium" />
                        <div className="text-center welcomeImage small-12 show-for-small-only">
                            <img
                                className="heroImage"
                                width="99%"
                                src={require('app/assets/images/welcome-hero.png')}
                            />
                        </div>
                        <div className="small-12 medium-6 large-5 welcomePitch">
                            <h2 className="fade-in--1 h2txt">
                                A world of free speech and ownership
                                {/*tt('navigation.intro_tagline')*/}
                            </h2>
                            <h4 className="fade-in--3">
                                Welcome to Build-it, a springboard for DIY and
                                craft making lovers. Post, learn, earn.
                            </h4>
                            <div className="flexBtn">
                                {signup} {learn}
                            </div>
                        </div>
                        <div className='mchimp'>
{/* Begin Mailchimp Signup Form */}
  {/* <br /> */}
  <div id="mc_embed_signup">
    <form
      action="https://build-it.us10.list-manage.com/subscribe/post?u=01155ac3de3c1470287ed3ecc&id=73ece8843c&f_id=005632e2f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate=""
    >
      <div id="mc_embed_signup_scroll">
        <br /><br />
        <div style={{marginBottom: '10px'}}> <b>Don't Miss Out!</b>, Subscribe to get diy updates, tips and many more!</div>
        <div className='newsign'>
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL" style={{color: '#fff'}}>
            <b>Email Address</b> <span className="asterisk" style={{color: '#fff'}}>*</span>
          </label>
          <input
            type="email"
            defaultValue=""
            name="EMAIL"
            className="required email inputbt"
            placeholder="Your Email"
            id="mce-EMAIL"
            required=""
          />
          <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
        </div>
        <div id="mce-responses" className="clear foot">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          />
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          />
        </div>{" "}
        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
        {/* <br /> */}
        <div
          style={{ position: "absolute", left: "-5000px", marginTop: "20px", marginBottom: '20px', }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_01155ac3de3c1470287ed3ecc_73ece8843c"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
        <div className="flexBtn">
          <div className="clear">
            <input
              type="submit"
              defaultValue="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button ghost fade-in--5"
            />
            <p style={{display: "none"}}>
              <a
                href="http://eepurl.com/h9ZWTf"
                title="Mailchimp - email marketing made easy and fun"
              >
                <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
              </a>
            </p>
          </div>
        </div>
        </div>
      </div>
    </form>
  </div>
  {/*End mc_embed_signup*/}
                        </div>
                        <div className="text-center welcomeImage medium-4 large-3 show-for-medium">
                            <img
                                className="heroImage heroimg"
                                src={require('app/assets/images/welcome-hero.png')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
