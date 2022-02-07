import React from "react";
import "./PrizeCarousel.css";
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// import { Navigation, Pagination } from "swiper";
// import { prizesData } from "./prizesData";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAward, faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { allParticipants } from "./prizesData";
import Prizes from "./PrizeCard";

const prizeCarousel = (props) => {
  return (
    <section
      id="prizes"
      className="relative overflow-hidden mt-12 container-theme p-6"
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-cubic"
    >
      <div className="container mx-auto">
        <center><h1 className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 header-theme" style={{color:"#30dc86",fontWeight:"600"}}>
          Prizes
        </h1></center>
        <div className="m-auto px-1 py-24 ">
          <Prizes />
        </div>
        {/* <Swiper
          className="pt-10 prize-slide"
          modules={[Pagination, Navigation]}
          pagination={{ dynamicBullets: true, clickable: true }}
          loop={true}
          navigation={true}
          slidesPerView={"auto"}
          centeredSlides={true}
          slidesPerGroup={1}
          roundLengths={true}
          loopAdditionalSlides={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: "auto",
              centeredSlides: true,
              slidesPerGroup: 1,
            },
            1024: {
              slidesPerView: "auto",
              centeredSlides: true,
              slidesPerGroup: 1,
            },
          }}
        >
          {prizesData.map((prize, index) => {
            return (
              <SwiperSlide className="md:w-4/5 lg:w-4/6" key={index}>
                {() => (
                  <div className="w-full h-full md:max-w-full md:flex prize-gradient">
                    <div className="h-1/2 md:h-auto md:w-1/2 lg:w-2/5 flex-none text-center overflow-hidden md:rounded-l-3xl md:rounded-r-none rounded-t-2xl">
                      <picture>
                        <source srcSet={prize.webp} type="image/webp" />
                        <img
                          className="w-full h-full object-fit md:object-contain"
                          src={prize.img}
                          alt="prizes"
                        />
                      </picture>
                    </div>
                    <div className="h-1/2 md:h-auto p-4 flex flex-col justify-center items-center leading-normal md:w-1/2 lg:w-3/5 md:rounded-r-3xl md:rounded-l-none rounded-b-2xl content-theme ">
                      <div className="px-3">
                        <div className="flex items-center lg:pb-4">
                          <FontAwesomeIcon
                            className="text-lg"
                            fixedWidth
                            icon={faAward}
                          />
                          <FontAwesomeIcon
                            className="text-lg"
                            fixedWidth
                            icon={faRupeeSign}
                          />
                          <p className="text-sm text-md md:text-lg flex items-center">
                            {prize.amt}
                          </p>
                        </div>
                        <div className=" font-bold text-xl md:text-3xl md:mb-2">
                          {prize.name}
                        </div>
                        <ul className="list-decimal text-base md:text-xl px-3 md:mb-1 md:p-3">
                          <p className="">
                            {prize.desc.map((element, index) => {
                              return (
                                <li
                                  className="md:pt-1 md:tracking-tighter"
                                  key={index}
                                >
                                  {element}
                                </li>
                              );
                            })}
                          </p>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper> */}
        <h1 className="mt-16 text-center text-5xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme" style={{color:"#30dc86",fontWeight:"600"}}>
          {allParticipants.name}
        </h1>
        <div className="w-full h-full md:max-w-6xl md:flex m-auto backdrop-filter rounded-2xl p-4 mt-2 bg-black backdrop-blur-sm bg-opacity-25 shadow-2xl shadow-transparent ">
          <div className="h-1/2 md:h-auto md:w-1/2 text-center overflow-hidden">
            <picture>
              <source srcSet={allParticipants.webp} type="image/webp" />
              <img
                className="w-full shadow-2xl h-full object-fit md:object-contain"
                src={allParticipants.img}
                alt="prizes"
              />
            </picture>
          </div>
          <div className="md:w-1/2 h-1/2 md:h-auto md:pl-6 content-theme">
            <ul className="md:list-decimal text-lg px-3 md:mb-1 md:p-3 md:text-left text-center ">
              {allParticipants.desc.map((element, index) => {
                return (
                  <React.Fragment key={index}>
                    <li className="md:py-0 my-4 tracking-tighter md:tracking-normal ">
                      {element}
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default prizeCarousel;
