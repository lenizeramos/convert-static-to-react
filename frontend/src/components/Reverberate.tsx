import "../sass/reverberate.scss";

const Reverberate = () => {
  return (
    <>
      <section className="reverberate-section">
        <div className="title title-text">
          <h5 data-aos="zoom-out">Reverberate</h5>
          <h3 data-aos="zoom-out">迴響</h3>

          <div className="horizontal-divider"></div>
        </div>

        <div className="dual-containers">
          <img
            src="./images/block_reverberate_img.jpg"
            alt="alt block_reverberate_img.jpg img"
          ></img>

          <div className="text-reverberate">
            <div className="left-quotation big-quotation">“</div>

            <div className="middle-block">
              <div className="parallax-scroll" id="content">
                <div className="slides-container">
                  <div className="slide show-slide slide1">
                    <p>
                      鄧先生的畫作絕對有豐潤任何空間的條件!
                      如史詩般的畫面內蘊力度充沛的磁場狀態,柔順的線條,協調不擾存在的空間感!
                    </p>
                    <p>Architect Cape Town 建築公司 開普敦 南非</p>
                    <p>
                      They are definitely of the level that serves to enhance
                      any space. The epic landscapes with strong atmospheric
                      conditions, means that there are not too many strong lines
                      that create tension and disturb the room.
                    </p>
                    <p>Architect Cape Town ,Cape Town, South Africa</p>
                  </div>
                  <div className="slide slide2">
                    <p>
                      內心對鄧先生的畫作由衷感動莫名!
                      您的藝術創作完美融合宋朝傳統山水水墨畫的意象,
                      更貫通當代西方現代抽象主義的表現形式。我未曾在日本及世界各地的藝博館見識過此類畫風的藝術品!
                    </p>
                    <p>Yuusuke Karasawa Architects 建築公司 東京 日本</p>
                    <p>
                      I am moved by looking at Mr. Teng’s works from the bottom
                      of my heart. I think Calvin’s work achieves great
                      combination of the tradition of ink painting and landscape
                      painting on Song Dynasty in China and the abstract
                      expressionism on modern and contemporary Western Society.
                      I have never seen that kind of artwork in Japan and in
                      museums from around the world.
                    </p>
                    <p>Yuusuke Karasawa Architects Tokyo, Japan</p>
                  </div>
                  <div className="slide slide3">
                    <p>千山淙雪出雲端</p>
                    <p>詩人 鄭愁予</p>
                    <p>
                      The overflowing snow blankets the layers of endless
                      mountains, and reaches into the clouds.
                    </p>
                    <p>Cheng Chou-Yu, the renowned poet</p>
                  </div>
                  <div className="slide slide4">
                    <p>
                      鄧志浩先生的作品拋離形制，追索象外之象，畫面雲水流轉、極具中國水墨意味，用複合媒介和油彩體現了中國哲學所特有的天人合一，
                      虛靜忘我的精神境界。
                      更加讓人嘆為觀止的是，作為一個曾經的音樂家，他化聽覺形象為視覺形象，竟把旋律、節奏、和聲、複調、調性、曲式這些只有通過聲音才能傳達的東西“畫”了出來。
                    </p>
                    <p>中國知名藝評家 卜賀</p>
                    <p>
                      In his work, Mr. Calvin Teng has gotten rid of the
                      restrains of forms; he sought after the subtlety beyond
                      the imagery. In the painting, we could see images of
                      clouds and water surging and flowing, which capture the
                      essence of Chinese paintings. With a combination of
                      various media and oil paints, Teng expresses the notion of
                      unity of heaven and mankind, and a virtual yet serene
                      state where one becomes oblivious of the self – a concept
                      that is unique to Chinese philosophy. What amazes us more
                      is that as a former musician, he transformed auditory
                      notes into visual images. To our surprise, he “painted
                      out” melody, rhythm, harmony, polyphony, tonality, and
                      musical form, which were elements that could only be
                      expressed through sounds.
                    </p>
                    <p>Bu He, the prominent Chinese art critic</p>
                  </div>
                  <div className="slide slide5">
                    <p>
                      鄧志浩老師的作品可看到一種自然滴流潑濺、獷悍昂揚、冷峻蒼潤、氤氳渾沌的繪畫語境，連接藝術家心靈的「鏡真」，並以造境的方式及象外所產生的間接隱喻的意圖，產生天地之間協調的悲壯美，也是一種明鏡而玄的美感。是大自然的象徵，又是在時間的流逝中飽嘗著一種沖動和神性的力量，更把感情、文學、哲學底蘊包容其作品之中。
                    </p>
                    <p>藝術家 牧雲人 張貞貴</p>
                    <p>
                      Calvin Teng’s artwork depicts many different forms of
                      nature: dripping, splashing, wild, resilient, cruel, lush,
                      misty or murky, all of which leads to his true heart.
                      Through creating landscape art, Calvin spawns metaphors to
                      resemble the harmonious and solemn beauty of the earth.
                      His artwork contains passionate, poetic and philosophical
                      essence, which epitomizes Mother Nature and will stand as
                      a divine force with the passage of time.
                    </p>
                    <p>Artist, Mu Yun Ren Zhang Zhen Gui</p>
                  </div>
                </div>
              </div>

              <div className="dot-container" id="dot-container">
                <button className="dot active" data-revId="1"></button>
                <button className="dot" data-revId="2"></button>
                <button className="dot" data-revId="3"></button>
                <button className="dot" data-revId="4"></button>
                <button className="dot" data-revId="5"></button>
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
