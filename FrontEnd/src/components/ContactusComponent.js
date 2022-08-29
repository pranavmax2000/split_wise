import React,{ Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Contactus extends Component{

    render(){
        return(
            <>
            <Jumbotron className="contact"/>
            <div></div>
            <div className="container">
          <div className="row">
          <h6>Contact info</h6><hr/>
          </div>
          <div className="row">
          <p>
            Akash Anand<br/>
          B.Tech <br/>
          Electronics and Communication Engineering<br/>
          2018-22<br/>
          <i className="fa fa-university"></i>: IIT(ISM), Dhanbad<br/> 
          <i className="fa fa-phone fa-lg"></i>: +91 1234 5678<br />
		              
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         anandakash375@gmail.com</a>
          </p>
          {
            window.screen.width>=700&&<>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </>
          }
          </div>
        </div>
        
        </>
         );   
    }
}

export default Contactus;
