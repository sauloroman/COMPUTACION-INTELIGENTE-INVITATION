import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';

export const Slider = ({ studentsName }) => {

  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      spaceBetween={30}
      className="slider"
      breakpoints={{
        1200: {
          slidesPerView: 4
        },
        992: {
          slidesPerView: 3
        }
      }}
    >
      {studentsName.map((studentName) => (
        <SwiperSlide key={studentName} className="students__item">
          <p className="students__name">{studentName}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
