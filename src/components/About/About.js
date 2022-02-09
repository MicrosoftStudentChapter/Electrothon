import React from "react";

export default function About() {
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
          className="hidden md:flex justify-center items-center"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-cubic"
        >
          <picture>
            <source srcSet="aboutmlsc.webp" type="image/webp" />
            <img
              src="about.jpg"
              className="h-auto w-60 mx-auto"
              alt="Electrothon Logo"
            />
          </picture>
        </div>
        <div
          className="my-auto md:col-span-2"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-cubic"
        >
          <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme" style={{color:"#30dc86",fontWeight:"600"}}>
            About Us
          </h1>
          <div className="mt-1 text-xl content-theme md:mt-3 md:text-l lg:mx-0 md:leading-normal" style={{fontWeight:"500"}}>
          Microsoft Student Learn Chapter, Thapar Institute of Engineering and Technology is an eminent 
          technical society with like-minded and driven individuals. MLSC strives to create a community 
          of versatile enthusiasts with progressive mindsets, promoting holistic development, mentoring 
          and motivating its students to refine their critical thinking, coding skills and soft skills. 
          To further this, over the years we have organized various Workshops, Open Source Projects, 
          Tech-meetups and trendsetting competitions like the Makeathon. 
          </div>
        </div>
      </div>
    </section>
  );
}
