import DailyDeals from './../Home/DailyDeals/dailyDeals';
import './Product.css';
const Product=()=>{
    return(
        <>
        <div className='productA'>
            <div className='productAChild'>
                <div className='imageA'>
                        <h2>hi</h2>
                    </div> 
                    <div className='imageB'>
                    <h2>hi</h2>
                    </div>
            </div>
            <div className='productB'>
                <h2>title</h2>
                <h2>price</h2>
                <h2>size</h2>
                <ul>
                    <li><button>S</button></li>
                </ul>
                <h2>Color</h2>
                <ul>
                    <li>
                        <button>RED</button>
                    </li>
                </ul>
                <h2>Quantity</h2>
                <button>ADD To Basket</button>
                <button>WishList</button>
                <div>
                    <div>
                        <h2>Free Shipping</h2>
                        <p>fffffffffff</p>
                    </div>
                    <div>
                        <h1>Retrurn Policy</h1>
                        <p>fdddddddddd</p>
                    </div>
                </div>
                <button>Description</button>
                <button>Size & Fit</button>
            </div>
        </div>
        <div>
            <h2>Customers also brought these</h2>
            <DailyDeals/>
        </div>
        </>
    );
}
export default Product;