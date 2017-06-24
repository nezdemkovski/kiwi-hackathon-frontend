import React from 'react';

const Search = props =>
  <div className="search">
    <form>
      <label>
        <i className="fa fa-search" aria-hidden="true" />

        <input
          type="text"
          placeholder="Diving, beach, hiking, party, ..."
          onChange={props.applySearch}
        />
      </label>
    </form>
  </div>;

export default Search;
