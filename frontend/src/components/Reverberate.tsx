import { useState } from "react";
import data from "../data/data.json";


const Reverberate = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <>
      <section className="reverberate-section" id="reverberate">
        <div className="title title-text">
          <h5 data-aos="zoom-out">{data.reverberate.titleEN}</h5>
          <h3 data-aos="zoom-out">{data.reverberate.titleCN}</h3>
          <div className="horizontal-divider"></div>
        </div>

        <div className="dual-containers">
          <img
            src="./images/block_reverberate_img.jpg"
            alt="alt block_reverberate_img.jpg img"
          />

          <div className="text-reverberate">
            <div className="left-quotation big-quotation">“</div>

            <div className="middle-block">
              <div className="parallax-scroll" id="content">
                <div className="slides-container">
                  {data.reverberate.content.map((slide) => (
                    <div
                      key={slide.id}
                      className={`slide slide${slide.id} ${
                        activeSlide === slide.id ? "show-slide" : ""
                      }`}
                    >
                      {slide.text.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="dot-container" id="dot-container">
                {data.reverberate.content.map((slide) => (
                  <button
                    key={slide.id}
                    className={`dot ${
                      activeSlide === slide.id ? "dot-active" : ""
                    }`}
                    onClick={() => setActiveSlide(slide.id)}
                  />
                ))}
              </div>
            </div>

            <div className="right-quotation big-quotation">”</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reverberate;
