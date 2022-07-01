import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(message);
    console.log(form.current);
    emailjs
      .sendForm(
        "service_2vsxk17",
        "template_agsvmpk",
        form.current,
        "au_FGFlyLdGPMjm5D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="contact topMargin" id="iletisim">
        <div className="container flex">
          <div className="left">
            <div className="heading">
              <h3>BİZİMLE İLETİŞİME GEÇİN</h3>
            </div>
            <div className="box">
              {/* <h2>Get in Touch</h2> */}
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p> */}
              <div className="icon">
                <i class="fa-solid fa-location-dot"></i>
                <label>
                  Beştepe Mahallesi, Söğütözü Cd. No:43, 06560
                  Yenimahalle/ANKARA
                </label>
              </div>
              <div className="icon">
                <i class="fa fa-phone"></i>
                <label>+90 534 769 08 95</label>
              </div>
              <div className="icon">
                <i class="fa fa-envelope"></i>
                <label>info@osmoshydraulics.com</label>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="box">
              <form ref={form}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    İsminiz
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Adresiniz
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Mesajınız
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </label>
                </div>
              </form>

              <button type="submit" className="form-button" onClick={sendEmail}>
                Gönder
              </button>
            </div>
          </div>
        </div>
        <div className="legal container">
          <p>Copyright @2022. Tüm Hakları Saklıdır</p>
          {/* <label>
            Design & Developed by <span>GorkCoder</span>
          </label> */}
        </div>
      </section>
    </>
  );
};

export default Contact;
