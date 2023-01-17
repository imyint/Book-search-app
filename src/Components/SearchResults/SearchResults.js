import { useSelector } from "react-redux";
import SearchResultItem from "./SearchResultItem/SearchResultItem";

export default function SearchResults() {
  const dataLoading = useSelector((state) => state.bookSearch.dataLoading);
  const bookResults = useSelector((state) => state.bookSearch.results);

  return (
    <div className="bookresults__div">
      {dataLoading && <h2>Loading...</h2>}
      {bookResults?.map((result) => {
        const { id, volumeInfo } = result;
        const imgSrc =
          typeof volumeInfo.imageLinks === "object"
            ? volumeInfo.imageLinks.thumbnail
            : volumeInfo.imageLinks;

        return (
          <SearchResultItem
            key={id}
            id={id}
            volumeInfo={volumeInfo}
            imgSrc={imgSrc}
          />
        );
      })}
    </div>
  );
}
