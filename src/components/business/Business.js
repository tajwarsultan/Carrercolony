import React from "react"
import man2 from "../../assets/images/man2.png"
import man3 from "../../assets/images/man3.png"
import { Row, Col } from 'react-bootstrap';
import {MyButton} from "../button/MyButton";
import "./styleBusiness.css";


export const Business =()=>{
    return(
        <div className="Work session">
        <Row className="">
            <Col xs={12} md={6}>
                <h1 className="top-heading">
                    Do business as you want,
                    hire employess anytime
                    anywhere
                </h1>
                <p class="home-para">
                    Hire employees as you need. Build up your company within your budget.
                    Post a job and get a bunch of proposal for choosing the best for your business.
                    Don’t worry about your money, we keep it safe to us!
                </p>
                <h2 className="sub-title">
                    Here is how Carrer colony works For companies
                </h2>
                <div className="dot">
                        <p className="p1 p">
                          Sign up to Careercolony and set up your portfolio
                        </p>
                        <p className="p2 p">
                           Search for freelancer for your projects.
                        </p>
                        <p className="p3 p">
                           Make offer within your budget.
                        </p>
                        <p className="p4 p">
                           Invite, Interview and chat with freelancer to choose the best!
                        </p>
                        <p className="p5 p">
                           Make payment when you are satisfied!
                        </p>
                </div>
                <MyButton title="Join Now" icon bg=" #00B7E3" color="white"/>
            </Col>
            <Col xs={12} md={6}>
                <img src={man2} className="workImg"/>
                <div className="mini-imgDiv">
                      <img src={man3} className="mini-img"/>
                </div>
            </Col>
         </Row>
        </div>
    )
}