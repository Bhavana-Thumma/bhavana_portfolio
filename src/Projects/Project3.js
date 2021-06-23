import React from "react";
import "./slider.css";
import { useState } from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
/**
 * @author
 * @function Project
 **/

const Project3 = (props) => {
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
                src="quiz1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="quiz2.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="quiz3.png"
                alt="First slide"
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
            <ol>
              <li>
                Here in this to do list user can add and update the tasks with
                timer and can delete them when needed.
              </li>
              <li>The tasks will be deleted after specified time.</li>
              <li>
                The deleted tasks will be in recycle bin from there user can
                restore or delete them permanently.
              </li>
            </ol>
          </p>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Project3;
