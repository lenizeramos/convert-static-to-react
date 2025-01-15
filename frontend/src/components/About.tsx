import "../sass/about.scss";

const About = () => {
  return (
    <>
      <section className="about-section container" id="about">
        <div className="about-img">
          <img src="./images/guyPortrait.PNG" alt="alt guyPortrait.PNG"></img>
        </div>

        <div id="about-text" className="about-text">
          <h5 data-aos="zoom-out" id="about-target">
            About
          </h5>
          <h3 data-aos="zoom-out">關於 鄧志浩</h3>

          <div className="horizontal-divider"></div>

          <div className="parallax-scroll">
            <p data-aos="zoom-out"> 鄧志浩，祖籍廣東，1954年生於台灣。</p>
            <p data-aos="zoom-out"> 藝術創作橫跨美術、音樂、戲劇等專業領域。</p>
            <p data-aos="zoom-out">
              個人風格鮮明的抽象畫畫家、民歌手、兒童戲劇導演、編劇、演員、作家、創意課程講師、手作木工、民宿餐廳經營者，是個多元發展的藝術家。
            </p>
            <p data-aos="zoom-out">
              1995年因緣際會師承新加坡抽象畫大師黃意會，自此開啟其抽象畫創作人生。
            </p>
            <p data-aos="zoom-out">
              鄧志浩因其豐富多元的創作背景，內化厚實的生活底蘊，使其作品呈現靜謐、精妙、純淨、優雅，生命力度盈沛飽滿的意境。
            </p>
            <p data-aos="zoom-out">
              框外世界才是創作的理由』是鄧志浩創作的最佳註解！
            </p>
            <p data-aos="zoom-out">
              Originating from Guangdong, born in 1954 in Taiwan. CalvinChih-Hao
              Teng started as a self-taught painter.
            </p>
            <p data-aos="zoom-out">
              For Calvin, life has always been exploring deep into the vast
              unknown. Throughout his artistic career, he has ventured into the
              fields of folk song singer and songwriter, author, to managing his
              own
            </p>
            <p data-aos="zoom-out">
              restaurant. Calvin has also respectfully dedicated 30 years
              perfecting his craft in children's theater as a director,
              playwright, and actor.
            </p>
            <p data-aos="zoom-out">
              During his travels in 1995, Calvin was fortunate to encounter a
              master painter from Singapore. Under his guidance, Calvin found
              his love and passion for abstract painting, a world he was
            </p>
            <p data-aos="zoom-out">
              previously unacquainted with. In time, Calvin ultimately shifted
              his paradigm from composing realism to abstract.
            </p>
            <p data-aos="zoom-out">
              Each painting imbues elements from all realms Calvin has walked
              upon through his journey of life. The audience is drawn in by
              wandering thoughts as each composition emotionally unites them
            </p>
            <p data-aos="zoom-out">
              with grace, purifying and rejuvenating the soul. Calvin has
              concluded art is an entity that propels him onward allowing him to
              pursue peace of mind.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
