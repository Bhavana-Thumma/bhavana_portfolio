import React from "react";
import { useState } from "react";
import {Row, Col} from "react-bootstrap"

/**
 * @author
 * @function Project5
 **/

const Project6 = (props) => {
  return (
    <div>
      <Row className="Container">
        <Col></Col>
        <Col sm={11}>
          <h4>Technologies used: </h4>
          <h6>
            Programing Language : Java
            <br />
            Code Versioning Systems: Git and GitHub
            <br />
            IDE: Eclipse
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
                Designed and developed a Conways Game of Life with GUI. Sucessfully generates all the generations.
              </li>
              <li> Used Test Driven Development methodology and OOPs</li>
            </ol>
          </p>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Project6;
