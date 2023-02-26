import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import papyrus from "../assets/img/papyrus.png";
import inventino from "../assets/img/invento.png";
import nyquizest from "../assets/img/nyquizzst.png";
import enigma from "../assets/img/enigma.png";
import renegade from "../assets/img/renegade.png";
import animeQuiz from "../assets/img/anime quiz.png";
import fotography from "../assets/img/photogra.png";
import freeze from "../assets/img/frreze frame.png";
import funFued from "../assets/img/fun fued.png";
import filmlet from "../assets/img/filmlet.png";
import buzz from "../assets/img/buzz conc.png";
import cod from "../assets/img/cod.png";
import cric from "../assets/img/cric.png";
import batminton from "../assets/img/batminton.png";
import football from "../assets/img/futsal.png";
import volley from "../assets/img/volleyball.png";
import iot from "../assets/img/iot.png";
import nw from "../assets/img/nw.png";
import ml from "../assets/img/ml.png";
import pcb from "../assets/img/pcb.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "PAPYRUS",
      description: "Paper Presentation",
      imgUrl: papyrus,
    },
    {
      title: "INVENTINO",
      description: "Project Presentation",
      imgUrl: inventino,
    },
    {
      title: "NYQUIZZEST",
      description: "Circuit Redesigning",
      imgUrl: nyquizest,
    },
    {
      title: "ENIGMA",
      description: "Word Guessing Event",
      imgUrl: enigma,
    },
    {
      title: "RENEGADE",
      description: "Group Discussion",
      imgUrl: renegade,
    },
  ];

  const nonTechs = [
    {
      title: "ANIMESHON KUIZU",
      description: "Anime Quiz",
      imgUrl: animeQuiz,
    },
    {
      title: "FOTOGRAFIA",
      description: "Photography competition",
      imgUrl: fotography,
    },
    {
      title: "FREEZE FRAME",
      description: "Guess the Movie",
      imgUrl: freeze,
    },
    {
      title: "FUN FUED",
      description: "Rapid Quiz Competition",
      imgUrl: funFued,
    },
    {
      title: "FILMLET",
      description: "Find the film",
      imgUrl: filmlet,
    },
    {
      title: "BUZZ CONCORRENZA",
      description: "Buzzed Quiz",
      imgUrl: buzz,
    },
    {
      title: "CALL OF DUTY",
      description: "Call Of Duty Gameplay",
      imgUrl: cod,
    },
  ];

  const outdoors = [
    {
      title: "With in the Boundaries",
      description: "Box Cricket",
      imgUrl: cric,
    },
    {
      title: "SmashZone",
      description: "Badminton",
      imgUrl: batminton,
    },
    {
      title: "FUTSAL",
      description: "Football",
      imgUrl: football,
    },
    {
      title: "VOLLEY",
      description: "VolleyBall",
      imgUrl: volley,
    },
  ];
  const workshops = [
    {
      title: "  INTERNET OF THINGS & EMBEDDED SYSTEMS",
      description: "IOT & Embedded Systems workshop",
      imgUrl: iot,
    },
    {
      title: "SMASHZONE",
      description: "Badminton",
      imgUrl: batminton,
    },
    {
      title: "FUTSAL",
      description: "Football",
      imgUrl: football,
    },
    {
      title: "VOLLEY",
      description: "VolleyBall",
      imgUrl: volley,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Events</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">TECHNICAL</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">NON-TECHNICAL</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">WORKSHOP</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
