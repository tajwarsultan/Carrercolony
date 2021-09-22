import React from 'react'
import categ from '../../assets/icons/graphic.svg'
import design from '../../assets/icons/design.svg'
import photo from '../../assets/icons/camera.svg'
import market from '../../assets/icons/digi.svg'
import prog from '../../assets/icons/pro.svg'
import music from '../../assets/icons/music.svg'
import animation from '../../assets/icons/ani.svg'
import writing from '../../assets/icons/writing.svg'
import arrow from '../../assets/icons/arrow.svg'

import './styles.css'
function Categories() {
  const items = [
    { icon: categ, name: 'Graphic Design' },
    { icon: design, name: 'Website Design' },
    { icon: photo, name: 'Photography' },
    { icon: market, name: 'Digital Marketing' },
    { icon: prog, name: 'Programming' },
    { icon: music, name: 'Music & Voice' },
    { icon: animation, name: 'Animation' },
    { icon: writing, name: 'Writting' },
  ]
  return (
    <>
      <div className="categories" style={{ marginTop: '6rem' }}>
        <div className="header">
          <h2 className="head">Available Categories</h2>
        </div>
        <div className="boxes-area">
          {items.map((item, i) => (
            <div className="boxes">
              <div className="icons">
                <img className="icons-img" key={i} src={item.icon} alt="" />
              </div>
              <h2 key={i}> {item.name}</h2>
            </div>
          ))}
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

export default Categories
