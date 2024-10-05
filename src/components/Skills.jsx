import React from "react";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
// Config
import { skillData, resume } from "../config";

const handleDownload = () => {
  // Create a link element
  const downloadLink = document.createElement("a");
  downloadLink.href = resume; // URL of the PDF in the images folder

  // Set the download attribute with the desired file name
  downloadLink.download = "RyanHaskinsResume.pdf";

  // Append the link to the document
  document.body.appendChild(downloadLink);

  // Trigger a click on the link to start the download
  downloadLink.click();

  // Remove the link from the document
  document.body.removeChild(downloadLink);
};

// #region component
const Skills = () => {
  const theme = useSelector(selectMode);

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container className="text-center">
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Skills"} />
          </Container>
          <Row className="mt-3 align-items-center">
            {skillData.map((skills) => {
              return (
                <Col xs={4} key={skills.id} className="my-md-5">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          {resume && (
            <Button
              onClick={handleDownload}
              size="lg"
              variant={theme === "light" ? "outline-dark" : "outline-light"}
              className="mt-5"
            >
              Resume
            </Button>
          )}
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Skills;
