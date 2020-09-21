import React from 'react'

class SearchInput extends React.Component {

  state = {
    searchString : ''
  }

  handleInput = event => {
    this.setState({searchString: event.target.value});
    this.props.getSearchedBooks(event.target.value);
  }
  
  render() {
    return (
      <div className="form-group mx-sm-3 mb-4">
        <input 
          type="search"
          className="form-control"
          id="bookSearchInput"
          value={this.state.searchString}
          onChange={this.handleInput}
          placeholder="Search for React, Web, Java, HTML ..." />
      </div>
    );
  }
}

export default SearchInput;