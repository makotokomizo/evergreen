import React, { Component, Fragment }  from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router } from "react-router-dom";

import { Route, Switch } from "react-router-dom";
import MyNav from './components/MyNav'
import Home from './components/Home';

import Footer from './components/Footer'
import List from './components/List'
import ListUse from './components/ListUse'

import Detail from './components/Detail'
import SubmitHost from './components/SubmitHost'

import Login from './components/accounts/Login'
import { connect } from "react-redux";

import { Provider } from 'react-redux';
import store from './store'
import * as actions from "./actions/auth";
// import "./assets/style.css";

// function App() {
//   return (
//     <div className="App">
//       {/* <Dashboard /> */}
//       <Provider store={store}>
//       <Router>
//         <Fragment>
//           <MyNav />
//             <div className="container">
//               <Switch>
//               <Route exact path="/" component={Dashboard} />
//               <Route exact path="/login" component={Login} />
//               <Route exact path="/list" component={List} />
//               <Route exact path="/detail/:detailID/" component={Detail} />
//               </Switch>
//             </div>
//         </Fragment>
//       </Router>
//       </Provider>
      
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    console.log("App.js componentDidMount")
    this.props.onTryAutoSignup();
  }

  constructor(props) {
    super(props);
    console.log("App.js constructor props", props)
    // callback json を作る。 {message, newmessage}
    // WebSocketInstance.addCallbacks(
    //   this.props.setMessages.bind(this),
    //   this.props.addMessage.bind(this)
    // );
  }

  render() {
    console.log("App.js render this.props.authenticated", this.props.authenticated);
    console.log("App.js render", this.props.authenticated === null);
    return (
      <div className="App">

      {/* <Provider store={store}> */}
       <Router>
         <Fragment>
           <MyNav />
            {/* <div> */}
               <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/dashboard" component={Dashboard} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/list" component={List} />
               <Route exact path="/listuse" component={ListUse} />

               <Route exact path="/detail/:detailID/" component={Detail} />
               <Route exact path="/host_submit/" component={SubmitHost} />
               </Switch>
             {/* </div> */}
             <Footer />
         </Fragment>
       </Router>
       {/* </Provider> */}
       </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // showAddChatPopup: state.nav.showAddChatPopup,
    authenticated: state.auth.token
  };
};

// action を基にして store の値を変化
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    // closeAddChatPopup: () => dispatch(navActions.closeAddChatPopup()),
    // addMessage: message => dispatch(messageActions.addMessage(message)),
    // setMessages: messages => dispatch(messageActions.setMessages(messages))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
