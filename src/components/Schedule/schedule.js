import React, { useState, useRef } from "react";
import "./schedule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Schedule() {
  const ref = useRef(null);
  var value = 400;
  if (window.innerWidth < 580) {
    value = 300;
  } else {
    value = 800;
  }
  const [Componentwidth, changeComponentwidth] = useState(value);

  window.addEventListener("resize", (event) => {
    // changewidth(window.innerWidth);
    if (ref.current) {
      changeComponentwidth(ref.current.offsetWidth);
    }
  });
  const array = [
    {
      title: "MAKE4THON Registration",
      para: "Registration open up for students on Devfolio.",
      date: "26th January-3rd March 2022",
    },
    {
      title: "Bootcamp",
      para: "Knowldgeable week filled with speaker sessions.",
      date: "28th February-5th March 2022",
    },
    {
      title: "24 Hour Hackathon",
      para: "MAKE4THON will be a 24 hour event consisting of a Hackathon with multiple checkpoints in between.",
      date: "5th-6th March 2022",
    },
    {
      title: "Result Declared",
      para: "The ultimate hack will be revealed by our judging panel on 6th March, 2022 and the results will be announced on the Discord server and also be mailed to you.",
      date: "6th March 2022",
    },
  ];
  const LeftCard = (props) => {
    return (
      <div
        className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="2500"
        data-aos-easing="ease-in-out-cubic"
      >
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
          <h1 className="mx-auto text-white font-semibold text-lg">
            {props.index}
          </h1>
        </div>
        <div className="order-1 rounded-lg shadow-xl md:w-5/12 px-6 py-4 text-right schedule-block2">
          <p className="mb-3 text-base text-white">{props.props.date}</p>
          <span
            className="mb-3 font-bold text-lg md:text-2xl"
            style={{ color: "#EEEEEE" }}
          >
            {props.props.title}
          </span>
          <p className="text-sm md:text-base leading-snug text-black-50 text-opacity-100 p-4">
            {props.props.para}
          </p>
        </div>
      </div>
    );
  };
  const SmallCard = (props) => {
    return (
      <div className="mb-8 flex justify-between items-center w-full right-timeline">
        <div
          className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full"
          style={{ left: "10%" }}
        >
          <h1 className="mx-auto font-semibold text-lg text-white">
            {props.index}
          </h1>
        </div>
        <div
          className={`order-1 schedule-block${props.colr} rounded-lg shadow-xl md:w-5/12 px-4 py-4 text-left`}
          style={{ width: "85%" }}
        >
          <p className="mb-3 text-base text-white">{props.props.date}</p>
          <span
            className="mb-3 font-bold  text-lg md:text-2xl text-left"
            style={{ color: "#EEEEEE" }}
          >
            {props.props.title}
          </span>
          <p className="text-sm md:text-base leading-snug text-black-50 text-opacity-100 p-2">
            {props.props.para}
          </p>
        </div>
      </div>
    );
  };
  const RightCard = (props) => {
    return (
      <div
        className="mb-8 flex justify-between items-center w-full right-timeline"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="2500"
        data-aos-easing="ease-in-out-cubic"
      >
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
          <h1 className="mx-auto font-semibold text-lg text-white">
            {props.index}
          </h1>
        </div>
        <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 text-left schedule-block4">
          <p className="mb-3 text-base text-white">{props.props.date}</p>
          <span
            className="mb-3 font-bold  text-lg md:text-2xl text-left"
            style={{ color: "#EEEEEE" }}
          >
            {props.props.title}
          </span>
          <p className="text-sm md:text-base leading-snug text-black-50 text-opacity-100 p-4">
            {props.props.para}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      id="schedule"
      className="py-2 container-theme pl-6  mt-2 md:py-8"
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-cubic"
    >
      <div className="container mx-auto flex flex-col items-start md:flex-row">
        <div
          className="flex flex-col w-full md:sticky top-8 lg:w-1/3 md:mt-12 pr-8"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-cubic"
        >
          {/* <p className="text-blue-500 uppercase tracking-loose">Timeline</p> */}
          <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 header-theme" style={{color:"#30dc86",fontWeight:"600"}}>
            MAKE4THON TIMELINE
          </p>
          <p className="text-sm md:text-base text-black-50 mb-4 content-theme">
            Here’s your guide to the MAKE4THON. Go through all the
            cards to know the exact schedule of the event.
          </p>
          <span className="text-xl text-blue-500">
            <FontAwesomeIcon
              className="text-lg"
              icon={faMapMarkerAlt}
              fixedWidth
            />{" "}
            HYBRID MODE
          </span>
        </div>
        <div className="ml-0 md:ml-12 lg:w-2/3">
          <div className="container mx-auto w-full h-full pr-6 ">
            <div
              className={`relative wrap overflow-hidden py-10  h-full ${
                Componentwidth < 580 ? "mb-4" : null
              } `}
              ref={ref}
            >
              <div
                className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                style={{ left: Componentwidth < 580 ? "16px" : "50%" }}
              ></div>

              {array.map((props, index) => {
                if (Componentwidth < 580) {
                  if (index % 2 === 0) {
                    return (
                      <SmallCard
                        props={props}
                        index={index + 1}
                        colr="1"
                        key={props.title + Math.random()}
                      />
                    );
                  } else {
                    return (
                      <SmallCard
                        props={props}
                        index={index + 1}
                        colr="3"
                        key={props.title + Math.random()}
                      />
                    );
                  }
                } else {
                  if (index % 2 === 0) {
                    return (
                      <LeftCard
                        props={props}
                        index={index + 1}
                        key={props.title + Math.random()}
                      />
                    );
                  } else {
                    return (
                      <RightCard
                        props={props}
                        index={index + 1}
                        key={props.title + Math.random()}
                      />
                    );
                  }
                }
              })}
            </div>
            {Componentwidth < 580 ? null : (
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out-cubic"
              >
                <picture>
                  <source srcSet="miss_minutes.png" type="image/webp" />
                  <img
                    className="mx-auto -mt-36 md:-mt-36"
                    src="miss_minutes.png"
                    alt="result_img"
                    style={{ width: "25rem", paddingTop: "5rem" }}
                  />
                </picture>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
