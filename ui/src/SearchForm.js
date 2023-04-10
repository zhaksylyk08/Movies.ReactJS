import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.inputValue,
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSearch = () => {
    this.props.onSearch(this.state.inputValue);
  };

  render() {
    return (
      <div>
        <input
          placeholder="What do you want to watch?"
          value={this.state.inputValue}
          onChange={this.handleChange}
          onFocus={this.handleSearch}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              this.handleSearch();
            }
          }}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchForm;
