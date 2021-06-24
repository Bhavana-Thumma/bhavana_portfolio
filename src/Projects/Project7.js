import React from "react";
import { useState } from "react";
import {Row, Col} from "react-bootstrap"

/**
 * @author
 * @function Project5
 **/

const Project7 = (props) => {
  return (
    <div>
      <Row className="Container">
        <Col></Col>
        <Col sm={11}>
          <h4>Technologies used: </h4>
          <h6>
            Programing Language : Python
            <br />
            Process : Web Scraping
            <br />
            Team Size: 1
            <br />
          </h6>
          <br />
          <p>
            <strong>Description</strong>
            <br />
            <ol>
              <li>
                Depicts who is successful Mariah/Rihanna from the wikipedia data about billboard charts from 1992 to 2014.
              </li>
              <li> Used Python and Web Scraping</li>
            </ol>
          </p>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Project7;