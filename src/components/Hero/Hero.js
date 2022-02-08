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
      style={{marginTop:"4rem"}}
    >
      <div
        className="m-auto col-span-2"
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >
        <div>
          <main>
            <div>
              <div>
              </div>
              <h1>
                <center>
                <a
                  href="https://mlsctiet.co.in/"
                  target="_blank"
                  rel="noreferrer noopenor"
                >
                  <picture>
                    <source srcSet="mkthn.webp" type="image/webp" />
                    <img
                      src="mkthn.png"
                      className="h-auto"
                      alt="Makeathon logo"
                      style={{width:"80%"}}
                    />
                  </picture>
                </a></center>
                <center><span className="text-white text-xl tracking-wider" style={{color:"#FFC600"}}>
                  <strong>5th-6th March, 2022</strong>
                  <br />
                  <p className="text-white-100 md:text-white-100 sm:text-white-100">
                   You code your own destiny.
                  </p>
                </span></center>
              </h1>
              <center><div className="mt-5">
                <div
                  className="apply-button h-full"
                  data-hackathon-slug="make4thon"
                  data-button-theme="dark"
                  style={{margin:"3%"}}
                ></div>
              </div></center>
            </div>
          </main>
        </div>
       <Timer />
      </div>


    </section>
  );
}
