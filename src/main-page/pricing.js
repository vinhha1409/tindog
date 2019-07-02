import React from 'react';

const Pricing = () => (
    <React.Fragment>
        <h2>A Plan for Every Dog's Needs</h2>
        <p>Simple and affordable price plans for your and your dog.</p>
         <div className="row">
            <div className="pricing-column col-lg-4 col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h3>Chihuahua</h3>
                    </div>
                    <div className="card-body">
                    <h2>Free</h2>
                    <p>5 Matches Per Day</p>
                    <p>10 Messages Per Day</p>
                    <p>Unlimited App Usage</p>
                    <button className="btn btn-lg btn-block btn-outline-dark" type="button">Sign Up</button>
                    </div>
                </div>
            </div>
            <div className="pricing-column col-lg-4 col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h3>Labrador</h3>
                </div>
                <div className="card-body">
                    <h2>$49 / mo</h2>
                    <p>Unlimited Matches</p>
                    <p>Unlimited Messages</p>
                    <p>Unlimited App Usage</p>
                    <button className="btn btn-lg btn-block btn-dark" type="button">Sign Up</button>
                </div>
                </div>
            </div>
            <div className="pricing-column col-lg-4">
                <div className="card">
                    <div className="card-header">
                        <h3>Mastiff</h3>
                    </div>
                    <div className="card-body">
                        <h2>$99 / mo</h2>
                        <p>Pirority Listing</p>
                        <p>Unlimited Matches</p>
                        <p>Unlimited Messages</p>
                        <p>Unlimited App Usage</p>
                        <button className="btn btn-lg btn-block btn-dark" type="button">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    
);

export default Pricing;