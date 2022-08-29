import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {Link} from 'react-router-dom';

class Home extends Component{

    render(){
        return(
            <>
            <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12">
                       <center><p className="moto"><strong>Split-iT</strong></p></center>
                       <center><h4><strong>ADD! DIVIDE! Just Split-iT!!!</strong></h4></center>
                   </div>
               </div>
           </div>
       </Jumbotron>
       <div className="container">
           <div className="row">
               <div className="col-md-4 mt-1">
                <h4>Take Less Stress when sharing expenses!</h4>
                <h3><strong>Just Split-it!!</strong></h3>
                <p>Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</p>
                <p>New User? <Link to="/signup"><Button color="primary">Sign up</Button></Link></p>
            

               </div>
               <div className="col-md-4 ml-5 ml-md-auto d-md-flex justify-content-center mt-1">
               <ul className="list-unstyled home-list">
                    <li><i className="fa fa-check fa-lg"></i> Add groups and friends</li>
                    <li><i className="fa fa-check fa-lg"></i> Split expenses, record debts</li>
                    <li><i className="fa fa-check fa-lg"></i> Equal or unequal splits</li>
                    <li><i className="fa fa-check fa-lg"></i> Calculate total balances</li>
                    <li><i className="fa fa-check fa-lg"></i> Suggested repayments</li>
                    <li><i className="fa fa-check fa-lg"></i> Simplify debts</li>
                </ul>
               </div>
               <div className="col-md-4  ml-5 ml-md-auto d-md-flex justify-content-end mt-1">
               <ul className="list-unstyled home-list">
                    <li><i className="fa fa-check fa-lg"></i> Free of Cost!</li>
                    <li><i className="fa fa-check fa-lg"></i> Add upto 10 members</li>
                    <li><i className="fa fa-check fa-lg"></i> Hassle free Experience</li>
                    <li><i className="fa fa-check fa-lg"></i> Easy to use</li>
                    <li><i className="fa fa-check fa-lg"></i> Suggested repayments</li>
                    <li><i className="fa fa-check fa-lg"></i> Simplify debts</li>
                </ul>
               </div>
           </div>
       </div>
       </>
        );
    }

}

export default Home;