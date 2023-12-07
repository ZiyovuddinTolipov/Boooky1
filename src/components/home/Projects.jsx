import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Projects = () => {
    const style = {
        sliderDiv: "h-[200px] border-2 duration-200 px-4 py-3 rounded-md text-white bg-slate-900/50 hover:bg-slate-900/80 border-blue-400",
    }
    return (
        <div className='my-6 max-w-[1400px] mx-auto'>
            <h3 className='text-3xl font-semibold my-4 text-center text-white'>Amazing things are happening</h3>
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
                    <h1>Slider 1</h1>
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nisi?
                    </h3>
                </SwiperSlide>
                <SwiperSlide className={style.sliderDiv}>
                    <h1>Slide 2</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, libero.</h3>
                </SwiperSlide>
                <SwiperSlide className={style.sliderDiv}>
                    <h1>Slide 3</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, libero.</h3>
                </SwiperSlide>
                <SwiperSlide className={style.sliderDiv}>
                    <h1>Slide 4</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, libero.</h3>
                </SwiperSlide>
                <SwiperSlide className={style.sliderDiv}>
                    <h1>Slide 5</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, libero.</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Projects