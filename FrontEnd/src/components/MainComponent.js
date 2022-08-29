import React,{ Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contactus from './ContactusComponent';
import Dashboard from './DashboardComponent';
import Signup from './SignupComponent';
import {Switch,Route,Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
      auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (creds) => dispatch(loginUser(creds)),
    logoutUser: () => dispatch(logoutUser())
  });

class Main extends Component{

    render(){
        return(
            <div>
            <Header auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser} />
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/contactus" component={Contactus} />
              <Route path="/signup" component={Signup}/>
              <Redirect to="/home" />
            </Switch>
            <div></div>
            <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));