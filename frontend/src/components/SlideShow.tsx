import { useEffect, useRef } from "react";

const SlideShow = () => {
  const slideShowRef = useRef<HTMLImageElement | null>(null);
  let imageIndex = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideShowRef.current) {
        const destination = `./images/banner0${imageIndex}_desk.png`;
        slideShowRef.current.src = destination;
        imageIndex = imageIndex >= 4 ? 1 : imageIndex + 1;
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="shifting-backgrounds">
      <img
        ref={slideShowRef}
        src="./images/banner01_desk.png"
        alt="Slideshow"
        className="imgAnimation"
      />
    </div>
  );
};

export default SlideShow;
