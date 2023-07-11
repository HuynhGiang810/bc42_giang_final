import React from "react";
import styles from "./Services.module.scss";
import Slider from "react-slick";
import useWindowResize from "../../../help/useWindowResize";
import data from "./ServicesData.json";

function Services() {
  const size = useWindowResize();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    draggable: true,
    swipeToSlide: true,
  };
  return (
    <>
    <div id="Services" className={styles.background}>
      <div className={styles.container}>
        <h2>Popular services</h2>

          <Slider {...settings} className="d-flex justify-content-center">
              {data.map((item, index) => {
                return (
                  <div className="d-flex justify-content-center slider-package">
                    <div key={item.id} className={styles.services}>
                      <a href={item.link}>
                        <h4>
                          <small>{item.action}</small>
                          {item.title}
                        </h4>
                      </a>
                      <img
                        alt={item.title}
                        src={item.image}
                        data-uw-rm-ima-original="ai artists"
                      />
                    </div>
                  </div>
                );
              })}
          </Slider>
      </div>
    </div>
    </>
  );
}

export default Services;
