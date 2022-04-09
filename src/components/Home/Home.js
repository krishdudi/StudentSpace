import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";


const Home = () => {
  return (
    <section>
        <Container fluid className="home-section" id="home">
            <Particle />
        </Container>
    </section>
  )
}

export default Home