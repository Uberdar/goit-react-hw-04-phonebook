import React from 'react';

class SearchContact extends React.Component {
  render() {
    return (
      <input
        value={this.props.parseValueToSearchContact}
        className="search_input"
        onChange={this.props.searchValueParse}
      ></input>
    );
  }
}

export default SearchContact;
