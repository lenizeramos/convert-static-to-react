import data from "../data/data.json";

const Paint = () => {
  return (
    <>
      <section className="paint-section about-text left-container" id="paint">
        <h5 data-aos="zoom-out">{data.paint.titleEN}</h5>
        <h3 data-aos="zoom-out">{data.paint.titleCN}</h3>
        <div className="horizontal-divider"></div>
        <img
          src="./images/block_paint_img.png"
          alt="alt-block_paint_img.png"
        ></img>

        <div className="dual-paragraphs">
          <div className="left parallax-scroll">
            {data.paint.content.left.map((paragraph, index) => (
              <p data-aos="zoom-out" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="right parallax-scroll">
            {data.paint.content.right.map((paragraph, index) => (
              <p data-aos="zoom-out" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <button className="btn">Works</button>
      </section>
    </>
  );
};

export default Paint;
