'use client'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/autoplay'

import slide_1 from '/images/slide_1.mp4'
import slide_2 from '/images/slide_2.jpg'
import slide_3 from '/images/slide_3.jpg'
import slide_4 from '/images/slide_4.mp4'

const Slider = () => {
  const handleSlideChange = (swiper) => {
    swiper.slides.forEach((slide) => {
      const video = slide.querySelector('video');
      // console.log(video);
      if(video) {
        if(slide === swiper.slides[swiper.activeIndex]){
          // console.log(swiper.slides[swiper.activeIndex])
          video.play();
        }
        else{
          video.pause();
        }
      }
    })
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Register modules
      direction='vertical'
      autoplay={{ delay: 3000 }}
      spaceBetween={50}
      slidesPerView={1}
      // pagination={{ clickable: true }} // Enable pagination if needed
      // navigation // Enable navigation arrows if needed
      onSlideChange={handleSlideChange}
      // onSwiper={(swiper) => console.log(swiper)}
      style={{ height: '600px' }}
    >
      <SwiperSlide>
        <video width='100%' muted loop>
          <source src={slide_1} type='video/mp4' />
          <source src={slide_1} type='video/mp4' />
        </video>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_2} alt={`Slide image 1`} className='w-screen h-full object-cover' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_3} alt={`Slide image 1`} className='w-screen h-full object-cover' />
      </SwiperSlide>
      <SwiperSlide>
        <video width='100%' muted loop>
          <source src={slide_4} type='video/mp4' />
        </video>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;