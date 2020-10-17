import React, { Component } from 'react'
// import List from './List'
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Button, Pane, Heading, Text, Paragraph, SideSheet, Icon, IconButton, InfoSignIcon, Avatar, Popover, Position, Menu, Card, toaster, Link } from 'evergreen-ui'
import { NavLink } from "react-router-dom";
import LP1 from '../img/LP/coliving.jpg';
import LP2 from '../img/LP/twomen.png';

import Components from './test/Components';
import Component2 from "@reach/component-component";


export default class Home extends Component {
    render() {
        return (
            <Pane>
                <Pane background="orangeTint" display="" paddingTop={50} borderRadius={0}>
                    <div className="container">
                        <Pane marginTop={0}>
                        <Heading size={900} marginTop="">中長期で部屋を借りるなら賃貸不動産よりShareRo</Heading>
                        <Heading size={400} marginTop="default">Flexible Leasing and Easy Process</Heading>
                        <Pane height={30}></Pane>
                        {/* <Link href="/list" color="neutral" style={{textDecoration: 'none'}}> */}
                        <NavLink to={`/list`} style={{textDecoration: 'none'}}>

                        <Pane>
                            <Pane
                            width={200}
                            height={30}
                            margin="auto"
                            color="#F9F9FB"
                            backgroundColor="#ff6f4f"
                            borderRadius="10px"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column">
                                Find your Next Home!</Pane></Pane>
                        </NavLink>
                        {/* </Link> */}
                        </Pane>
                    </div>
                        <Pane height={30}></Pane>

                        <Pane>
                        <img src={LP1} className="" width="100%" height="400" style={{objectFit:"cover"}}/>
                        </Pane>
                        
                </Pane>
                <Pane background="tint1" display="" paddingTop={50} borderRadius={0}>
                <div className="container">

                    <Pane marginTop={0}>
                    <Heading size={400} marginTop="default" fontWeight="bold">Why ShareRo</Heading>
                    <Heading size={800} marginTop="default">礼金0、鍵交換費用0</Heading>
                    <Heading size={800} marginTop="">簡単予約</Heading>
                    <Heading size={800} marginTop="">柔軟な契約期間の新しい部屋の借り方</Heading>

                    <Pane height={30}></Pane>
                    <Pane>
                        <img src={LP2} className="" width="200" height="200" style={{objectFit:"cover"}}/>
                    </Pane>

                    </Pane>
                </div>
                </Pane>

                <Pane background="tint1" display="" paddingTop={50} borderRadius={0}>
                <div className="container">

                    <Pane marginTop={0}>
                    <Heading size={800} marginTop="default">掲載物件を見てみよう</Heading>
                    <Text>私たちは、あなたの住みたい街に部屋を提供しています。街から探してみましょう。</Text>

                    <Pane height={30}></Pane>
                    
                    </Pane> 
                </div>
                </Pane>
                <Pane background="tint1" display="" paddingTop={50} borderRadius={0}>
                    <Pane marginTop={0}>
                    

                    <Pane background="tint1" display="flex" padding={16} borderRadius={0}>
                    <div className="container">
                    <Heading size={400} marginTop="default">ShareRoの仕組み</Heading>
                    <Heading size={800} marginTop="default">3ステップで、よりよい暮らしへ</Heading>
                    <Pane height={30}></Pane>
                    <div className="row">
                        <div className="col-md-4">
                        <Pane
                            // clearfix
                            // elevation={0}
                            // float="left"
                            width={300}
                            height={100}
                            // margin="auto"
                            alignItems="center"
                            border="none"
                            style={{textAlign: "left"}}
                        >
                            <Heading size={800} marginTop="" >1.</Heading>
                            <Heading size={400} marginTop="default">お気に入りの家をみつける</Heading>
                            <Paragraph>掲載物件を見てみよう</Paragraph>
                        </Pane>
                        </div>

                        <div className="col-md-4">
                        <Pane
                            // clearfix
                            // elevation={0}
                            // float="left"
                            width={300}
                            height={100}
                            // margin="auto"
                            alignItems="center"
                            border="none"
                            style={{textAlign: "left"}}
                        >
                            <Heading size={800} marginTop="" >2.</Heading>
                            <Heading size={400} marginTop="default">ホストと繋がる</Heading>
                            <Paragraph>入居日やハウスルールについて、ホストと話しあおう。</Paragraph>
                        </Pane>
                        </div>
                        <div className="col-md-4">
                        <Pane
                            // clearfix
                            // elevation={0}
                            // float="left"
                            width={300}
                            height={100}
                            // margin="auto"
                            alignItems="center"
                            border="none"
                            style={{textAlign: "left"}}
                        >
                            <Heading size={800} marginTop="" >3.</Heading>
                            <Heading size={400} marginTop="default">入居を確定する。</Heading>
                            <Paragraph>初月の料金をShareRoで支払ったら、入居日が決定。</Paragraph>
                        </Pane>
                        </div>
                    </div>
                    <Pane height={30}></Pane>

                    </div>

                    </Pane>

                    </Pane> 
                </Pane>


                {/* <Component2 initialState={{ hue: 0 }}>
                {({ setState, state }) => (
                    <div style={{ textAlign: "center" }}>
                    <button onClick={() => setState({ hue: Math.random() * 360 })}>
                        Generate Triad Colorscheme
                    </button>
                    <br />
                    {[1, 2, 3].map((n) => (
                        <div
                        key={n}
                        style={{
                            display: "inline-block",
                            margin: 10,
                            width: "2em",
                            height: "2em",
                            borderRadius: "50%",
                            background: `hsl(${state.hue + n * 120}, 50%, 50%)`,
                            transition: "background-color 200ms ease",
                        }}
                        />
                    ))}
                    </div>
                )}
                </Component2> */}
                <Component2 initialState={{ isShown: false }}>
                {({ state, setState }) => (
                    <React.Fragment>
                    <SideSheet
                        isShown={state.isShown}
                        onCloseComplete={() => setState({ isShown: false })}
                    >
                        <Paragraph margin={40}>Basic Example</Paragraph>
                    </SideSheet>
                    <Button onClick={() => setState({ isShown: true })}>
                        Show Basic Side Sheet
                    </Button>
                    </React.Fragment>
                )}
                </Component2>
            </Pane>
        )
    }
}
