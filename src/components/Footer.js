import React, { Component, Fragment } from 'react'
import { Link as Link0 } from "react-router-dom";
// import { connect } from 'react-redux';

import { Button, Pane, Heading, Text, Paragraph, Icon, IconButton, InfoSignIcon, Avatar, Popover, Position, Menu, Card, toaster, Link } from 'evergreen-ui'
import logo from '../sharero.png';

export class Footer extends Component {
    render() {
        
        return (
                <footer>
                <Pane background="orangeTint" display="flex" padding={16} borderRadius={0}>
                    {/* <Pane flex={1} alignItems="center" display="flex">
                        <Link0 to="/">
                        <Heading size={600}>
                        <span>
                        <img src={logo} className="png" width="20" height="autos" />
                        &nbsp; ShareRo</span></Heading></Link0>
                    </Pane> */}
                    {/* <Pane>
                        <Link0 to="/list">
                        <svg height='30px' width='30px'  fill="#333333" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" x="0px" y="0px"><title>filter, settings, configuration</title><g><path d="M54,31H50.34a5.43,5.43,0,0,0-10.68,0H10a1,1,0,0,0,0,2H39.66a5.43,5.43,0,0,0,10.68,0H54a1,1,0,0,0,0-2Zm-9,4.44A3.44,3.44,0,1,1,48.44,32,3.44,3.44,0,0,1,45,35.44Zm9,10H37.34a5.43,5.43,0,0,0-10.68,0H10a1,1,0,0,0,0,2H26.66a5.43,5.43,0,0,0,10.68,0H54a1,1,0,0,0,0-2ZM32,49.89a3.44,3.44,0,1,1,3.44-3.44A3.44,3.44,0,0,1,32,49.89ZM10,18.55h3.66a5.43,5.43,0,0,0,10.68,0H54a1,1,0,0,0,0-2H24.34a5.43,5.43,0,0,0-10.68,0H10a1,1,0,0,0,0,2Zm9-4.44a3.44,3.44,0,1,1-3.44,3.44A3.44,3.44,0,0,1,19,14.11Z"></path></g></svg>
                        </Link0>
                    </Pane> */}
                    {/* <Pane flex={1} alignItems="center" display="flex">
                        <Link0 to="/">
                        <Heading size={600}>
                        <span>
                        <img src={logo} className="png" width="20" height="autos" />
                        &nbsp; ShareRo</span></Heading></Link0>
                    </Pane> */}
                    <Pane
                        clearfix
                        // elevation={0}
                        float="left"
                        // backgroundColor="white"
                        width={200}
                        height={100}
                        margin={24}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        border="none"
                    >
                        <Text>ShareRo</Text>
                        {/* <Text size={300}>Flat Panes</Text> */}
                    </Pane>

                    <Pane
                        clearfix
                        // elevation={0}
                        float="left"
                        // backgroundColor="white"
                        width={200}
                        height={100}
                        margin={24}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        border="none"
                    >
                        <Text>Media</Text>
                        {/* <Text size={300}>Flat Panes</Text> */}
                    </Pane>

                    <Pane
                        clearfix
                        // elevation={0}
                        float="left"
                        // backgroundColor="white"
                        width={200}
                        height={100}
                        margin={24}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        border="none"
                    >
                        <Text>Contact us</Text>
                        {/* <Text size={300}>Flat Panes</Text> */}
                    </Pane>

                    <Pane
                        clearfix
                        elevation={0}
                        float="left"
                        // backgroundColor="white"
                        width={200}
                        height={100}
                        margin={24}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Text>Legal</Text>
                        {/* <Text size={300}>Flat Panes</Text> */}
                    </Pane>

                </Pane>

                <Pane background="orangeTint" display="flex" padding={0} borderRadius={0} alignItems="center" flexDirection="column">
                    <Pane
                        clearfix
                        // elevation={0}
                        float="right"
                        // backgroundColor="white"
                        width={200}
                        height={100}
                        margin={24}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        // border="none"
                    >
                        <Text>〒220-0012</Text>
                        <Text size={300}>横浜市西区みなとみらい 3-7-1-8F</Text>
                        <Text size={300}>TEL: 07021787646</Text>
                        <Text size={300}>Email: info.sharero@gmail.com</Text>
                        <Text size={300}>&copy; 2020 ShareRo</Text>

                        {/* <Paragraph size={300} marginTop="default" style={{ textAlign: "left" }}>
                        <Text>〒220-0012</Text>
                        <Text size={300}>横浜市西区みなとみらい 3-7-1-8F</Text>
                        <Text size={300}>TEL: 07021787646</Text>
                        <Text size={300}>Email: info.sharero@gmail.com</Text>
                        <Text size={300}>&copy; 2020 ShareRo</Text>
                        </Paragraph> */}
                        {/* <Paragraph size={300} marginTop="default" style={{ textAlign: "left" }}>
                            〒220-0012
                        </Paragraph>
                        <Paragraph size={300} style={{ textAlign: "left" }}>
                            横浜市西区みなとみらい 3-7-1-8F
                        </Paragraph>
                        <Paragraph size={300} style={{ textAlign: "left" }}>
                        TEL: 07021787646
                        </Paragraph>
                        <Paragraph size={300} style={{ textAlign: "left" }}>
                        Email: info.sharero@gmail.com
                        </Paragraph>
                        <Paragraph size={300} style={{ textAlign: "left" }}>
                        &copy; 2020 ShareRo
                        </Paragraph> */}
                    </Pane>

                </Pane>
                </footer>
        )
    }
}
                



export default Footer;