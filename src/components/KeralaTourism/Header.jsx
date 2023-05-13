import React from 'react'
import './../../style/header.css'
import { Nav, Navbar } from 'react-bootstrap/esm'
import { Link } from 'react-router-dom'
import { TfiYoutube } from "react-icons/tfi";
import { MdFacebook } from "react-icons/md";
import { AiFillLinkedin, AiFillTwitterCircle, AiOutlineSearch } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { FaPinterest, FaWhatsapp } from "react-icons/fa";
import { } from "react-icons/fa";
function Header() {
  const headerList = [{ name: 'EXPERIENCE KERALA', to: '/experience-kerala' }, { name: 'WHERE TO GO', to: '/where-to-go' }, { name: 'WHERE TO STAY', to: '/where-to-stay' }, { name: 'THINGS TO DO', to: '/things-to-do' }, { name: 'PLAN YOUR TRIP', to: '/play-your-trip' }, { name: 'TRAVEL CARE', to: '/travel-care' }, { name: 'E BROCHURES', to: '/e-brochures' }, { name: 'E NEWSLETTER', to: '/e-newsletter' }]
  return (
    <div className='cntr'>
      <div className='image'>
      <Link to='/'  ><img width={'50%'} src="https://www.keralatourism.org/images/kt/kerala-tourism-title.png?d=18122017" ></img></Link>
      </div>
      <div style={{width:'70%'}}>
        <div style={{ height: '30px',marginLeft:'7px', fontSize: '30px'  }}>
          <TfiYoutube style={{ color: 'red'}} />
          <MdFacebook style={{ color: 'blue' }} />
          <AiFillTwitterCircle style={{ color: 'blue' }} />
          <TiSocialInstagram style={{ color: 'blue' }} />
          <FaWhatsapp style={{ color: 'green' }} />
          <FaPinterest style={{ color: 'red' }} />
          <AiFillLinkedin style={{ color: 'blue' }} />
        </div>
        <Navbar style={{ paddingTop: '30px' ,paddingRight:'10px'}}>
          <Nav >
            {
              headerList.map((i) => {
                return (
                  <Nav.Link href="#home" style={{ fontSize: '12px', }} >
                    <Link style={{ textDecoration: 'none', color: '#ffff' }} to={i.to}>{i.name}</Link>
                  </Nav.Link>
                )
              })
            }
            <AiOutlineSearch style={{color:'white',marginTop:'10px'}}/>
          </Nav>
        </Navbar>
      </div>
    </div>
  )
}

export default Header
