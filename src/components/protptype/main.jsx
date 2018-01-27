import React, {Component} from 'react';
import './main.css'

class ProtMain extends Component {
    render() {
        return (
            <div>
                <nav className="nav-wrapper">
                    <div className="nav-left">
                        <div className="logo-wrapper">
                            <a href="#">Logo</a>
                        </div>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                    <div className="nav-right">
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="collapsible.html"><i class="material-icons nav-icon">shopping_cart</i></a></li>
                            <li><a href="collapsible.html"><i class="material-icons nav-icon">account_circle</i></a></li>
                        </ul>
                    </div>
                </nav>

                <section>

                </section>

                <footer>

                </footer>
            </div>
        );
    }
}

export default ProtMain;
