import Grid from '@mui/material/Grid';
import Productlist from '../../component/products/productlist/plist';
const ProductListing=()=>{
    return(
        <>
        <div>
            <Grid container>
                <Grid item md={4}>
                    <Grid item xs={12}>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="vehicle1"> I have a bike</label><br/>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                    <label for="vehicle2"> I have a car</label><br/>
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                    <label for="vehicle3"> I have a boat</label><br/><br/>
                    <input type="submit" value="Submit"/>
                    </Grid>
                </Grid>
                <Grid item md={8}>
                    <Grid item xs={12}>
                        <Productlist/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        </>
    );
}
export default ProductListing;