import React,{Component} from 'react';


import Title from '../main-page/title';
import Features from '../main-page/feartures';
import Testimonials from '../main-page/testimonials';
import Pricing from '../main-page/pricing';

import Techcrunh from '../images/TechCrunch.png';
import Tnw from '../images/tnw.png';
import Bizinsider from '../images/bizinsider.png';
import Mashable from '../images/mashable.png';
class Home extends Component{
    render(){
        return(
            <div className="App">
        <section id="title">
          <div className="container-fluid">
            <Title />
          </div>
        </section>
        <section id="features">
          <Features />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        {/* 
        <section id="member">
          <MemFilter countries={this.state.countries} filterMember={this.filterMember}/>
          {activeComponent}
        </section>  
        */}      
        <section id="press">
          <img className="press-logo" src={Techcrunh} alt="tc-logo"/>
          <img className="press-logo" src={Tnw} alt="tnw-logo"/>
          <img className="press-logo" src={Bizinsider} alt="biz-insider-logo"/>
          <img className="press-logo" src={Mashable} alt="mashable-logo"/>
        </section>         
        <section id="pricing">
          <Pricing />
        </section>
        <section id="cta">
          <h3 className="cta-heading">Find the True Love of Your Dog's Life Today.</h3>
          <button className="download-button btn btn-lg btn-dark" type="button"><i className="fab fa-apple"></i> Download</button>
          <button className="download-button btn btn-lg btn-light" type="button"><i className="fab fa-google-play"></i>Download</button>
        </section>
    
        <footer id="footer">
          <i className="social-icon fab fa-facebook-f"></i>
          <i className="social-icon fab fa-twitter"></i>
          <i className="social-icon fab fa-instagram"></i>
          <i className="social-icon fas fa-envelope"></i>
          <p>© Copyright 2018 TinDog</p>
        </footer>
      </div>
        );
    }
}
export default Home;
