import React from 'react';
import Iphone from '../images/iphone6.png';
import 'bootstrap';
const Title = () => (
      <div className="row" >
        <div className="col-lg-6">
          <h1>Meet new and interesting dogs nearby.</h1>
          <button type="button" className="btn btn-dark btn-lg download-button"><i className="fab fa-apple"></i> Download</button>
          <button type="button" className="btn btn-outline-light btn-lg download-button"><i className="fab fa-google-play"></i> Download</button>
        </div>
        <div className="col-lg-6">
          <img className="title-image" src={Iphone} alt="iphone-mockup"/>
        </div>
      </div>
);

export default Title;