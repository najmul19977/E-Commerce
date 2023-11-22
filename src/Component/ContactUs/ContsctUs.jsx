import React from "react";
import img from "../../assets/image/hero-image1.jpg";
import ContactForm from "../ContactForm/ContactForm";
import { Link } from "react-router-dom";

const ContsctUs = () => {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <div>
      <div style={backgroundStyle}>
        <h2 className="text-9xl font-bold text-center mx-auto">Contact Page</h2>
      </div>
      <div className="md:grid grid-cols-2 mt-20">
        <div>
          <h1 className="ext-center text-4xl font-serif font-bold text-left">
            Get In Touch
          </h1>
          <p className="text-xl text-left font-serif">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            numquam vel excepturi perspiciatis exercitationem nisi qui totam
            voluptatum, commodi quos. Amet unde ipsum eum sit suscipit, ratione
            sapiente expedita earum.
          </p>
          <div className="text-left mt-5 mb-5">
            <p className="text-xl ">
              Phone: <Link to="tel:+123456789">123-456-789</Link>
            </p>
            <p className="text-xl mt-2 ">
              Email:{""}
              <Link to="mailto:example@example.com">example@example.com</Link>
            </p>
            <p className="text-xl mt-2 ">
              Location:{" "}
              <Link to="https://maps.google.com/?q=latitude,longitude">
                Click for Map
              </Link>
            </p>
          </div>
        </div>
        <div>
          <ContactForm></ContactForm>
        </div>
      </div>
      <div className="mt-5 mb-5">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.4993020771!2d90.25487291477089!3d23.78106723908492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1700649035447!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContsctUs;
