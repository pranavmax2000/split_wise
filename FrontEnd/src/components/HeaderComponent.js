import React, { Component } from 'react';
import{ Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import firebase from 'firebase';
import auth from '../firebase';
import Dashboard from './DashboardComponent';
import {Redirect} from 'react-router-dom';


class Header extends Component {
  constructor(props){
    super(props);

    this.state={
      isNavOpen: false,
      istoggleNav: false,
      isLogin: false,
      curUser:''
    };
    this.toggleNav=this.toggleNav.bind(this);
    this.toggleModal=this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    
  }

  toggleNav(){
    this.setState({
      isNavOpen:!this.state.isNavOpen
    });
  }

  toggleModal(){
    this.setState({
        isModalOpen:!this.state.isModalOpen
    });
}

handleLogin(event){
  this.toggleModal();
  event.preventDefault();
  const email=this.email.value;
  const password=this.password.value;
  //alert(email+' '+password);
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    this.setState({isLogin: true, curUser: user.email});
    // ...
    return(<Redirect to="/dashboard" /> );
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

handleLogout() {
  this.setState({isLogin: false},()=>{
    firebase.auth().signOut()
    .then((res)=>{
      alert("Logged Out!");
    })
    .catch((error)=>{
      var errorCode = error.code;
      var errorMessage = error.message;
    })
  });
}

  render() {
    return(
    <>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={this.toggleNav} />
          <NavbarBrand className="mr-auto" href="/home">Split-iT</NavbarBrand>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/home">
                      <span className="fa fa-home fa-lg"></span>Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/dashboard">
                      <span className="fa fa-user fa-lg"></span>Dashboard
                    </NavLink>
                </NavItem>
                
                <NavItem>
                    <NavLink className="nav-link" to="/contactus">
                      <span className="fa fa-address-card fa-lg"></span>Contact Us
                    </NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    { !this.state.isLogin ?
                                        <Button onClick={this.toggleModal}>
                                            <span className="fa fa-sign-in fa-lg"></span> Login
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        :
                                        <div>
                                        <div className="navbar-text mr-3" style={{color: '#ffffff'}}><strong>Welcome!</strong> {this.state.curUser}</div>
                                        <Button onClick={this.handleLogout}>
                                            <span className="fa fa-sign-out fa-lg"></span> Logout
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        </div>
                                    }

                                </NavItem>
                            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="text" id="email" name="email"
                                    innerRef={(input) => this.email = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
    </>
    );
  }
}

export default Header;