import { useState } from 'react';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';

export const useSearch =  () => {

    const [gifs, setGifs] = useState<Gif[]>([])
    
    const [previousTerm, setPreviousTerm] = useState<string[]>([])
        
        const handleSearch = async (search: string) => {
            
        search = search.trim().toLowerCase()

            //Search es la busqueda colocada en el Input
            if (search.length === 0)  return; 
                
                if (previousTerm.includes(search)) return;

                    const inputSearches = [search, ...previousTerm]
            
                         // La peticion a la api key
                         const getGifs = await getGifsByQuery(search);

                         //Estado actual de la api key
                         setGifs(getGifs)
                            
        inputSearches.length >= 8 ? console.log('No se pueden agregar mas') : setPreviousTerm(inputSearches);
         };

        const handlePreviousSearchClicked = (term: string) => {
		//Hacer que cuando se de click en el boton, busque su valor
		console.log({term});
	} 

  return ({
    //Values
    gifs,
    previousTerm,

    //Actions
    handleSearch,
    handlePreviousSearchClicked
  })
}