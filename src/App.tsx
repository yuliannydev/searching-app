import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { mockGifs } from './mock-data/gifsmock.mock';
import { useSearch } from './gifs/hooks/useSearch';

export const App = () => {

	const { gifs, previousTerm, handleSearch, handlePreviousSearchClicked } = useSearch()

	return (
		<>
			{/*  //** Header  */}
			<CustomHeader
				title='Busca tu personaje de Dragon Ball fav'
				description='Encuentra los Gif mas chistosos'
			/>
			{/* //** Search Bar*/}
			<SearchBar
				buttonTitle='Go!'
				placeholder='Search Gif'
				onSearchValue={handleSearch}
			/>

			{/* //** Previous search */}
			<PreviousSearches searches={previousTerm} handlePreviousSearchClicked={handlePreviousSearchClicked}/>

			{/* //** Show search */}
			<GifList renderGifs={gifs.length === 0 ? mockGifs : gifs} />

		</>
	);
};
