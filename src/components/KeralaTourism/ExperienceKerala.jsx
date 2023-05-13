import React from 'react'
import { Card } from 'react-bootstrap/esm'
import './../../style/ExperienceKerala.css'
import { IoIosArrowForward } from "react-icons/io";


function ExperienceKerala() {
  const data = [{ head: 'Ayurveda', descre: 'Ayurveda is the oldest healthcare system in the world. This traditional health care system combines the profound thoughts of medicine and philosophy.', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/ayurveda3.jpg', color: 'red' },
  { head: 'Kerala Cuisine', descre: 'Kerala is every food-lovers paradise. Kerala cuisine offers a multitude of dishes, ranging from the traditional sadya to seafood delicacies. Both vegetarians and non-vegetarians have a wide variety of dishes to choose from.', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/cusine3.jpg', color: 'green' },
  { head: 'Village Life', descre: 'Village life of Gods Own Country is a symphony composed on strings of beauty painted with myriad traditions and cultures.', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/cocnut-climbing-2.jpg', color: 'orange' },
  { head: 'Festivals', descre: 'The festival season, the pride and joy of Kerala, is epitomised by the ferocious beats of the chenda (drums) emanating across the landscape. ', img: 'https://www.keralatourism.org/images/homecontentimage/desktop/pooram.jpg', color: 'blue' }]

  return (
    <div style={{textAlign:'center',paddingBottom:'20px'}}>
      <h1 style={{color:'blue',textAlign:'center',padding:'30px 0px'}}>Experience Kerala</h1>
    <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center',padding:'20px 0px'}}>
      {data.map((i) => {
        return (
          <Card style={{ width: '18rem', borderBottom: '6px solid' ,borderBottomColor:i.color}} className='image-container' >
            <Card.Img variant="top" src={i.img} />
            <span className='text' >{i.head}</span>
            <p className='image-text' style={{ backgroundColor: i.color, opacity:'.5'}}>{i.descre}</p>
          </Card>
        )
      })}
    </div>
    <button style={{backgroundColor:'#036',color:'white'}}>FIND MORE EXPERIENCES<IoIosArrowForward/></button>
    </div>
  )
}


export default ExperienceKerala
