import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from "./Slider.module.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800
  };

  const bg_colors = {
    "blue":"#ADDDD0",
    "purple":"#D2DAFF",
    "orange":"#FFD1D1",
    "pink":"#FFABE1",
  }

  const Item = (props) => {
    return (
    <div className={Style.item} style={{ backgroundColor: bg_colors[props.bg] }}>
      <div className={Style.item_content}>
        <div className={Style.text_sm}>
          {props.text_1}
        </div>
        <div className={Style.text_lg}>
          {props.text_2}
        </div>
        <div className={Style.text_md}>
          {props.text_3}
        </div>
      </div>
      <div className={Style.item_image}><img src={`${props.img_thumb}`} alt="thumbnail slider" /></div>
    </div>
    );
  };

  const Item2 = (props) => {
    return (
    <div className={Style.item} style={{ background: bg_colors[props.bg] }}>
      <div className={Style.item_image} style={{ marginLeft:"-9.5rem" }}><img src={`${props.img_thumb}`} alt="thumbnail slider" /></div>
      <div className={Style.item_content}>
        <div className={Style.text_sm}>
          {props.text_1}
        </div>
        <div className={Style.text_lg}>
          {props.text_2}
        </div>
        <div className={Style.text_md}>
          {props.text_3}
        </div>
      </div>
    </div>
    );
  };

  const items = [
    <Item bg="blue" text_1="For all you are" text_2="Pixel 6a is here." text_3="Buy Pixel 6a and get up to 300$ with eligible phone trade-in." img_thumb="https://fscl01.fonpit.de/devices/67/2067-w320h320.png" />,
    <Item2 bg="purple" text_1="For all you are" text_2="Pixel 6a is here." text_3="Buy Pixel 6a and get up to 300$ with eligible phone trade-in." img_thumb="https://fscl01.fonpit.de/devices/67/2067-w320h320.png" />,
    <Item bg="orange" text_1="For all you are" text_2="Pixel 6a is here." text_3="Buy Pixel 6a and get up to 300$ with eligible phone trade-in." img_thumb="https://fscl01.fonpit.de/devices/67/2067-w320h320.png" />,
    <Item2 bg="pink" text_1="For all you are" text_2="Pixel 6a is here." text_3="Buy Pixel 6a and get up to 300$ with eligible phone trade-in." img_thumb="https://fscl01.fonpit.de/devices/67/2067-w320h320.png" />,
];

  return (
    <div>
      <Slider {...settings}>{items.map((e) => e)}</Slider>
    </div>
  );
}
