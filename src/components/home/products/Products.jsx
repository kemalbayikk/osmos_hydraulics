import React, { useState } from "react";
import BtnSlider from "./ButtonSlider";

const Products = () => {
  const data = [
    {
      image: "assets/product_image_1.jpeg",
    },
    {
      image: "assets/product_image_2.jpeg",
    },
    {
      image: "assets/product_image_3.jpeg",
    },
    {
      image: "assets/product_image_4.jpeg",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <section className="products topMargin" id="urunlerimiz">
      <div className="container flex">
        <div className="left mtop">
          <div className="heading">
            <h3>ÜRÜNLERİMİZ</h3>
          </div>
          <h1 className="products-h1"> Osmos-1</h1>
          <h1 className="products-h1">
            {" "}
            El ile Tahrikli Hidrolik Mekanizmali Kama Kaldıraç
          </h1>
          <div className="container-slider ">
            {data.map((obj, index) => {
              return (
                <div
                  key={obj.id}
                  className={
                    slideIndex === index + 1 ? "slide active-anim" : "slide"
                  }
                >
                  <img src={`/assets/product_image_${index + 1}.jpeg`} alt="" />
                </div>
              );
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
              {Array.from({ length: data.length }).map((item, index) => (
                <div
                  onClick={() => moveDot(index + 1)}
                  className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="right">
          {/* <ul className="list">
            <li className="list-item">Single-acting hydraulic lifting wedge with automatic retraction to raise objects</li>
            <li className="list-item">Stepped tip for four lifting height options</li>
            <li className="list-item">Maximum lifting height of 2.02 inches</li>
            <li className="list-item">Maximum lifting force of 16 tons at 10,000 psi hydraulic pressure</li>
            <li className="list-item">Requires a 0.39" access gap between the surface and the object being lifted</li>
          </ul> */}

          <table className="product-table">
            <tr>
              <td className="td-left">Azami Çalışma Basıncı</td>
              <td className="td-right">400 bar</td>
            </tr>
            <tr>
              <td className="td-left">Güç Kaynağı</td>
              <td className="td-right">Hidrolik</td>
            </tr>
            <tr>
              <td className="td-left">Azami Kaldırma Kuvveti</td>
              <td className="td-right">199.28 kN</td>
            </tr>
            <tr>
              <td className="td-left">Kapasite</td>
              <td className="td-right">199.28 kN</td>
            </tr>
            <tr>
              <td className="td-left">Stroke</td>
              <td className="td-right">25 mm</td>
            </tr>
            <tr>
              <td className="td-left">Asgari Açıklık</td>
              <td className="td-right">20mm</td>
            </tr>
            <tr>
              <td className="td-left">Ağırlık</td>
              <td className="td-right">27 Kg</td>
            </tr>
          </table>
          {/* <div className="img">
            <img src="assets/osmos_logo.png" alt=""></img>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Products;
