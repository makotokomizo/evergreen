import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authLogin } from '../../actions/auth';
import * as actions from "../../actions/auth";
import { HOST_URL } from "../../settings";


export class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  static propTypes = {
    authLogin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.authLogin(this.state.username, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    console.log("login.js this.props.isAuthenticated", this.props.isAuthenticated);

    if (this.props.isAuthenticated) {
      // return <Redirect to="/property/property_data" />;
      // return <Redirect to=`${HOST_URL}/property/property_data` />;
      return <Redirect to="/" />;

    }

    const { username, password } = this.state;
    return (
      <section>
      <div className="container">
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
                required
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p id="login-error"></p>
            <p>
              Don't have an account? <Link to="/build/register">Register</Link>
            </p>
          </form>
          {/* <a href="http://localhost:8000/property/property_data"> oraora </a> */}
        </div>
      </div>
      </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,

    // isAuthenticated: state.auth.token !== null,
    loading: state.auth.loading,
    token: state.auth.token,
    username: state.auth.username,
    // chats: state.message.chats
    // participants: state.message.participants
  };
};
const mapDispatchToProps = dispatch => {
  return {
    authLogin: (userName, password) =>
      dispatch(actions.authLogin(userName, password)),
    // logout: () => dispatch(actions.logout()),
    signup: (username, email, password1, password2) =>
      dispatch(actions.authSignup(username, email, password1, password2)),
  };
};
// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

export default connect(mapStateToProps, mapDispatchToProps)(Login);