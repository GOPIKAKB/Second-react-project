import React from 'react'
import { Card } from 'react-bootstrap'
import './../../style/WhereToGo.css'
import { IoIosArrowForward } from "react-icons/io";

function WhereToGo() {
  const data = [{ name: 'Aralam Wildlife Sanctuary', img: "https://www.keralatourism.org/images/homecontentimage/desktop/aralam_1.jpg" }, { name: 'Thusharagiri Waterfalls', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/thusharagiri-206_011.jpg' }, { name: 'Kerala Biodiversity Museum', img: '	https://www.keralatourism.org/images/homecontentimage/desktop/bio-diveristy-02.jpg' }, { name: 'Bekal Fort', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/Bekal_Fort-1.jpg' }, { name: 'Malarickal Village Tourism', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/malarikkal-03.jpg' }, { name: 'Varkala Beach', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/varkala-03.jpg' }, { name: 'Koyikkal Palace', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/Koyikkal-Palace-2.jpg' }, { name: 'Munnar', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/munnar5.jpg' }]
  return (
    <div style={{backgroundColor:'#e3e7f1',textAlign:'center',paddingBottom:'20px'}}>
      <h1 style={{ color: 'blue', paddingTop: '30px', textAlign: 'center' }}>Top Destinations</h1>
      <div className='cntnr'>
        {data.map((i) => {
          return (
            <Card style={{ width: '18rem' }} className='img-cntnr'>
              <Card.Img variant="top" src={i.img} />
              <span className='textContainer'>{i.name}</span>
            </Card>
          )
        })}
      </div>
      <button style={{backgroundColor:'#036',color:'white'}}>EXPLORE OUR DESTINATION<IoIosArrowForward/></button>
    </div>
  )
}

export default WhereToGo
