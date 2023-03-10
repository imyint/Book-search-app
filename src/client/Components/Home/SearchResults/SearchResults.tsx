import { useAppSelector } from "../../../Rtk";
import SearchResultItem from "./SearchResultItem/SearchResultItem";
import { State, IVolumeInfo } from "../../../Types/types";

export default function SearchResults() {
  const dataLoading = useAppSelector(
    (state: State) => state.bookSearch.dataLoading
  );
  const bookResults = useAppSelector(
    (state: State) => state.bookSearch.results
  );

  return (
    <div className="bookresults__div">
      {dataLoading && <h2>Loading...</h2>}
      {bookResults?.map((result: IVolumeInfo) => {
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
