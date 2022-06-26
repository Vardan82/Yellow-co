import React, { useState } from "react" 

function HeaderTheSupporYourNeed(){
const [popularPosts, setPopularPosts] = useState(
   [
    {
        img: "./img/Yellow Co  Women Creating Meaningful Work_files/Community.jpg",
        title: "pepperdine alumna fulfilling dreams & creating new ones",
        content: "Ella London",
    },
    {
        img: "./img/Yellow Co  Women Creating Meaningful Work_files/Screen+.png",
        title: "cafe gratitude coworkers use this practice with each other to connect & feel seen",
        content: "Terces Engelhart",
    },
    {
        img: "./img/Yellow Co  Women Creating Meaningful Work_files/Screen+Sho.png",
        title: "how these sisters built an eco-friendly laundromat that’s making us never look at laundry the same way again",
        content: "Lauren Breiding",
    },

    {
        img: "./img/Yellow Co  Women Creating Meaningful Work_files/Yello.jpg",
        title: "how your enneagram type can be most effective & fulfilled at work",
        content: "Kadie Smith",

    },

    {
       img: "./img/Yellow Co  Women Creating Meaningful Work_files/This+Body.jpg",
       title: "this body is mine, this body is beautiful: a poem on embracing ourselves",
       content: "Arielle Estoria",     
    },

    {
        img: "./img/Yellow Co  Women Creating Meaningful Work_files/becca.jpg",
        title: "five tips to carry conversation like a pro",
        content: "Emily Bode",
    }
   ]
)
    return(

        <div className="header_the_suppor_your_need">
            <div className="img_the_support_you_need">
                <div className="member_ship_img"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/2(1).png"/> </div>
                <div className="the_support_you_need_text">
                    <em className="em"> the support you need </em>
                    <p> Let’s be real. It’s not only intimidating, it’s flat out <em> SCARY </em> to enter a room (yes, even a virtual room) with women you’ve never met. At Yellow Co., we believe that no matter where you are on your meaningful work journey, we ALL have something to give and we ALL have something to receive. Also, the women in the Yellow Fam are probably the most welcoming group of women on the interwebs, so let those nerves know there’s nothing to fear and jump in! You are welcome here. </p>
                    <p> No matter where you are in your journey, we’re here not only to support, guide and encourage you, but to <strong> celebrate </strong> you as you embark on your unique path of creating your meaningful work. </p>
                    <p> <strong className="strong"> START YOUR FREE TRIAL </strong></p>
                </div>
            </div>
            <div className="header_the_suppor_your_need_linel"></div>
            <div className="as_seen_on"> <p> AS SEEN ON </p></div>
            <div className="the_support_you_need_imges">
                <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Darling.png"/>
                <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Forbes.png"/>
                <img src="./img/Yellow Co  Women Creating Meaningful Work_files/The-Good-Trade.png"/>
                <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Brit+co.png"/>
                <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Zoe-Report.png"/>
                <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Huff-Post.png"/>
            </div>
            <div className="img_download_our_day">
                    <div className="img_download"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/unsplash-image-DC_gMe5H95k.jpg"/> </div>
                    <div className="download_our_day">
                        <h1> download our 90-day planner </h1>
                        <p> Get intentional about the upcoming 90 days with this free 90-day planner. </p>
                        <button>  DOWNLOAD NOW </button>
                    </div>
            </div>
            <div className="img_down"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Line-separator-2.png"/> </div>
            <div className="popular_postos"> <h1> —  popular postos </h1> </div>


          <div className="nav_img_popular_postos">
          {
             popularPosts?.map((el, i) => {
                 return(
                     <div className="img_popular_postos">
                         <img src={el.img}/>
                         <span > {el.title} </span>
                         <p > {el.content} </p>
                     </div>
                 )
             })
            }
          </div>
            <div className="head_to_the_blog"> <button> HEAD TO THE BLOG </button></div>
            <div className="img_download_header_joinus"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Screen.png"/> </div>
            <div className="img_download_line"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Line-.png"/> </div>
            <div className="join_us_text">
                <div className="join_us">
                    <h2> Join us </h2>
                </div>
                <div className="text">
                    <p> Whether you join us for one of our annual conferences, our digital membership platform, dive in deep by joining a Yellow Guidance Group, or  simply leave us a comment on our Instagram, our hope is that you will get a bit more in touch with who you are and the meaningful work you were called to create in the world. If you’re ready to dive in, we’d love to have you a part of the community. Let’s come together to make the world better.</p>
                    <p> Get Involved → </p>
                </div>
            </div>
            <div className="hang_out_with_on_the_gram"> <h3> —  HANG OUT WITH US ON THE GRAM </h3></div>
            <div className="image_asset">
                <div className="image_asset_img"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/image-asset.jpeg"/> </div>
                <div className="image_asset_img"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/image-asset(1).jpeg"/> </div>
                <div className="image_asset_img"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/image-asset(2).jpeg"/> </div>
                <div className="image_asset_img"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/image-asset(3).jpeg"/> </div>
                <div className="image_asset_play"> <a href="https://www.instagram.com/p/CB3oDcKHwTa/embed/?autoplay=1"> <img src="./img/playy.webp"/></a> </div>
            </div>
            <div className="header_hop_on_our_email_list">
                <div className="body_hop_on_our_email_list">
                    <div className="hop_on_our_email_list"> <button> HOP ON OUR EMAIL LIST </button></div>
                    <div className="body_hop_on_our_email_list_line"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/image-asset(4).jpeg"/> </div>
                </div>
                <div className="icon_hop_on_our_email_list" >
                    <div className="instagram_facebbol_youtobe">
                        <img className="instagram" src="./img/Instagram.png"/>
                        <img className="facebook" src="./img/Facebook.png"/>
                        <img className="youtube" src="./img/Youtube.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTheSupporYourNeed