import React, { Component, Fragment } from 'react'
import { Link as Link0 } from "react-router-dom";
// import { connect } from 'react-redux';

import { Button, Pane, Heading, Text, Icon, IconButton, InfoSignIcon, Avatar, Popover, Position, Menu, Card, toaster, Link } from 'evergreen-ui'
import logo from '../sharero.png';

export class Footer extends Component {
    render() {
        
        return (
            // <div>
                {/* <footer>
                <Pane background="orangeTint" display="flex" padding={16} borderRadius={3}>
                    <Pane flex={1} alignItems="center" display="flex">
                    <Link0 to="/">
                    <Heading size={600}>
                    <span>
                    <img src={logo} className="png" width="20" height="autos" />
                    &nbsp; ShareRo</span></Heading></Link0>
                    </Pane>
                    <Pane>
                    <Link0 to="/list">
                    <svg height='30px' width='30px'  fill="#333333" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" x="0px" y="0px"><title>filter, settings, configuration</title><g><path d="M54,31H50.34a5.43,5.43,0,0,0-10.68,0H10a1,1,0,0,0,0,2H39.66a5.43,5.43,0,0,0,10.68,0H54a1,1,0,0,0,0-2Zm-9,4.44A3.44,3.44,0,1,1,48.44,32,3.44,3.44,0,0,1,45,35.44Zm9,10H37.34a5.43,5.43,0,0,0-10.68,0H10a1,1,0,0,0,0,2H26.66a5.43,5.43,0,0,0,10.68,0H54a1,1,0,0,0,0-2ZM32,49.89a3.44,3.44,0,1,1,3.44-3.44A3.44,3.44,0,0,1,32,49.89ZM10,18.55h3.66a5.43,5.43,0,0,0,10.68,0H54a1,1,0,0,0,0-2H24.34a5.43,5.43,0,0,0-10.68,0H10a1,1,0,0,0,0,2Zm9-4.44a3.44,3.44,0,1,1-3.44,3.44A3.44,3.44,0,0,1,19,14.11Z"></path></g></svg>
                    </Link0>
                    </Pane>
                </Pane>
                </footer> */}
                <div className="container"></div>
                <footer>
                <section className="ft-main">
                    <div className="ft-main-item">
                    <h2 className="ft-title">About</h2>
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                    </div>
                    <div className="ft-main-item">
                    <h2 className="ft-title">Resources</h2>
                    <ul>
                        <li><a href="#">Docs</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">eBooks</a></li>
                        <li><a href="#">Webinars</a></li>
                    </ul>
                    </div>
                    <div className="ft-main-item">
                    <h2 className="ft-title">Contact</h2>
                    <ul>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Sales</a></li>
                        <li><a href="#">Advertise</a></li>
                    </ul>
                    </div>
                    <div className="ft-main-item">
                    <h2 className="ft-title">Stay Updated</h2>
                    <p>Subscribe to our newsletter to get our latest news.</p>
                    <form>
                        <input type="email" name="email" placeholder="Enter email address">
                        <input type="submit" value="Subscribe">
                    </form>
                    </div>
                </section>

                <section className="ft-social">
                    <ul className="ft-social-list">
                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-github"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </section>

                <section className="ft-legal">
                    <ul className="ft-legal-list">
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li>&copy; 2019 Copyright Nowrap Inc.</li>
                    </ul>
                </section>
                </footer>
            {/* </div> */}
        )
    }
}




export default Footer;






<footer>                    
                <section className="ft-main">
                    <div className="ft-main-item">
                    <h2 className="ft-title">About</h2>
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                    </div>
                    <div className="ft-main-item">
                    <h2 className="ft-title">Resources</h2>
                    <ul>
                        <li><a href="#">Docs</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">eBooks</a></li>
                        <li><a href="#">Webinars</a></li>
                    </ul>
                    </div>
                    <div className="ft-main-item">
                    <h2 className="ft-title">Contact</h2>
                    <ul>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Sales</a></li>
                        <li><a href="#">Advertise</a></li>
                    </ul>
                    </div>
                </section>

                <section className="ft-social">
                    <ul className="ft-social-list">
                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-github"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </section>

                <section className="ft-legal">
                    <ul className="ft-legal-list">
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li>&copy; 2019 Copyright Nowrap Inc.</li>
                    </ul>
                </section>
                </footer>