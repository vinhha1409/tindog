import React from 'react';
import Member from '../member';
const RandomMem = (props) => {
    console.log(props);
    console.log("liệu có vào đây khônggg");
if(props.member) return (
    
    <div>                
        <Member member={props.member}/>
    </div>
)
    return (<div>No member at this time</div>)
}

export default RandomMem;