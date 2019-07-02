import React,{Component} from 'react';
import Member from '../member';
import RandomMem from '../main-page/random-mem';
import MemFilter from '../main-page/member-filter';
import SearchResults from '../search-results';
class MemRoute extends Component{
  state = {}
  componentDidMount(){
    this.fetchMembers();
  }
  fetchMembers = () =>{
    fetch('/member.json')
    .then(response => response.json())
    .then(allMember => {
      this.allMember = allMember;
      console.log(allMember);
      console.log( " fetch thành cônggggg");
      this.determineRandomMember(); 
      this.determineCountry();
    })
  }
  determineRandomMember = () =>{
    if(this.allMember){
      console.log(this.allMember);
      console.log( " dữ liệu fetch thành công nèeee");
      const randomIndex = Math.floor(Math.random()*this.allMember.length)
      const randomMember = this.allMember[randomIndex];
      console.log(randomMember);
      console.log( "random ra cái này nèeeee");
      this.setState({randomMember}, () =>{
        console.log(this.state);
        console.log( " state nèeee");
      });
    }
  }

  determineCountry = () => {
  const countries = this.allMember ? Array.from(new Set(this.allMember.map(m => m.country))) : []; /*trả về array gồm các quôc gia của member 
                                                                                                    nếu như fetch data thành công
                                                                                                    và dữ liệu đc lưu vào allMember,
                                                                                        trả về array rỗng nếu fetch không thành công */
  countries.unshift(null); /*set the first element in the array to null */  
  console.log(countries);
  console.log("array countries nèeeee")                                                                                     
  this.setState({countries}, () =>{
    console.log(this.state);
    console.log( " state nèeee");
  });                                                                                             
  }
  filterMember = (country) =>{
    this.setState({activeMember: null});
    const filteredMember = this.allMember.filter((h) => h.country === country);
    this.setState({filteredMember}, () =>{
      console.log(this.state);
      console.log( " state nèeee");
    });    
    this.setState({country}, () =>{
      console.log(this.state);
      console.log( " state nèeee");
    });    
  };

  setActiveMember = (member) => {
    this.setState({activeMember: member}, () =>{
      console.log(this.state);
      console.log( " state nèeee");
    });    
  }
    render(){
        let activeComponent = null;
    if(this.state.country)
        activeComponent = <SearchResults country = {this.state.country} 
        filteredMember={this.state.filteredMember} setActiveMember={this.setActiveMember}/>;
      if(this.state.activeMember)
        activeComponent = <Member member ={this.state.activeMember}/>;
      if(!activeComponent)
        activeComponent = <RandomMem member={this.state.randomMember}/>;
        return(
            <div>
                <MemFilter countries={this.state.countries} filterMember={this.filterMember}/>
          {activeComponent}
            </div>           
        );
    }
}

export default MemRoute;