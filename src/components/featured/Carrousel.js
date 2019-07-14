import React from "react";
import Slider from "react-slick";

import juggernaut from "../../resources/images/juggernaut.jpg";
import dota_heroes_2 from "../../resources/images/lanaya.jpg";
import international from "../../resources/images/international_1.png";
import international_china from "../../resources/images/international_4.jpg";
import enigma_bh from "../../resources/images/enigma_bh.jpeg";
import dota2_1 from "../../resources/images/dota2_1.jpg";
import dota2_2 from "../../resources/images/dota2_2.jpg";

const Carrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`, // calculate the slider image height
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${international})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${international_china})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${dota_heroes_2})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${juggernaut})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${enigma_bh})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${dota2_2})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>


        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${dota2_2})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
