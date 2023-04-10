import { Component } from "react";
import "./App.scss";
import Counter from "./Counter";
import SearchForm from "./SearchForm";
import GenreSelect from "./GenreSelect";

class App extends Component {
  constructor() {
    super();
    this.state = {
      genres: ["All", "Documentary", "Comedy", "Horror", "Crime"],
    };
  }

  onSearch = (searchValue) => {
    console.log(`Search value: ${searchValue}`);
  };

  onSelect = (genreName) => {
    console.log(`${genreName} is selected`);
  };

  render() {
    return (
      <div className="App">
        <Counter />
        <SearchForm inputValue="" onSearch={this.onSearch} />
        <GenreSelect genres={this.state.genres} onSelect={this.onSelect} />
      </div>
    );
  }
}

export default App;
