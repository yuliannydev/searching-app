import { useRef, useState } from 'react';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';

export const useSearch = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  const [previousTerm, setPreviousTerm] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleSearch = async (search: string) => {
    search = search.trim().toLowerCase();

    //Search es la busqueda colocada en el Input
    if (search.length === 0) return;

    if (previousTerm.includes(search)) return;

    const inputSearches = [search, ...previousTerm];

    // La peticion a la api key
    const getGifs = await getGifsByQuery(search);

    //Estado actual de la api key
    setGifs(getGifs);

    gifsCache.current[search] = getGifs;

    inputSearches.length >= 8
      ? console.log('No se pueden agregar mas')
      : setPreviousTerm(inputSearches);
  };

  const handlePreviousSearchClicked = async (term: string) => {
    // console.log({ term });
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const getGifs = await getGifsByQuery(term);
    setGifs(getGifs);
  };

  return {
    //Values
    gifs,
    previousTerm,

    //Actions
    handleSearch,
    handlePreviousSearchClicked,
  };
};
