import React from "react";

const About = () => {
  const data = [
    {
      title: "Biz Kimiz ve Neler Yapıyoruz",
      desc1:
        "Biz OSMOS hidrolik olarak enkaz bölgeleri ve bunun yanı sıra endüstriyel konulara hizmet eden alanlarda hızlı ve pratik kullanımı müsait, yenilikçi ve güvenilebilir çözümleri hidrolik gücünü de arkamıza alarak sunuyoruz.",
      desc2:
        "Şirketimiz 2021 yılında kurulmuş olup kurulumu esnasında Türkiye'de bilim ve teknolojiyi teşvik etme ve yönlendirmeyi amaçlayan kurumu TÜBİTAK tarafından genç girişimciler hibesi almaya hak kazanmıştır. Hala bu program içerisinde devam eden şirketimiz TOBB ETÜ kuluçka merkezi olan Garaj yapısı içerisinde kendine bir yer edinmiş ve çalışmarını bu kurum altında TOBB desteğini arkasına alarak sağlamaktadır.",
      cover: "assets/osmos_logo.png",
    },
  ];

  return (
    <>
      <section className="about"  id="hakkimizda">
        <div className="container flex">
          {data.map((val) => {
            return (
              <>
                <div className="left mtop">
                  <div className="heading">
                    <h3>Hakkımızda</h3>
                    <h1>{val.title}</h1>
                  </div>

                  <p>{val.desc1}</p>
                  <p>{val.desc2}</p>
                </div>
                <div className="right">
                    <div className="img">
                        <img src={val.cover} alt=""></img>
                    </div>

                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
