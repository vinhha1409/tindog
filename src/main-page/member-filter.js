import React, {Component} from 'react';

class MemFilter extends Component{
    state = {}

    onSearchChange = (e) =>{
        const country = e.target.value;
        this.props.filterMember(country);
    }

    render(){
        const search = this.state.search;
        const countries = this.props.countries || [];
        return(
            <div className="form-group row mt_3 filter">                           
                <div className="offset-md-2 col-md-4">
                    <h3>Look for your perfect mathch in:</h3>
                </div>
                <div className="col-md-4">
                    <select className="form-control" value={search} onChange={this.onSearchChange}>
                        {countries.map((c) => <option key={c} value ={c}>{c}</option>)}
                    </select>
                </div>
            </div>
        );
    }
}

export default MemFilter;