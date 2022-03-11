import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import introPng from '../../assets/img/intro.png';

import './Carousel.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

const Carousel = () => {
  //   const params = {
  //     initialSlide: 3,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       type: 'bullets',
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //     spaceBetween: 30,
  //     loop: true,
  //     autoplay: true,
  //   };

  return (
    <>
      <Swiper pagination={{ clickable: true, type: 'bullets' }} grabCursor>
        {[1, 2, 3].map((item, index) => (
          <SwiperSlide className="noselect" key={index}>
            {' '}
            <div className="wrapper">
              <div className="intro">
                <div className="intro-text">
                  <h2>Rogue</h2>
                  <p className="intro-text__paragraph">
                    Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring
                    mission: rescue hostages from their captors in remote Africa. But as the mission
                    goes awry and the team is standed, O’Hara’s squad must face a bloody, brutal
                    encounter with a ganfof rebels.
                  </p>
                </div>
              </div>
            </div>
            <img className="main__img" src={introPng} alt={`Slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="wrapper">
        <div className="intro">
          <div className="intro-text">
            <h2>Rogue</h2>
            <p className="intro-text__paragraph">
              Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission:
              rescue hostages from their captors in remote Africa. But as the mission goes awry and
              the team is standed, O’Hara’s squad must face a bloody, brutal encounter with a ganfof
              rebels.
            </p>
          </div>
        </div>
      </div>
      <img className="main__img" src={introPng} alt="film" /> */}
    </>
  );
};

export default Carousel;
