// useGifSearch.ts separado del Historial
import { useState, useCallback, useRef } from 'react';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';
import { useSearchHistory } from './useSearchHistory';

export const useGifSearch = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //useRef porque el cache es interno, no necesita disparar re-renders
  const cache = useRef<Record<string, Gif[]>>({});

  const { history, addToHistory } = useSearchHistory();

  const fetchGifs = useCallback(async (term: string) => {
    //Si ya esta en cache, no hace la peticion
    if (cache.current[term]) {
      setGifs(cache.current[term]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const results = await getGifsByQuery(term);
      cache.current[term] = results; //Guarda en cache
      setGifs(results);
    } catch {
      setError('No se pudieron cargar los Gifs');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSearch = async (search: string) => {
    const term = search.trim().toLowerCase();
    if (!term || history.includes(term)) return;

    addToHistory(term);
    await fetchGifs(term);
  };

  const handlePreviousSearchClicked = useCallback(
    (term: string) => {
      fetchGifs(term);
    },
    [fetchGifs]
  );

  return {
    //Values
    gifs,
    history,
    isLoading,
    error,

    //Actions
    handleSearch,
    fetchGifs, //expuesto para permitir re-buscar un termino del historial
    handlePreviousSearchClicked,
  };
};
