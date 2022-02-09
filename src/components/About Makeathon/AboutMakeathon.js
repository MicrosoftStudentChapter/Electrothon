import React from "react";

export default function AboutMakeathon() {
  return (
    <section
      id="about"
      className="relative overflow-hidden mt-2 container-theme p-6"
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-cubic"
    >
      <div className="grid sm:grid-cols-1 md:grid-cols-3  gap-4">
      <div
          className="my-auto md:col-span-2"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-cubic"
        >
          <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme" style={{color:"#30dc86",fontWeight:"600"}}>
            About Makeathon
          </h1>
          <div className="mt-3 text-normal content-theme md:mt-5 md:text-xl lg:mx-0 md:leading-normal" style={{fontWeight:"500"}}>
          MAKEATHON is the archetypal Hackathon of Thapar Institute of Engineering and Technology, is one of the unparalleled events organized by Microsoft Learn Student Chapter. The most awaited Hackathon of the year, our flagship event MAKEATHON 4.0, has indeed proved to be the groundbreaking Hackathon amongst all of North India from the past three years. This 24-hour event will put forth a forum for technology fanatics to showcase their skills and give them a chance to learn with people sharing the same taste. It will be a theme-based event consisting of pre-event workshops. The purpose of MAKEATHON 4.0 is to bring forth astute and dynamic students from various colleges for designing innovative solutions to solve the problem tracks. 
          </div>
        </div>
        <div
          className="hidden md:flex justify-center items-center"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-cubic"
        >
          <picture>
            <source srcSet="developers.webp" type="image/webp" />
            <img
              src="developers.png"
              className="h-auto w-60 mx-auto"
              alt="Electrothon Logo"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
