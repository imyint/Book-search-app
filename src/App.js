import SearchBar from "./Components/SearchBar/SearchBar";
import SearchResults from "./Components/SearchResults/SearchResults";
import Wishlist from "./Components/Wishlist/Wishlist";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="books__div">
        <SearchBar />
        <SearchResults />
      </div>
      <div className="wishlist__div">
        <Wishlist />
      </div>
    </div>
  );
}

export default App;
