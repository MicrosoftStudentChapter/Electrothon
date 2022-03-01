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
       <h1
        className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme pb-6"
        style={{ textAlign: "center",color:"#30dc86",fontWeight:"600" }}
      >
        Prizes 
      </h1>
        <div className="m-auto px-1 py-10 ">
          <Prizes />
        </div>
        <h1 className="mt-10 text-center text-6xl tracking-tight md:text-5xl leading-normal md:leading-relaxed header-theme" style={{color:"#30dc86",fontWeight:"600"}}>
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
