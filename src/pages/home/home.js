import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Man from '../../assets/images/man.png'
import Profile from '../../assets/images/Group.png'
import './styleHome.css'
import { MyButton } from '../../components/button/MyButton'
import { Parteners } from '../../components/partners/Parteners'
import { Card } from '../../components/card/Card'
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/card2.png'
import card3 from '../../assets/images/card3.png'

export const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1 className="heading">Hire the best one for your business</h1>
            <p className="para">
              Carrercolony is an exclusive network of the top freelance software
              developers, designers, finance experts, product managers, and
              project managers in the world. Top companies hire freelancers for
              their most important projects.
            </p>
            <MyButton title="Hire Freelancer" icon bg="#00B7E3" color="white" />
            <MyButton title="Find Work" icon bg="white" color=" #00B7E3" />
            <div className="Parteners-div">
              <h2 className="Parteners">Trusted Parteners</h2>
              <Parteners />
              <Parteners />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="ImgContainer">
              <img className="img" src={Man} />
              <img className="img2" src={Profile} />
            </div>
          </Col>
        </Row>
        <Row className="Services">
          <h1 className="services-heading">Most Popular Services</h1>
          <Row d-flex>
            <Col xs={12} md={6} lg={4}>
              <Card
                src={card1}
                lg={4}
                title="Build your App"
                subTitle="Mobile App Design"
              />
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Card
                src={card2}
                title="Create your Identity"
                subTitle="Website Design"
              />
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Card
                src={card3}
                title="Stand your Brand"
                subTitle="Branding Design"
              />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  )
}
