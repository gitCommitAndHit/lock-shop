import * as React from 'react';
import './index.css';
import Cart from "./Cart";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="Right-wrapper">
                    <div className="Right-wrapper__item">
                        <Cart/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;