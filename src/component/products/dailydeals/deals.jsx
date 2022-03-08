import React , {useEffect,useState} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Deals=({seeMorep})=>{

    const [productList,setProductList]=useState([]);

    useEffect(() => {
        if(seeMorep){
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((json)=>{
          setProductList(json);
        });
        }else{
        fetch('https://fakestoreapi.com/products?limit=4')
        .then((res)=>res.json())
        .then((json)=>{
          setProductList(json);
        });
        }
      }, [seeMorep]);
console.log(seeMorep);
return(
    <>
        <Grid container  justifyContent={'center'} spacing={2} >
  
  {productList.map((product)=>{
    return (
  <Grid item container md={3} >
  <Grid item xs={12}>
  
    
  <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={product.title.substr(0,10)}
          subheader={product.category}
        />
        <CardMedia
          component="img"
          height="194"
          image={product.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {product.description.substr(0,40)}
          </Typography>
        </CardContent>
       
        
      </Card>
      </Grid>
      </Grid>
      );
  })}
  
     
      </Grid>
    </>
);
}
export default Deals;