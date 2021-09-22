import React from 'react'
import work from '../../assets/images/work.png'
import { Row, Col } from 'react-bootstrap'
import './styleWork.css'
import { MyButton } from '../button/MyButton'
import earn from '../../assets/images/earn.png'

export const Work = () => {
  return (
    <div className="Work session">
      <Row className="">
        <Col xs={12} md={6}>
          <img src={work} className="workImg" />
          <div className="earn-card">
            <img src={earn} className="earn-img" />
            <h6 className="Congratulation">Congratulation!</h6>
            <p className="earn-para">
              Keli accepted your delivery. You’ve earned $250.00
            </p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <h1 className="top-heading">
            Work on your way, Freelance with the largest company
          </h1>
          <p class="home-para">
            Meet with new clients everyday, and deliver your talent for reaching
            high. Unleash your skill day by day. Work on your time and build up
            your carrer on your way. Make a great profit and sharp your skill.
          </p>
          <h2 className="sub-title">
            Here is how Carrer colony works for Freelancer
          </h2>
          <div className="dot">
            <p className="p1 p">
              Sign up to Careercolony and set up your portfolio
            </p>
            <p className="p2 p">Search for your preferable projects</p>
            <p className="p3 p">
              Submit quotation on project that match your skill
            </p>
            <p className="p4 p">
              Chat with Client, make the deal, and get start on your project
            </p>
            <p className="p5 p">
              After delivering the goods, get your payments through Carrercolony
            </p>
          </div>
          <MyButton title="Join Now" icon bg=" #00B7E3" color="white" />
        </Col>
      </Row>
    </div>
  )
}
