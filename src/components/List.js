import React, { Component, Fragment }  from 'react';
import { Button, Pane, Heading, Text, Icon, InfoSignIcon, Popover, Position, Menu, Card, toaster, Dialog, Paragraph, Strong } from 'evergreen-ui'
import { Link, NavLink } from "react-router-dom";
// import Detail from './Detail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProperty } from '../actions/property';
// import Image from 'react-bootstrap/Image'
import ProgressiveImage from "react-progressive-image-loading";

export class List extends Component {
    static propTypes = {
        property: PropTypes.array.isRequired
    }

 

    componentDidMount() {
        this.props.getProperty();
    }


    render() {


        let activeDetails = this.props.property.map(c => {
                if (true) {
                        return (
                            // <NavLink to="/detail">
                            <NavLink key={c.id} to={`/detail/${c.id}`}>
                            
                        <Card
                            elevation={0}
                            hoverElevation={4}
                            activeElevation={4}
                            float="left"
                            backgroundColor="white"
                            width={350}
                            height={250}
                            margin={24}
                            display="flex"
                            justifyContent="center"
                            // alignItems="center"
                            flexDirection="column"
                            key={c.id}
                        >
                        <span>
                        <img src={c.room_image1} className="detail" width="300" height="130" style={{ objectFit: "cover" }}/>
                        {/* <ProgressiveImage src={c.room_image1} placeholder="tiny-image.jpg">
                        {src => <img src={src} alt="an image" />}
                        </ProgressiveImage> */}
                        {/* <ProgressiveImage
                            // preview="/images/tiny-preview.png"
                            width="300" height="130" 
                            src={c.room_image1}
                            render={(src, style) => <img src={src} style={style} />}
                        /> */}
                        </span>
                        <Pane marginLeft={20} justifyContent="left" flexDirection="column">
                            {/* <Paragraph  size={300} marginTop={5} marginLeft={10} style={{ textAlign: "left" }}>
                            {c.firstName} {c.age}歳 {c.gender}
                            </Paragraph> */}
                            <Paragraph  size={500} marginTop={0} marginLeft={10} style={{ textAlign: "left" }}>
                            <Strong>{c.state} {c.city}</Strong>
                            </Paragraph>
                            <Paragraph  size={500} marginTop={0} marginLeft={10} style={{ textAlign: "left" }}>
                            <Strong>{c.station}駅　徒歩{c.time_to_station1}分</Strong>
                            </Paragraph>

                            <Paragraph  size={350} marginTop={5} marginLeft={10} style={{ textAlign: "left" }}>
                            月{c.price}円
                            </Paragraph>
                        </Pane>
                        {/* <Paragraph  size={300} marginTop={5} marginLeft={10} style={{ textAlign: "left" }}>
                        {c.firstName} {c.age}歳 {c.gender}
                        </Paragraph>
                        <Paragraph  size={500} marginTop={5} marginLeft={10} style={{ textAlign: "left" }}>
                        <Strong>{c.state} {c.city}</Strong>
                        </Paragraph>
                        <Paragraph  size={500} marginTop={1} marginLeft={10} style={{ textAlign: "left" }}>
                        <Strong>{c.station}駅　徒歩{c.time_to_station}分</Strong>
                        </Paragraph>
                        <Paragraph  size={350} marginTop={5} marginLeft={10} style={{ textAlign: "left" }}>
                        月{c.price}円
                        </Paragraph> */}
                        {/* <Text size={300}>月{c.price}円</Text> */}

                            {/* <table>
                                <thread>
                                    <tr　key={c.id}>
                                    <th>{c.state}</th>
                                    <th>{c.city}</th>
                                    <th />
                                    </tr>
                                </thread>
                                <tbody>
                                    <tr key={c.id}>
                                        <td>最寄：{c.station}駅</td>
                                        <td>{c.time_to_station}分</td>
                                    </tr>
                                    <tr>
                                    <td>月{c.price}円</td>

                                    </tr>

                                </tbody>
                            </table> */}
                        </Card>
                        </NavLink>)
                } else {
                    // return 0;
                }
                
            });

        

        return (
            <div>
                {/* <p><InfoSignIcon color="info" marginRight={16} />
                list</p> */}

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