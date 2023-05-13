import React from 'react'
import { Card } from 'react-bootstrap'
import './../../style/Thingstodo.css'
import { IoIosArrowForward } from "react-icons/io";


function ThingsToDo() {
  const data = [{ name: 'Heritage Tour', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/Heritage-Tournov.jpg' }, { name: 'Scuba Diving', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/scubanov.jpg' }, { name: 'Parasailing', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/parasailingnov.jpg' }, { name: 'Trekking  ', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/Trekking.jpg' }, { name: 'Camping', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/Camping.jpg' }, { name: 'KSRTC City Ride', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/city-ride.jpg' }]
  return (
    <div className='pntcntr' style={{ textAlign: 'center', paddingBottom: '4z0px' }}>
      <h1 style={{ textAlign: 'center', color: 'white' }}>Things to do in Kerala</h1>

      <div style={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'space-between', padding: '30px 130px' }}>
        {data.map((i) => {
          return (
            <Card style={{ width: '22rem' }} className='img-cntnr'>
              <Card.Img variant="top" src={i.img} />
              <span className='text-contnr'>{i.name}</span>
            </Card>
          )
        })}
      </div>
      <button style={{ backgroundColor: '#036', color: 'white' }}>FIND MORE ACTIVITIES<IoIosArrowForward /></button>
    </div>
  )
}

export default ThingsToDo
