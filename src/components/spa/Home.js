import React from 'react';

import { Carousel } from '../ui/Carousel';
import { Footer } from '../ui/Footer';
import { Navbar } from '../ui/Navbar';
import { AboutUs } from './AboutUs';
import { ContactUs } from './ContactUs';
import { Report } from './Report';
import { Services } from './Services';


export const Home = () => {
    return (
        <div>
            <span id='home'/>
            <Navbar />
            <Carousel />
            <AboutUs />
            <Services />
            <Report />
            <ContactUs />
            <Footer />
        </div>
    )
}
