import React from 'react';


const SearchResultsRow= (props) =>{
    const setActive =(e) =>{
        e.preventDefault();
        props.setActiveMember(props.member);
    }

    return(
        <tr onClick={setActive}>
            <td>{props.member.address}</td>
            <td>{props.member.country}</td>
            <td>{props.member.name}</td>
        </tr>
    );
}

export default SearchResultsRow;