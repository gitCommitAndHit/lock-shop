import * as React from "react";
import {MdShoppingCart} from "react-icons/lib/md/index";

const Cart = () => {
    return (
        <div className="Cart">
            <div className="Cart__ordered">1</div>
            <div className="Cart__icon">
                <MdShoppingCart height="2rem" width="3rem" className="CartIcon" fill="#c6c5c4"/>
            </div>
        </div>
    )
};
export default Cart;