import { useEffect } from 'react';
import { fetchPlaces } from './services/places';

export default function App() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlaces();
    };
    fetchData();
  }, []);
  return <h1>Hello World</h1>;
}
