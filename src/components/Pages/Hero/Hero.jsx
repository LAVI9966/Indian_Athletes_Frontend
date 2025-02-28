import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";
import HeroMidSection from "./HeroMidSection";

const Hero = () => {
    return (
        <section className="relative w-full h-[257.5px] sm:h-[412px] md:h-[600px] lg:h-screen overflow-hidden">
            {/* Centered HeroMidSection */}
            <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
                <HeroMidSection />
            </div>

            {/* Swiper Background Image Slider */}
            <Swiper
                modules={[EffectFade, Autoplay]}
                effect="fade"
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                speed={2000} // 2s fade duration
                className="w-full h-full"
            >
                <SwiperSlide>
                    <img
                        src="https://images.unsplash.com/photo-1646743934958-ae9d951e5dc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Slide 1"
                        className="w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Slide 2"
                        className="w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://images.unsplash.com/photo-1523497804259-88c4c134ca90?q=80&w=2188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Slide 3"
                        className="w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Hero;
