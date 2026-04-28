import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { mockGifs } from './mock-data/gifsmock.mock';
import { useGifSearch } from './gifs/hooks/useGifSearch';

export const App = () => {
  const { gifs, handleSearch, history, handlePreviousSearchClicked } =
    useGifSearch();

  return (
    <>
      {/*  //** Header  */}
      <CustomHeader
        title="Busca tu personaje de Dragon Ball fav"
        description="Encuentra los Gif mas chistosos"
      />
      {/* //** Search Bar*/}
      <SearchBar
        buttonTitle="Go!"
        placeholder="Search Gif"
        onSearchValue={handleSearch}
      />

      {/* //** Previous search */}
      <PreviousSearches
        searches={history}
        handlePreviousSearchClicked={handlePreviousSearchClicked}
      />

      {/* //** Show search */}
      <GifList renderGifs={gifs.length === 0 ? mockGifs : gifs} />
    </>
  );
};
