import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="contactus">Contact us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Developer</h5>
                    <address>
		              Akash Anand<br />
		              IIT(ISM), Dhanbad<br />
		              India<br />
		              <i className="fa fa-phone fa-lg"></i>: +91 1234 5678<br />
		              
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:anandakash375@gmail.com">
                         anandakash375@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/profile.php?id=100009061662539"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/akash-anand-690675193/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:anandakash375@gmail.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Split-iT</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;