import { useState } from 'react';
import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';
import type { Gif } from './gifs/interfaces/gif.interface';
import { mockGifs } from './mock-data/gifsmock.mock';

export const App = () => {
	const [gifs, setGifs] = useState<Gif[]>([])

	const handleSearch = async (search: string) => {

		//Search es la busqueda colocada en el Input
		if (search !== '') {

			search = search.trim().toLowerCase()
			
				if (previousTerm.includes(search)) return;
					
					const inputSearches = [search, ...previousTerm]

					// La peticion a la api key
					const getGifs = await getGifsByQuery(search);
					
					//Estado actual de la api key
					setGifs(getGifs)
					
					return inputSearches.length >= 8 ? console.log('No se pueden agregar mas') : setPreviousTerm(inputSearches);
		} else {
			console.log('Necesitas buscar algo')
		}

	};

	// Estado de latest search --> Botones
	const [previousTerm, setPreviousTerm] = useState<string[]>([])


	//Actualiza el valor de los botones de la ultima busqueda
	const handlePreviousSearchClicked = (term: string) => {
		//Hacer que cuando se de click en el boton, busque su valor
		console.log({term});
	} 

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
