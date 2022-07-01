import React from "react";
import * as Scroll from "react-scroll";

const Home = () => {
  let LinkToScroll = Scroll.Link;

  return (
    <>
      <section className="home" id="home">
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src="assets/osmos_isim.png" alt="" className="img" />
            </div>
          </div>
          <div className="right topMargin">
            <h1> YENİLİKÇİ HİDROLİK SİSTEMLERİ</h1>
            <div>
              <h2>
                {" "}
                Tasarladığımız yenilikçi hidrolik sistemleri ile çalışması ve
                ulaşılması zor alanlarda çözüm önerileri sunuyoruz
              </h2>
            </div>
            <div className="socialIcon">
              {/* <i className='fab fa-facebook-f facebook'></i>
                    <i className='fab fa-linkedin-in linkedin'></i> */}
              <button className="primary-btn">
                {" "}
                <LinkToScroll className="home-link"
                  to="iletisim"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1000}
                >
                  Bizimle İletişime Geçin
                </LinkToScroll>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
