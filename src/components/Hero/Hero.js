import React, { useEffect } from "react";
import Timer from "../UI/CountDown/countDown";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

export default function Introduction() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen grid grid-cols-1 xl:grid-cols-5 md:gap-1"
    >
      <div className=" hidden md:block fixed top-0 left-0 z-10 m-4">
        <a
          href="https://mlsctiet.co.in/"
          target="_blank"
          rel="noreferrer noopenor"
        >
        </a>
      </div>
      <div
        className="m-auto md:col-span-2"
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >
        <div className="relative mx-0 md:pb-20 lg:pb-28 xl:pb-32 lg:max-w-2xl lg:w-full">
          <main className="mt-2 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 lg:py-8 xl:mt-28">
            <div className="text-center lg:text-left ">
              <div className="flex justify-center md:hidden">
              </div>
              <h1 className="text-4xl md:tracking-tight text-center md:text-left sm:text-5xl md:text-7xl">
                
                <span className="xl:inline font-extrabold header-theme"></span>
                <a
                  href="https://mlsctiet.co.in/"
                  target="_blank"
                  rel="noreferrer noopenor"
                >
                  <picture>
                    <source srcSet="mkthn.webp" type="image/webp" />
                    <img
                      src="mkthn.png"
                      className="h-auto w-50"
                      alt="Makeathon logo"
                    />
                  </picture>
                </a>
                <span className="block text-white text-xl tracking-wider mt-2" style={{color:"#FFC600"}}>
                  5th-6th March, 2022
                  <br />
                  <p className="text-gray-500 md:text-gray-400 sm:text-gray-400">
                   You code your own destiny now.
                  </p>
                </span>
              </h1>
              <div className="mt-5 sm:mt-8 md:justify-start sm:flex justify-center bug">
                <div
                  className="apply-button h-full"
                  data-hackathon-slug="make4thon"
                  data-button-theme="dark"
                ></div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="flex md:items-center justify-center block h-4/5 w-full md:col-span-3">
        <Timer />
      </div>
    </section>
  );
}
