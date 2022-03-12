import React , {useEffect,useState} from 'react';
import './dailyDeals.css'
import Deals from '../../../component/products/dailydeals/deals';
import Grid from '@mui/material/Grid';
const DailyDeals =({statusControl,setProductId})=>{
    const [seeMorep,setSeeMorep]=useState(false);
return(
    <>
    <div className='dailyDeals'>
    <Grid container justifyContent={'center'} spacing={2}>
    <Grid item container md={12} xs={12}><h2>Daily Deals</h2></Grid>
    {seeMorep ?
    <>
    <Grid item container md={12} xs={12}><Deals seeMorep={seeMorep}statusControl={statusControl}setProductId={setProductId}/></Grid>
    <Grid item container md={12} xs={12}><button onClick={()=>setSeeMorep(false)}>See Less</button></Grid>
    </>
    :
    <>
    <Grid item container md={12} xs={12}><Deals seeMorep={seeMorep}statusControl={statusControl}setProductId={setProductId}/></Grid>
    <Grid item container md={12} xs={12}><button onClick={()=>setSeeMorep(true)}>See More</button></Grid>
    </> 
    }

    </Grid>
    </div>
    </>
);
}
export default DailyDeals;