import React from 'react';
import SearchResultsRow from './search-results-row';

const SearchResults = (props) => {
    const memberRows  = props.filteredMember.map( m =>
        <SearchResultsRow key={m.id.toString()} member={m} 
            setActiveMember={props.setActiveMember}/>);

    return(
        <div className = "mt-2">
            <h4>Results for {props.country}:</h4>
                <table className="table table-hover">
                    <tbody>
                        {memberRows}
                    </tbody>
                </table>
        </div>
        );
}

export default SearchResults;