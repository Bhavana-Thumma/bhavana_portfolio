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
        <Col xs={8} style={{ border: "solid gray" }}>
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
                src="jobverz2.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="jobverz4.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="jobverz5.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="jobverz6.png"
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
            Backend: AWS Amplify, Cognito
            <br />
            Code Versioning Systems: Git and GitHub
            <br />
            Link:{" "}
            <a target="blank" href="https://dev.d1lnakdl8cijq4.amplifyapp.com/">
              Jobvez Application
            </a>
            <br />
            Link to {" "}
            <a target="blank" href="https://thumma-bhavana.github.io/bhavana_multiverz_portfolio/">
              Sprint Work
            </a>
          </h6>
          <br />
          <p>
            <strong>Sprint 1: UI/UX design, Work on Web Pages</strong>
            <br />
            <ol>
            <li>Learned about the SCRUM methodology</li>
            <li>Learned various attributes and aspects of SCRUM</li>
            <li>Started implementing the User story 1, which is to create Sign-in page</li>
            <li>Developed Sign-in page UI using React JS</li>
            <li>Where user email and password have to be verified to match the requirement along with toggle password visibility</li>
            <li>Worked on setting up the navbar for sign-in and signup components with toggle mode</li>
            <li>Included social login buttons for user convinience</li>
            <li>Integrated all the the landing/Sign-in/Sign-up/Sign-out pages and worked on their responsiveness</li>
            <li><a href="https://dev.d1lnakdl8cijq4.amplifyapp.com/">Feel free to checkout the Demo</a></li>
            </ol>
          </p>
          <br />
          <p>
            <strong>Sprint 2: AWS-amplify, Cognito, S3</strong>
            <br />
            <ol>
            <li>Learned how to create the User stories and branches in GitHub</li>
            <li>Learned how to write Acceptance criteria for a user </li>
            <li>Started research on how to use AWS Amplify and cognito as the main authentication provider</li>
            <li>AWS Amplify handles user registration, authentication, account recovery and other operations</li>
            <li>Analyzed the cost of AWS Amplify and Cognito and repared a documentation</li>
            <li>Worked on AWS Amplify to authenticate the </li>
            </ol>
          </p>
          <br />
          <p>
            <strong>Sprint 3: Aspiration Page UI</strong>
            <br />
            <ol>
            <li>Started implementing the new user story, which is to create an aspiration page</li>
            <li>Created the User Interface using React JS</li>
            <li>Where user can select the aspired job title from an autocomplete field and select the duration from a drop-down, so that he can proceed</li>
            <li>A navbar with page links and image showing statistics were included</li>
            <li>populated the data list options with job titles retrieved from API.</li>
            </ol>
          </p>
          <br />
          <p>
            <strong>Sprint 4: Resume parsing</strong>
            <br />
            <ol>
            <li>Started Research on how to extract skills from Resume using NLP and Python</li>
            <li>Able to extract skills from the pdf and text file given the list of skills (Bruteforce Algorithm)</li>
            <li>Discovered that two libraries in python ie., Pyreparser and resumeparser, provides the facility to extract skills from resume of any format</li>
            <li>Acquired exposure on getting a specific text like email, phone number, skills, etc using NLP.</li>
            <li>Tried using NLP for skills extraction, some worked and some didn’t</li>
            </ol>
          </p>
          <br />
          <p>
            <strong>Sprint 5: Research-LER[Learning and employment records]</strong>
            <br />
            <ol>
            <li>Started Research on How data is maintained globally</li>
            <li>Checked references on LER from emsi and MIT University</li>
            <li>Learnt how the digital credential systems work and store the credentials</li>
            <li>Got to know how issuer issue the credential and how the learner accepts the credential digitally in either the form of badges and certifications.</li>
            <li>Researced on digital wallets for storing credentials from different sources.</li>
            <li>Right now, only couple of companies are accessing this Credential system all over the world.</li>
            <li><a href="https://www.commerce.gov/sites/default/files/2020-09/LERwhitepaper09222020.pdf">Checkout the white paper on LERs</a></li>
            </ol>
          </p>
          <br />
          <p>
            <strong>Sprint 6: Skills graph</strong>
            <br />
            <ol>
            <li>As a part of aspiration, I worked on skills mapping with the graph based on the demand and highest profiency of the skills.</li>
            <li>The main functionality, of using this page is, it gives the user an option to select the skills from resume/ directly searches for the skill based on job titles and can map 3. on the scale of 0-10.</li>
            <li>User will drag and drop the skill based on the profecincy.</li>
            <li>Designed the UI part based on the scale.</li>
            </ol>
          </p>
          <br />
          <p>
            <strong>Sprint 7: Storage of User Details on S3 using Amplify Storage</strong>
            <br />
            <ol>
            <li>Worked on getting user details from all pages</li>
            <li>Worked on store the user details in S3 using Amplify Storage</li>
            <li>Able to get store the user details in S3</li>
            </ol>
          </p>
          <br />
          <p>
            <strong>Sprint 8: Storage of User Details on S3 using Amplify Storage and Integration</strong>
            <br />
            <ol>
            <li>Done with storing user details</li>
            <li>Able to fetch them to display in userprofile page</li>
            <li>Done integrating all the pages</li>
            </ol>
          </p>
          <br />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Project1;
