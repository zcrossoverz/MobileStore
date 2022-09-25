import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from "./ListItem.module.css";

export default function ListItem() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        swipeToSlide: true,
      };


      const Item = (props) => {
        return (
            <div className={Style.item_container}>
                <img src={props.data.thumbnail} alt="thumbnail" style={{ height:"260px", width:"200px" }} />
                <p className={Style.name}>{props.data.name}</p>
                <div className={Style.price}>
                    {props.data.price}
                </div>
            </div>
        )
      }

      const formatVND = (num) => {
        return Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(num);
      }

      const data = {"price": formatVND(20000000),"name":"Iphone 14 Pro Max", "thumbnail":"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-11-global.jpg"};

      const items = [
        <Item data={data} />,
        <Item data={data} />,
        <Item data={data} />,
        <Item data={data} />,
        <Item data={data} />,
        <Item data={data} />,
        <Item data={data} />,
        <Item data={data} />,
        <Item data={data} />,
      ]

  return (
    <div className={Style.container}>
        <div className={Style.label}>
            <h4 className={Style.label_text}>New</h4>
        </div>
        <Slider {...settings} >
            {items.map(e => e)}
        </Slider>

        <div className={Style.label}>
            <h4 className={Style.label_text}>Hot Sale</h4>
        </div>
        <Slider {...settings} >
            {items.map(e => e)}
        </Slider>
    </div>
  )
}
