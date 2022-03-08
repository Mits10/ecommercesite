import ProductListing from "./ProductListing/ProductListing";
import Header from './Home/Header/Header';
import Footer from './Home/Footer/Footer';
import Product from "./Product/Product";
const Page=()=>{
    return(
        <>
        <Header/>
        {/*<ProductListing/>*/}
        <Product/>
        <Footer/>
        </>
    );
}
export default Page;