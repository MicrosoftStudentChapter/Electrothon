import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./faq.css";
import FaqArray from "./faq_master.json";

export default function faq() {
  const FaqTab = (props) => {
    const elem_id = props.props.title + Math.random();
    return (
      <div className="border-b faqs-tab">
        <div className="border-l-2 border-transparent relative">
          <label htmlFor={elem_id} className="opacity-0 absolute">
            Toggler
          </label>
          <input
            className="w-full h-full absolute z-10 cursor-pointer opacity-0"
            type="checkbox"
            name={elem_id}
            id={elem_id}
          />
          <header
            className="flex justify-between items-center pt-5 pb-3 px-4 lg:px-8 cursor-pointer select-none faqs-tab-label"
            htmlFor="chck1"
          >
            <span className="text-normal lg:text-xl w-4/5 subhead-theme">
              {props.props.title}
            </span>
            <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center faqs-test">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </header>
          <div className="faqs-tab-content">
            <div className="mx-4 lg:mx-8 pb-5 text-gray-200">
              <p className="mr-4 lg:mr-8 justify-left">{props.props.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section
      id="faq"
      className="relative overflow-hidden mt-10 lg:px-8 px-2 py-6 container-theme"
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-cubic"
    >
      <h1
        className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme pb-6"
        style={{ textAlign: "center",color:"#30dc86",fontWeight:"600" }}
      >
        Frequently Asked Questions
      </h1>
      <div className="lg:w-3/5 mx-auto">
        <div
          className="row faqs-tabs"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-cubic"
        >
          {FaqArray.map((props) => {
            return <FaqTab props={props} key={props.title + Math.random()} />;
          })}
        </div>
      </div>
    </section>
  );
}
