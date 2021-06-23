import React from "react";
import "./slider.css";
import { useState } from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
/**
 * @author
 * @function Project
 **/

const Project2 = (props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <div>
      <Row>
        <Col></Col>
        <Col xs={8} style={{ border: "solid gray" }}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            style={{ "--first-color": "#AAAAA", "--second-color": "#AAAAA" }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="connect1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="connect2.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="connect3.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col></Col>
      </Row>
      <br />
      <Row className="Container">
        <Col></Col>
        <Col sm={11}>
          <h4>Technologies used: </h4>
          <h6>
            Frontend : Html, CSS, Bootstrap, Javascript, React JS
            <br />
            Code Versioning Systems: Git and GitHub
            <br />
            Team Size: 1
            <br />
            {/* Link:{" "}
            <a target="blank" href="https://dev.d1lnakdl8cijq4.amplifyapp.com/">
              Jobvez
            </a> */}
          </h6>
          <br />
          <p>
            <strong>Description</strong>
            <br />
            Connect Four (also known as Four Up, Plot Four, Find Four, Captain's
            Mistress, Four in a Row, Drop Four, and Gravitrips in the Soviet
            Union) is a two-player connection board game, in which the players
            choose a color and then take turns dropping colored discs into a
            seven-column, six-row vertically suspended grid. The pieces fall
            straight down, occupying the lowest available space within the
            column. The objective of the game is to be the first to form a
            horizontal, vertical, or diagonal line of four of one's own discs.
            Connect Four is a solved game. The first player can always win by
            playing the right moves.
          </p>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Project2;
