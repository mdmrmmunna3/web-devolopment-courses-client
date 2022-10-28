import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import swiper1 from '../../assets/SwiperImg/swiper1.png'
import swiper2 from '../../assets/SwiperImg/swiper2.png'
import swiper3 from '../../assets/SwiperImg/swiper3.png'
import swiper4 from '../../assets/SwiperImg/swiper4.png'
import swiper5 from '../../assets/SwiperImg/swiper5.png'
import swiper6 from '../../assets/SwiperImg/swiper6.png'
import "./SliderMenu.css";

const SliderMenu = () => {
    return (
        <div className="main-swiper-container">
            <h2 className="text-center mb-2 mt-2 title"> Web Development Skills Build Your Life</h2>
            <>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={swiper1} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper2} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper3} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper4} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper5} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper6} alt='' />
                    </SwiperSlide>

                </Swiper>
            </>
        </div>
    );
};

export default SliderMenu;