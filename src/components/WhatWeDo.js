import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

 
 
 function WhatWeDo(){

    return(
        <div className="what_we_do">
            <Swiper className="what_we_do_img"
                slidesPerView={"auto"}
                spaceBetween={0}
                freeMode={true}
                centeredSlides={true}
                autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}>
                    <SwiperSlide className="swiper-slide"><img src="./img/Yellow Co  Women Creating Meaningful Work_files/yellow+conference-+day.jpg"/> </SwiperSlide>
                    <SwiperSlide className="swiper-slide">  <img  src="./img/Yellow Co  Women Creating Meaningful Work_files/Screen+Shot+2020-06.jpg"/> </SwiperSlide>
                    <SwiperSlide className="swiper-slide"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/yellow.jpg"/> </SwiperSlide>
                    <SwiperSlide className="swiper-slide"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Screen+Shot.png"/> </SwiperSlide>
                    <SwiperSlide className="swiper-slide"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Yellow2018bags-8.jpg"/> </SwiperSlide>
                    <SwiperSlide className="swiper-slide"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/girls.png"/> </SwiperSlide>
                    <SwiperSlide className="swiper-slide"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/asher-gardner.jpg"/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Screen+Shot+.png"/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Screen+Shot+2020.png"/> </SwiperSlide>
                    <SwiperSlide className="swiper-slide"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Screen+Shot+2.png"/> </SwiperSlide>
                    <SwiperSlide className="swiper-slide"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/yellow+.jpg"/> </SwiperSlide>
                    <SwiperSlide className="swiper-slide"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Screen+Shot+202.png"/> </SwiperSlide>
                    <SwiperSlide className="swiper-slide"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/asher-gardner+.jpg"/> </SwiperSlide>        
                    <SwiperSlide className="swiper-slide"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Screen+Shot+2020+.png"/> </SwiperSlide>
                    <SwiperSlide className="swiper-slide"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/asher-gardner-yellow.jpg"/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Screen+Shot+2020-.png"/>  </SwiperSlide>
                    <SwiperSlide className="swiper-slide"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/yellow+conference+-+.jpg"/> </SwiperSlide> 
                    <SwiperSlide className="swiper-slide"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Screen+Shot+2020-1.png"/> </SwiperSlide>                
            
            </Swiper>
            <div className="line"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Line-Separator.png"/> </div>
            <div className="what_we-do_member_ship"> 
                <div className="what_we_do_main">
                    <h1 className="what_we_do_main_text"> :)    what we do: </h1>
                    <div className="what_we_do_main_img"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/GG-2.png"/> </div>
                    <h1 className="visit_the_blog"> <span> —  </span> <p> visit the blog </p> </h1>
                </div>
                <div className="member_ship"> 
                        <div className="member_ship_img_what_we_do"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Membership-2.png"/> </div>
                        <div className="what_we_do_main_video"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/Conf-Gif.gif"/> </div>
                </div>
            </div>
            <div className="tochka"> <h2>...</h2></div>
            <div className="what_we_do_img_informs"> <img src="./img/Yellow Co  Women Creating Meaningful Work_files/ValerieDenisePhotos-54.jpg"/> </div>
            
            <div className="informs">
                <h1>
                    <a href="">1.</a>
                    <a href="" className="free"> grab your 30 day <em>free</em> member trial </a>
                </h1>
                <h1>
                    <a href="">2.</a>
                    <a href="" className="deeper"> when you’re ready to go <em> deeper, </em> join a guidance group </a>
                </h1>
                <h1>
                    <a href="">3.</a>
                    <a href=""> make friends & create your <em> most </em> meaningful work </a>
                </h1>
                
            </div>
        </div>
    )
  }

  export default WhatWeDo