import React from 'react'
import { Card } from 'react-bootstrap'
import './../../style/Thingstodo.css'
import { IoIosArrowForward } from "react-icons/io";
import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


function ThingsToDo() {
  const nav = useNavigate()
  const arrowClick = () => {
    nav(-1)
  }
  const data = [{ name: 'Heritage Tour', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/Heritage-Tournov.jpg' }, { name: 'Scuba Diving', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/scubanov.jpg' }, { name: 'Parasailing', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/parasailingnov.jpg' }, { name: 'Trekking  ', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/Trekking.jpg' }, { name: 'Camping', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/Camping.jpg' }, { name: 'KSRTC City Ride', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/city-ride.jpg' }]
  return (
    <div className='pntcntr' style={{ paddingBottom: '40px' }}>
      <h1 style={{ color: 'white' }} onClick={arrowClick}><BsArrowLeftShort /></h1>
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
      <div style={{ textallign: 'center' }}>
        <button style={{ backgroundColor: '#036', color: 'white' }}>FIND MORE ACTIVITIES<IoIosArrowForward /></button>
      </div>
    </div>
  )
}

export default ThingsToDo
