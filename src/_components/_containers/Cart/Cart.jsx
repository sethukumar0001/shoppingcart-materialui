import React from 'react';
import CartHtml from './CartHtml';
import {useSelector} from 'react-redux';


function Cart(props) {
const cartData = useSelector(state=>state.CartReducer)
    return (
        <div>
            <CartHtml cartData={cartData}/>
        </div>
    );
}

export default Cart;