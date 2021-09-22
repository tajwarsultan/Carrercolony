import React from 'react'
import arrow from '../../assets/icons/arrow.svg'
import './styles.css'
import img1 from '../../assets/images/img1.svg'
import img2 from '../../assets/images/img2.svg'
import img3 from '../../assets/images/img3.svg'
import img4 from '../../assets/images/img4.svg'
import img5 from '../../assets/images/img5.svg'
import img6 from '../../assets/images/img6.svg'
import eye from '../../assets/icons/Show.svg'

function Project() {
  const items = [
    {
      client: 'Mehu DK',
      time: 'Completed on : 11/09/21',
      icon: img1,
      name: 'CC Web Application Design',
    },
    {
      client: 'MeDinka',
      time: 'Completed on : 12/09/21',
      icon: img2,
      name: 'Camarix Website',
    },
    {
      client: 'Mehu DK',
      time: 'Completed on : 11/09/21',
      icon: img3,
      name: 'Sweetie Day Mobile App',
    },
    {
      client: 'Mehu DK',
      time: 'Completed on : 11/09/21',
      icon: img4,
      name: 'CC Web Application Design',
    },
    {
      client: 'MeDinka',
      time: 'Completed on : 12/09/21',
      icon: img5,
      name: 'Camarix Website',
    },
    {
      client: 'Mehu DK',
      time: 'Completed on : 11/09/21',
      icon: img6,
      name: 'Sweetie Day Mobile App',
    },
  ]
  return (
    <>
      <div className="project-container" style={{ marginTop: '6rem', marginBottom: "6rem" }}>
        <div className="header">
          <h2 className="head">Recently Completed Projeccts</h2>
        </div>
        <div className="projects">
          {items.map((item, i) => {
            return (
              <div className="card card-padding" style={{ width: '18rem' }}>
                <div class="container">
                  <img src={item.icon} className="card-img-top" alt="..." />
                  <div class="overlay">
                    <a href="#" class="icon" title="User Profile">
                      <img className="icon-img" src={eye} alt="" />
                    </a>
                  </div>
                </div>
                <div className="card-body p-0">
                  <h5 className="card-title mt-3">Card title</h5>
                  <p className="card-text">
                    <span>
                      By <strong>{item.client}</strong>
                    </span>
                    <span className="time">{item.time}</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="browse">
          <button style={{ background: '#05AAD1' }}>
            Browse All <img className="arrow" src={arrow} alt="" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Project
