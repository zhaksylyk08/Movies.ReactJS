import { Component } from "react";
import "./App.css";
import Counter from "./Counter";
import SearchForm from "./SearchForm";

class App extends Component {
  onSearch = (searchValue) => {
    console.log(`Search value: ${searchValue}`);
  };

  render() {
    return (
      <div className="App">
        <Counter />
        <SearchForm inputValue="" onSearch={this.onSearch} />
      </div>
    );
  }
}

export default App;
