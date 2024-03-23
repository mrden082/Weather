import { useQuery } from 'react-query';
import { searchCities } from '../services/openMeteoAPI';

export const useCitySearch = (query: string) => {
  const { data, isLoading } = useQuery(['citySearch', query], () => searchCities(query));

  return { data, isLoading };
};
