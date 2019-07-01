import React, {Component} from 'react';
import Inquiry from './inquiry';
import emailIcon from './Email.png';
class member extends Component{
    state ={ inquiryShown : false}

    inquiryToggle = () => {
        this.setState({inquiryShown : !this.state.inquiryShown})
    }

    render(){
        const member = this.props.member;
        const inquiry = this.state.inquiryShown ? <Inquiry member={member} /> : null;
        return(
            <div>
                <div className="row">
                    <div className="col-md-7">
                        <img src={`${member.photo}`} alt="Member"/>
                    </div>
                </div> 
                <div className="row">
                    <h3 className="col-md-12">{member.description}</h3>
                </div>
                <div className="row mt-2">
                    <h5 className="col-md-12">{member.address}</h5>
                    <h6 className="col-md-12">{member.country}</h6>
                </div>
                <div className="col-md-5">
                    <p className="name">{member.name}</p>
                    <img src={emailIcon} height="50" alt="inquiry"
                        onClick={this.inquiryToggle}/>
                    {inquiry}
                </div>  
            </div>
        );
    }
}

export default member;