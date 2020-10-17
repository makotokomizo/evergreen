import React, { Component, Fragment } from 'react'
import { Link as Link0 } from "react-router-dom";
import { connect } from 'react-redux';
// import * as actions from "../actions/auth";
import { logout } from '../actions/auth';

import { Button, Pane, Heading, Text, Icon, IconButton, InfoSignIcon, Avatar, Popover, Position, Menu, Card, toaster, Link } from 'evergreen-ui'
import logo from '../sharero.png';

export class MyNav extends Component {
    render() {
        let yourImage = localStorage.getItem("yourImage");
        
        // console.log(this.props.isAuthenticated)
        return (
            <div>
                <header>
                <Pane display="flex" padding={16} background="orangeTint" borderRadius={0} borderBottom>
                    <Pane flex={1} alignItems="center" display="flex">
                    <Link0 to="/" style={{textDecoration: 'none'}}>
                    <Heading size={600}>
                    <span>
                    {/* <img src={logo} className="png" width="20" height="autos" /> */}
                    &nbsp; ShareRo</span></Heading></Link0>
                    </Pane>
                    <Pane>

                    {/* <Link0 to="/list">
                    <svg height='30px' width='30px'  fill="#333333" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" x="0px" y="0px"><title>filter, settings, configuration</title><g><path d="M54,31H50.34a5.43,5.43,0,0,0-10.68,0H10a1,1,0,0,0,0,2H39.66a5.43,5.43,0,0,0,10.68,0H54a1,1,0,0,0,0-2Zm-9,4.44A3.44,3.44,0,1,1,48.44,32,3.44,3.44,0,0,1,45,35.44Zm9,10H37.34a5.43,5.43,0,0,0-10.68,0H10a1,1,0,0,0,0,2H26.66a5.43,5.43,0,0,0,10.68,0H54a1,1,0,0,0,0-2ZM32,49.89a3.44,3.44,0,1,1,3.44-3.44A3.44,3.44,0,0,1,32,49.89ZM10,18.55h3.66a5.43,5.43,0,0,0,10.68,0H54a1,1,0,0,0,0-2H24.34a5.43,5.43,0,0,0-10.68,0H10a1,1,0,0,0,0,2Zm9-4.44a3.44,3.44,0,1,1-3.44,3.44A3.44,3.44,0,0,1,19,14.11Z"></path></g></svg>
                    </Link0> */}
                    <Link0 to="/listuse">
                        <Text>RoomList</Text>
                    </Link0>

                    {/* {!this.props.isAuthenticated ? (
                    <Fragment>
                    <Link0 to="/login">
                    <Button marginRight={16} appearance="minimal" intent="none">Login</Button>
                    </Link0>

                    <Link0 to="/register">
                    <Button marginRight={16} appearance="minimal" intent="none">Register</Button>
                    </Link0>
                    </Fragment>
                    ) : (
                    <Link href="http://localhost:3000/">
                    <Button marginRight={16} appearance="minimal" intent="none"onClick={() => this.props.logout()} ><span>Logout</span></Button>
                    </Link>

                    )} */}

                    {/* <Popover
                        position={Position.BOTTOM_LEFT}
                        content={
                        <Menu>

                            <Menu.Group>
                            <Menu.Item
                                onSelect={() => toaster.notify('Share')}
                            >
                                Share...
                            </Menu.Item>
                            <Menu.Item
                                // icon="people"
                                onSelect={() => toaster.notify('Move')}
                            >
                                <img src='message.svg' className="svg" width="30" height="autos" />
                                Move...
                            </Menu.Item>
                            <Menu.Item
                                onSelect={() => toaster.notify('Rename')}
                                secondaryText="⌘R"
                            >
                                Rename...
                            </Menu.Item>
                            </Menu.Group>
                            <Menu.Divider />
                            <Menu.Group>
                            <Menu.Item
                                onSelect={() => toaster.danger('Delete')}
                                intent="danger"
                            >
                                Delete...
                            </Menu.Item>
                            </Menu.Group>
                        </Menu>
                        }
                    >
                        <Button marginRight={16} appearance="minimal" intent="none">
                        <span><img src={yourImage} className="png" width="40" height="40" style={{ borderRadius: "50%", objectFit: "cover" }}/>
                        </span></Button>
                    </Popover> */}



                    {/* <Popover
                    position={Position.BOTTOM_LEFT}
                    content={
                        <Menu>
                        <Menu.Group title="Actions">
                            <Avatar
                                src={yourImage}
                                name="Alan Turing"
                                size={50}
                                />
                            <Menu.Item icon="people">ユーザー情報変更</Menu.Item>

                            <Link0 to="host_submit">
                            <Menu.Item icon="circle-arrow-right">家情報</Menu.Item>
                            </Link0>
                            <Menu.Item icon="circle-arrow-right">口座情報</Menu.Item>
                            <Menu.Item icon="circle-arrow-right">認証と推薦</Menu.Item>
                            <Menu.Item icon="edit" secondaryText="⌘R">
                            Rename...
                            </Menu.Item>
                        </Menu.Group>
                        <Menu.Divider />
                        <Menu.Group title="destructive">
                            <Menu.Item icon="trash" intent="danger">
                            Delete...
                            </Menu.Item>
                        </Menu.Group>
                        </Menu>
                    }
                    >
                    <Button marginRight={16}>Accout</Button>
                    </Popover> */}



                    {/* <Button marginRight={16}>Button</Button>
                    <Button appearance="primary">Primary Button</Button> */}
                    </Pane>
                </Pane>
                    
                    
                </header>
            </div>
        )
    }
}


// const mapDispatchToProps = dispatch => {
//     return {
//         logout: () => dispatch(actions.logout()),
//     };
//   };
const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      loading: state.auth.loading,
      token: state.auth.token,
      username: state.auth.username,
    };
  };

export default connect(mapStateToProps, {logout})(MyNav);