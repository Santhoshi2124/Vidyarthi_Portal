import React, { useEffect, useState } from "react";

function Slider() {
  const images = [
    "/slide1.jpg",
    "/slide2.jpg",
    "/slide3.jpg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="slider">
      <h2>Slider Banners</h2>
      <div className="slider-box">
        <img src={images[index]} alt="Slider Banner" />
      </div>
    </section>
  );
}

export default Slider;
