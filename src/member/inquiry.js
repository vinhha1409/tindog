import React,{Component} from 'react';

class Inquiry extends Component{
    state ={
        name: "",
        type: "",
        flirt: ""
    }
    onNameChange = (e) => {
        e.preventDefault();
        this.setState({name: e.target.value},() => {
        console.log('Name updated');
        console.log(this.state);
        });    
    }

    onTypeChange = (e) => {
        e.preventDefault();
        this.setState({type: e.target.value},() => {
            console.log('Type updated');
            console.log(this.state);
        });
    }

    onFlirtChange = (e) => {
        e.preventDefault();
        this.setState({flirt: e.target.value},() => {
            console.log('Flirt updated');
            console.log(this.state);
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        alert("Submitted!");
        console.log("Submitted!");
        console.log(this.state);
    }

    render() {
        return (
            <form className="mt-2">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Rex"
                        id="name"
                        value={this.state.name}
                        onChange={this.onNameChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Husky"
                        id="type"
                        value={this.state.type}
                        onChange={this.onTypeChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="flirt">Say something to flirt</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder=""
                        id="flirt"
                        value={this.state.flirt}
                        onChange={this.onFlirtChange}/>
                </div>
            <button 
                className="btn btn-primary"
                disabled={this.state.name.length === 0 || this.state.type.length === 0}
                onClick = {this.onSubmit}
            >
                Submit
            </button>   
            </form>
        )
    }
};

export default Inquiry;