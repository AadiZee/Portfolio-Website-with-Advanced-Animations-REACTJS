import React, { useEffect, useState } from "react";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            nisl convallis sem varius molestie ac laoreet magna. Aliquam
            elementum, purus et maximus feugiat, odio arcu mollis enim, at
            placerat magna eros a ex. Nunc in rutrum orci, sed lobortis nunc.
            Cras sed libero vel leo porta volutpat elementum in justo. In
            pretium nunc quis molestie finibus. Praesent dapibus neque pretium,
            volutpat eros et, pulvinar tellus. Sed aliquam volutpat finibus.
            Aenean laoreet tincidunt dui vitae aliquam. Vestibulum facilisis
            arcu non lacus auctor suscipit. Donec vel neque risus. Mauris cursus
            arcu eget dignissim convallis.
          </p>
          <p>
            Vivamus sit amet ex vitae nisl fermentum posuere vitae ac nibh.
            Quisque efficitur libero nec felis consectetur porta. Mauris odio
            ipsum, tempus et odio eu, malesuada interdum sem. Etiam et facilisis
            urna. Phasellus eget volutpat justo, sit amet luctus nisl. Nunc
            felis neque, cursus vitae nunc in, fringilla hendrerit nisl. Nullam
            at lobortis metus, ac egestas lectus. Nulla tristique iaculis dolor
            at vestibulum. Ut finibus dictum neque. In sit amet mauris quam. Sed
            sapien justo, vestibulum eu interdum ullamcorper, egestas in sem.
            Praesent blandit sapien non ipsum luctus ullamcorper. Aenean sit
            amet lacinia urna.
          </p>
          <p>
            Integer placerat gravida elit sit amet scelerisque. Aenean eu mattis
            felis. Donec augue sapien, posuere eu ipsum eu, convallis malesuada
            turpis. Proin dignissim ante nec mauris commodo tincidunt. Cras elit
            odio, fermentum quis tempor eu, bibendum sit amet erat. Cras eu
            nulla felis. Nulla bibendum congue metus sed pulvinar. Vestibulum
            dignissim faucibus blandit.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faDatabase} color="#DD0031" />
            </div>

            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>

            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>

            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>

            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
