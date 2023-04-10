import React, { Component } from "react";

class GenreSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGenreIndex: 0,
    };
  }

  selectGenre = (index) => {
    this.setState({
      selectedGenreIndex: index,
    });
    this.props.onSelect(this.props.genres[index]);
  };

  render() {
    return (
      <ul className="genre-select">
        {this.props.genres.map((genre, index) => (
          <li
            key={index}
            className={
              this.state.selectedGenreIndex === index ? "selected" : ""
            }
            onClick={() => this.selectGenre(index)}
          >
            {genre}
          </li>
        ))}
      </ul>
    );
  }
}

export default GenreSelect;
