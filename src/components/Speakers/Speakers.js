import React from "react";
import speakerData from "./speakerdata.json";
import JudgesCard from "../Judges/judgesCard";

const Speakers = () => {
  return (
    <section
      id="speakers"
      className="relative overflow-hidden mt-2 container-theme p-6"
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-cubic"
    >
      <h1
        className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme pb-6"
        style={{ textAlign: "center",color:"#30dc86",fontWeight:"600" }}>
        Speakers
      </h1>
      <div className="mt-5 md:mt-0">
        <div className="container mx-auto mt-8">
          <div className="flex flex-row flex-wrap -mx-2 justify-center">
            {speakerData.map((element, index) => {
              return <JudgesCard key={index} judge={element} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Speakers;
