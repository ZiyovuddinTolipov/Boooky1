import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Projects = () => {
    const style = {
        sliderDiv: "h-[200px] bg-black mx-3 text-white text-center",

    }
    return (
        <div className='my-6'>
            <h3 className='text-3xl font-semibold my-4 text-center'>Amazing things are happening</h3>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                <SwiperSlide className={style.sliderDiv}>
                    {({ isActive }) => (
                        <div>Current slide is {isActive ? 'active' : 'not active'}</div>
                    )}
                </SwiperSlide>
                <SwiperSlide className={style.sliderDiv}>Slide 2</SwiperSlide>
                <SwiperSlide className={style.sliderDiv}>Slide 3</SwiperSlide>
                <SwiperSlide className={style.sliderDiv}>Slide 4</SwiperSlide>
                <SwiperSlide className={style.sliderDiv}>Slide 5</SwiperSlide>
                <SwiperSlide className={style.sliderDiv}>Slide 6</SwiperSlide>
                <SwiperSlide className={style.sliderDiv}>Slide 7</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Projects