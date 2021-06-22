import React from "react";
import "./slider.css";
import { useState } from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
/**
 * @author
 * @function Project
 **/

const Project1 = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Row>
        <Col></Col>
        <Col xs={10} style={{ border: "solid gray" }}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            style={{ "--first-color": "#AAAAA", "--second-color": "#AAAAA" }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="jobverz1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="jobverz2.PNG"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="jobverz3.PNG"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="jobverz4.PNG"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="jobverz5.PNG"
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
            Frontend : Html, CSS, Bootstrap, React JS
            <br />
            Backend: AWS Amplify, Cognito
            <br />
            Code Versioning Systems: Git and GitHub
            <br />
            Link:{" "}
            <a target="blank" href="https://dev.d1lnakdl8cijq4.amplifyapp.com/">
              Jobvez
            </a>
          </h6>
          <br />
          <p>
            <strong>Sprint 1: Learnings</strong>
            <br />
            Worked on product backlog to understand. Work on Sign-in page
            appearance where user email and password have to be verified to
            match the requirement and eye symbol has to be included for password
            visibility. For sign-in also included social login buttons for a
            better user experience. Worked on setting up the navbar for sign-in
            and signup components with toggle mode. Setting up the font size,
            family, etc, took little time. We have taken the feedback from
            mentors and peers to verify our sprint work and noted changes that
            are needed to be made. The colors and animation settings are done.
            Sign-in and Signup buttons were set. Integrated all the pages and
            worked on their responsiveness. Finally, an appealing sign-in signup
            page is created.
          </p>
          <br />
          <p>
            <strong>Sprint 2: Learnings</strong>
            <br />
            Integrated all the pages and make them responsive. Learned basics of
            AWS Amplify and Cognito and practiced authentication. Analyzed the
            cost of AWS Amplify and Cognito. Prepared the document on cost
            prediction, learned the workflow with Amplify to authenticate, and
            started working on sign-up and sign-in authentication. Working on
            sign-up and sign-in authentication.
          </p>
          <br />
          <p>
            <strong>Sprint 3: Learnings</strong>
            <br />
            Learn How to get skills from the LinkedIn profile with the help of
            documentation. Worked on aspiration page UI. Worked on the basic
            design of the Aspiration page UI, which has one autocomplete field,
            a drop-down, a navbar with page links and image showing statistics,
            and a button to proceed. tried for a better look of autocomplete
            field use the scroll bar for the data list to fit into the area. set
            the page and update the job titles with the given JSON file. later
            populate the options with titles got from API call.
          </p>
          <br />
          <p>
            <strong>Sprint 4: Learnings</strong>
            <br />
            Getting job titles from JSON file is redundant. Worked on finding
            libraries for text extraction from any type of file. Acquired
            exposure on getting a specific text like email, phone number,
            skills, etc using NLP. Could read the pdf and txt files. Worked to
            find different resources to get skills from the resume for further
            process. Able to extract skills from the pdf and text file given the
            list of skills (Bruteforce Algorithm). Worked on UI theme and color
            to make it bluer for a better look.
          </p>
          <br />
          <p>
            <strong>Sprint 5: Learnings</strong>
            <br />
            Worked on changing UI based on client response as a team and made a
            research to know about Digital Credential Systems. Getting more
            insights about digital credentials and advantages of block chain in
            digital credentials. Prepared PPT based on the information we
            collected. Discussed and organised the PPt slides for presentations
            and Presented it to Mentors. Worked on LERs and changing the theme
            of the pages.
          </p>
          <br />
          <p>
            <strong>Sprint 6: Learnings</strong>
            <br />
            Client meeting, retrospective and worked on impediments. Worked on
            Graph page UI in userstories to drag the skill chips into graph
            coloumns according to user proficiency, so that the skill chips will
            automatically get adjusted according to trend. Worked on Setting up
            a left side panel for skill buttons and a droppable table for
            draggable skills for a basic functionality. Then worked on
            auto-adjust the skill chips according to trend setting a dictionary
            with keys: skills and values: trend value. worked on theme and color
            setting, x and y axis setting and auto-shrink buttons and button
            color change.
          </p>
          <br />
          <p>
            <strong>Sprint 7: Learnings</strong>
            <br />
            Worked on graph impediments. Done with Steps to Goal UI using
            Bootstrap 5 and Custom CSS. Research on Imlement S3 Storage of user
            info using Amplify. Amplify reinstallation and configuring storage
            using automated method. Solved the impediments and completed Amplify
            storage setups and start working on storing user details.
          </p>
          <br />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Project1;
