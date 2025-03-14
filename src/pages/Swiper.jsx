import React, { useContext } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';
import { Mycontext } from './ContextApi';

function Slide() {
    const {data, setData} = useContext(Mycontext);
    const changeImg = [
        './imgs/img-review-01.jpg',
        './imgs/img-review-02.jpg',
        './imgs/img-review-03.jpg'
    ]
    function change(){
        setData(changeImg)
    }

  return (
    <>
        <button onClick={change}> 슬라이드 이미지 바꾸기 </button>

        <Swiper
            scrollbar={{hide: true}}
            modules={[Scrollbar]}
            className="mySwiper">
            {/* <SwiperSlide><img src="./imgs/img-bbq-01.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./imgs/img-bbq-02.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./imgs/img-bbq-03.jpg" alt="" /></SwiperSlide> */}
            {
                data.map((item, i) =>
                    <SwiperSlide key={i}>
                        <img src={item} alt="" />
                    </SwiperSlide>
                )
            }
        </Swiper>
    </>
  );
}

export default Slide