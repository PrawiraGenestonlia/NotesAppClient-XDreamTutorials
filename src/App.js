import React, { Component, Fragment } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }
  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  handleLogout = async event => {
    await Auth.signOut();
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/">
              <img
                alt=""
                src="/favicon/favicon.ico"
                width="30"
                height="30"
                className="d-inline-block align-top" />
              <font style={{ color: 'white' }}>Notes App</font>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {this.state.isAuthenticated
              ? <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
              : <Fragment>
                <LinkContainer to="/signup">
                  <Nav.Link>Signup</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </Fragment>
            }
          </Navbar.Collapse>
        </Navbar>

        <Routes childProps={childProps} />
      </div>
    )
  }
}


export default withRouter(App);
