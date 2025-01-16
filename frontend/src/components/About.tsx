import { useEffect } from "react";
import data from "../data/data.json";

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const aboutTextDiv =
        document.querySelector<HTMLDivElement>("#about-text");
      const aboutImgDiv = document.querySelector<HTMLDivElement>(".about-img");
      const distance = window.scrollY;

      if (aboutTextDiv) {
        aboutTextDiv.style.transform = `translateY(${distance * -0.44}px)`;
      }

      if (aboutImgDiv) {
        aboutImgDiv.style.transform = `translateY(${distance * -0.15}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="about-section container" id="about">
        <div className="about-img">
          <img src="./images/guyPortrait.PNG" alt="alt guyPortrait.PNG"></img>
        </div>

        <div id="about-text" className="about-text">
          <h5 data-aos="zoom-out" id="about-target">
            {data.about.titleEN}
          </h5>
          <h3 data-aos="zoom-out">{data.about.titleCN}</h3>

          <div className="horizontal-divider"></div>

          <div className="parallax-scroll">
            {data.about.content.map((paragraph, index) => (
              <p data-aos="zoom-out" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
