import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent!");
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a erat
            vehicula ipsum vehicula tempus dignissim vel augue. In hac habitasse
            platea dictumst. Mauris eleifend ullamcorper ullamcorper. Cras erat
            metus, commodo sit amet dignissim quis, imperdiet sed diam. Sed
            tempus dignissim velit non tempus. Suspendisse potenti. Sed
            fermentum augue eget malesuada iaculis. Quisque pharetra eros
            lectus, at semper dui rhoncus ac. Nullam orci sapien, interdum eu
            lacinia eget, blandit elementum sapien. Nunc nulla neque, laoreet
            quis turpis et, bibendum aliquet ligula. Vivamus pharetra lorem eget
            lorem aliquet auctor. Cras et lectus magna. Nam ornare volutpat nibh
            id aliquet. Nulla auctor viverra ornare. Proin volutpat, magna eu
            fringilla aliquet, est arcu dapibus sapien, a porttitor odio neque a
            lectus.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={handleSubmit}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          Adnan Zaib,
          <br />
          Pakistan,
          <br />
          Rawalpindi, <br /> Punjab
          <br />
          <span>adnanzaib6@gmail.com</span>
        </div>

        <div className="map-wrap">
          <MapContainer center={[33.639795, 73.09571]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[33.639795, 73.09571]}>
              <Popup>Do i live here? or not?</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
