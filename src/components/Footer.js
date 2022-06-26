import  { useRef } from 'react';
import emailjs from "emailjs-com"

function Footer(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vavgbyx', 'template_q5fpet3', form.current, '4H8B1wiMoMbdkDf33')
        e.target.reset()
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <div className="footer">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Your Full Name" required/>
                <input type="email" name="email" placeholder="Your Email" required/>
                <textarea type="message" name="message" rows="7" placeholder="Your Message" required/>
                <button type="submit" className="send_message"> Send Message </button>
            </form>

                <div className="linel_footer"></div>
                <div className="footer_informs">
                    <div className="footer_inform">
                        <a href=""> Blog </a>
                        <a href=""> Events </a>
                        <a href=""> Our Story </a>
                    </div>
                    <div className="footer_inform">
                        <a href=""> Guidance Groups </a>
                        <a href=""> What We Do </a>
                        <a href=""> Our Visiion </a>
                    </div>
                    <div className="footer_inform">
                        <a href=""> Our Impact </a>
                        <a href=""> Podcast </a>
                        <a href=""> Contact </a>
                    </div>
                </div>
                <div className="icon_hop_on_our_email_list_footer" >
                        <div className="instagram_facebbol_youtobe_footer">
                            <img className="instagram" src="./img/Instagram.png"/>
                            <img className="facebook" src="./img/Facebook.png"/>
                            <img className="youtube" src="./img/Youtube.png"/>
                        </div>
                    </div>
                <div className="foter_finish">
                    <div className="instagram_facebook_login_contact_copyright_yellow_co">
                        <p className="sayt_texts"> <span> INSTAGRAM </span>  •••  <span> FACEBOOK </span> •••  <span> LOGIN </span> ••• <span> CONTACT </span> </p>
                        <p className="copyring_yellowco"> COPYRIGHT YELLOW CO. 2022 </p>
                    </div>
                   
                    <div className="spread_goodness_and_bloom3_get_it_girl">
                        <p>  SPREAD GOODNESS AND BLOOM 3 GET IT GIRL </p>
                    </div>
                </div>
        </div>
    )
}

export default Footer