import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import "./Home.css";

export default function Home() {
  return (
    <div className="home__container">
      <SearchBar />
      <SearchResults />
    </div>
  );
}
