import React, {Component} from 'react';
import './main.css'

class ProtMain extends Component {
    render() {
        return (
            <div>
                <header>
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
                                <li><a href="collapsible.html"><i className="material-icons nav-icon">shopping_cart</i></a>
                                </li>
                                <li><a href="collapsible.html"><i className="material-icons nav-icon">account_circle</i></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div className="delimiter"></div>
                <div className="container">
                    <section className="categories">
                        <ul className="categories">
                            <li>Замки<i className="material-icons">chevron_right</i></li>
                            <li>Ручки<i className="material-icons">chevron_right</i></li>
                            <li>Серцевины<i className="material-icons">chevron_right</i></li>
                            <li>Отбойники<i className="material-icons">chevron_right</i></li>
                            {/*<li>Ремонт</li>*/}
                        </ul>
                    </section>

                    <main className="content">
                        <div className="slider">
                            <ul className="slides">
                                <li>
                                    <img src="http://drscdn.500px.org/photo/175775869/q%3D80_m%3D2000_k%3D1/v2?webp=true&sig=94ad47b4b54b750347ee85058cd07caec4064a383bff0ef8da522e2d0f0034ef"/>
                                        <div className="caption center-align">
                                            <h3>Замок</h3>
                                            <h5 className="light grey-text text-lighten-3">От сердца твоей мамки!</h5>
                                        </div>
                                </li>
                                <li>
                                    <img src="http://drscdn.500px.org/photo/34911668/q%3D80_m%3D2000/v2?webp=true&sig=80e5eb2c10e1f3dfb70e38067420805903c58b434bb81b76f37cf5b8ddcb66e3"/>
                                        <div className="caption left-align">
                                            <h3>Навесные замки</h3>
                                            <h5 className="light grey-text text-lighten-3">Зависни по полной</h5>
                                        </div>
                                </li>
                            </ul>
                        </div>
                    </main>
                </div>

                <footer>

                </footer>
            </div>
        );
    }
}

export default ProtMain;
