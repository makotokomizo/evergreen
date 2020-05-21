import React, { Component, Fragment }  from 'react';
import { Button, Pane, Heading, Text, Icon, InfoSignIcon, Popover, Position, Menu, Card, toaster, Dialog } from 'evergreen-ui'
import { Link, NavLink } from "react-router-dom";
import Detail from './Detail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProperty } from '../actions/property';
// import Image from 'react-bootstrap/Image'

// import {Component as Reaction} from "@reactions/component";


// const Reaction = require("@reactions/component");


export class List extends Component {
    static propTypes = {
        property: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getProperty();
    }


    render() {


        let activeDetails = this.props.property.map(c => {
                // console.log(c.public);
                if (c.public) {
                        return (
                            // <NavLink to="/detail">
                            <NavLink to={`/detail/${c.id}`}>
                            
                        <Card
                            elevation={0}
                            hoverElevation={4}
                            activeElevation={4}
                            float="left"
                            backgroundColor="white"
                            width={350}
                            height={220}
                            margin={24}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column"
                        >
                        <Text>Title {c.title}</Text>
                        <img src={c.image} className="detail" width="300" height="130" style={{ objectFit: "cover" }}/>
                        {/* <img src={c.image} className="png" style="width: 100%; object-fit: cover;" /> */}

                            <table>
                                <thread>
                                    <tr>
                                    <th>{c.state}</th>
                                    <th>{c.city}</th>
                                    <th />
                                    </tr>
                                </thread>
                                <tbody>
                                    <tr key={c.id}>
                                        <td>最寄：{c.station}駅</td>
                                        <td>{c.time_to_station}分</td>
                                        
                                        {/* <td><button>ff</button></td> */}
                                    </tr>
                                    <tr>
                                    <td>月{c.price}円</td>

                                    </tr>

                                    {/* <tr>{c.time_to_station}分</tr> */}
                                </tbody>
                            </table>
                            <Text size={300}>Flat Panes</Text>
                        </Card>
                        </NavLink>)
                } else {
                    // return 0;
                }
                
            });

        

        return (
            <div>
                <p><InfoSignIcon color="info" marginRight={16} />
                list</p>

                <Fragment>
                <div id="list-container" className="container">
                <div className="row">
                <div className="col-md-9">
                        
                        {/* <Pane clearfix> */}
                            {activeDetails}
                        {/* </Pane> */}

                        </div>

                        <div className="col-md-3">
                            <p>google</p>
                        </div>



                        </div>
                        </div>
                
                    </Fragment>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    property: state.property.property   //reducer index
})

export default connect(mapStateToProps, { getProperty })(List);