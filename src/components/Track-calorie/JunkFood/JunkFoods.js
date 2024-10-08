import React, { Component } from 'react';
import Data from './Junkdata';
import { CartProvider } from 'react-use-cart';
import ItemCard from './ItemCard';
// import Cart from '../Cart';
import Tracknavbar from '../Tracknavbar';
import { Link } from 'react-router-dom';
import '../CommonCalorie.css';
import Navbar from '../../Navbar/Navbar';
export default class Breakfast extends Component {
    componentDidMount() {
        // Scroll to the top of the page when component mounts
        window.scrollTo(0, 0);
      }
    render() {

        return (
            <><Navbar /><><div>
                <Tracknavbar />
            </div><div>
                    <CartProvider>
                        <h1 className='cal-h1-track text-center mt-3'>Junk Food</h1>

                        <section className='py-4 container'>
                            <div className='row justify-content-center'>
                                {Data.productData.map((item) => {
                                    return <ItemCard img={item.img} title={item.title} calories={item.calories} id={item.id} key={item.id} />;
                                })}
                            </div>
                        </section>

                    </CartProvider>
                </div>
                <div className='common-cal'>
                    <Link className='view-cart-link' to="/cart">View Cart<span>&#8594;</span></Link>
                </div></></>
        )
    }
}

