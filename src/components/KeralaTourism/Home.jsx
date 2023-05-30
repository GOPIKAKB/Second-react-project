import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header';
import ExperienceKerala from './ExperienceKerala'
import WhereToGo   from "./WhereToGo";
import WhereToStay from './whereToStay'
import ThingsToDo from './ThingsToDo'
import PlanYourTrip from './PlanYourTrip'
import TravelCare from './TravelCare'
import ECources from './ECources'
import ENewsletters from './ENewsletters'
import Banner from './Banner'
import NoPage from './NoPage';

function KeralaHome() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/'element={<Banner/>}></Route>
                    <Route path='/experience-kerala' element={<ExperienceKerala />}></Route>
                    <Route path='/where-to-go' element={<WhereToGo />}></Route>
                    <Route path='/where-to-stay' element={<WhereToStay />}></Route>
                    <Route path='/things-to-do' element={<ThingsToDo />}></Route>
                    <Route path='/play-your-trip' element={<PlanYourTrip />}></Route>
                    <Route path='/travel-care' element={<TravelCare />}></Route>
                    <Route path='/e-brochures' element={<ECources />}></Route>
                    <Route path='/e-newsletter' element={<ENewsletters />}></Route>
                    <Route path='*' element={<NoPage/>}></Route>
                </Routes>
            </BrowserRouter>
            {/* <ExperienceKerala />
            <WhereToGo />
            <ThingsToDo /> */}
        </div>
    )
}

export default KeralaHome
