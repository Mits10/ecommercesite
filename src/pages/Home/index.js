import React from 'react';
import Header from './Header/Header';
import Slider from './Slider/slider';
import DailyDeals from './DailyDeals/dailyDeals';
import GenreC from './Genre/genre';
import FooterBanner from './FooterBanner/FooterBanner';
import Footer from './Footer/Footer';
const Home =()=>{
return(
    <>
    <Header/>
    <Slider/>
    <DailyDeals/>
    <GenreC/>
    <FooterBanner/>
    <Footer/>
   </>
);
}
export default Home;