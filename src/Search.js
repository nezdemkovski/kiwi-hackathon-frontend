import React from 'react';

const Search = props =>
  <div className="search">
    <h1>What do you want to enjoy on your next trip?</h1>
    <form>
      <label>
        <i className="fa fa-search" aria-hidden="true" />

        <input
          type="text"
          placeholder="You can filter activities, e.g. diving, hiking, party, beach, dolphins, ..."
          onChange={props.applySearch}
        />
      </label>
    </form>
  </div>;

export default Search;
