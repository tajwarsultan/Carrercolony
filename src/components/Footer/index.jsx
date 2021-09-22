import logo from '../../assets/images/logo.png'
import fb from '../../assets/icons/fb.svg'
import insta from '../../assets/icons/instagram.svg'
import link from '../../assets/icons/linkedin.svg'
import twiter from '../../assets/icons/twitter.svg'
import './styles.css'
export default function Footer() {
  return (
    <>
      <footer>
        <div className="content-footer">
          <div className="link-boxes">
            <ul style={{width:'40%'}} className="box">
              <li className="link_name">
                <img style={{ width: '50px' }} src={logo} alt="" /> <strong>Carrercolony</strong>
              </li>
              <li>
                <span className="logo-text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem.
                </span>
              </li>
              <li>
                <span className="ptds">
                  <strong>Privacy Policy</strong> | <strong>Terms of use</strong> | <strong> Disclaimer</strong> | <strong>Sitemap</strong>
                </span>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li>
                <a href="#"> Website Development</a>
              </li>
              <li>
                <a href="#">Search Engine Optimization</a>
              </li>
              <li>
                <a href="#">Google Advertising</a>
              </li>
              <li>
                <a href="#">Website Intake Form</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Helpful Links</li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Forms</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Get in Touch</li>
              <li>
                <a href="#">Phone: (123) 498-9001</a>
              </li>
              <li>
                <a href="#">Email: info@ccolony.com</a>
              </li>
              <li className="social">
                <img src={fb} alt="" />
                <img src={insta} alt="" />
                <img src={link} alt="" />
                <img src={twiter} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">
              Carrercolony. © Copyright 2021.{' '}
              <a href="#">All Rights Reserved.</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
