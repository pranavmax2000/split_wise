import React, { Component } from 'react';
import { Row, Col, Button, Label, Jumbotron } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import firebase from 'firebase';
import auth from '../firebase';
import { Redirect, Switch } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Signup extends Component{

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.refreshPage=this.refreshPage.bind(this);
    }

    handleSubmit(values){
        const email=values.email;
        const password=values.password;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            alert("Registeration Succesful!");
            this.refreshPage();
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(error.message);
            // ..
        });
    }

    refreshPage(){
        window.location.href="/home";
    }

    render(){
        return(
            <Jumbotron className="sign">
            <div className="container ">
                <div className="row">
                    <div className="col-md-6">
                    <p className="moto"><strong>Split-iT</strong></p>
                    <p><h4><strong>ADD! DIVIDE! Just Split-iT!!!</strong></h4></p>
                    </div>
                    <div className="col-md-6">
                        <div className="col-12 d-flex justify-content-center">
                        <h3>Sign-Up</h3>
                        </div>
                        <div className="col-12">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname">First Name</Label>
                            
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required,minLength:minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                         <Errors className="text-danger" model=".firstname" show="touched"
                                         messages={{
                                             required: 'Required |',
                                             minLength: ' Must be greater than 2 characters! |',
                                             maxLength: ' Must be 15 characters or less!'
                                         }}
                                         />
                                
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname">Last Name</Label>
                                
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required,minLength:minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                         <Errors className="text-danger" model=".lastname" show="touched"
                                         messages={{
                                             required: 'Required |',
                                             minLength: ' Must be greater than 2 characters! |',
                                             maxLength: ' Must be 15 characters or less!'
                                         }}
                                         />
                                
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email">Email</Label>
                                
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,validEmail
                                        }}
                                         />
                                         <Errors className="text-danger" model=".email" show="touched"
                                         messages={{
                                             required: 'Required |',
                                             validEmail: ' Not a valid Email-id!'
                                         }}
                                         />
                                
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="password" >Password</Label>
                            
                                    <Control.password model=".password" id="password" name="password"
                                        placeholder="Password"
                                        className="form-control"
                                        validators={{
                                            required, minLength:minLength(6)
                                        }} />
                                        <Errors className="text-danger" model=".password" show="touched"
                                         messages={{
                                             required: 'Required |',
                                             minLength: ' Must be greater than 8 characters!'
                                         }}
                                         />
                                
                            </Row>
                            
                            <Row className="form-group">
                                <Col md={{size:10, offset: 5}}>
                                    <Button type="submit" color="primary">
                                    Sign Up
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                        </div>
                    </div>
                </div> 
            </div>
            </Jumbotron>
        );
    }
}

export default Signup;