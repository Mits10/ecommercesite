import React from 'react';
import Slider from './Slider/slider';
import DailyDeals from './DailyDeals/dailyDeals';
import GenreC from './Genre/genre';
import FooterBanner from './FooterBanner/FooterBanner';

const Home =({statusControl,setProductId})=>{
return(
    <> 
    <Slider/>
    <DailyDeals statusControl={statusControl}setProductId={setProductId}/>
    <GenreC/>
    <FooterBanner/>
   </>
);
}
export default Home;