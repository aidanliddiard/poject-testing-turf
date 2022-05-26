import { useRef, useEffect, useState } from 'react';
import { libraries, hospitals } from './data/data';
import { fetchPlaces } from './services/places';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGVudmVybWNjYXJ0aHkiLCJhIjoiY2wzbjl2MXg4MGNoNTNpbWZoaTR6M3dkdCJ9.I9vsPRJW6npjurES8YAHrQ';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-84.5);
  const [lat, setLat] = useState(38.05);
  const [zoom, setZoom] = useState(15);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
    // const marker = new mapboxgl.Marker({ color: '#FFFFFF' })
    //   .setLngLat([-84.539487, 38.072916])
    //   .addTo(map.current);
    const fetchData = async () => {
      const data = await fetchPlaces();
    };
    fetchData();
    return () => map.remove();
  }, []);
  return (
    <div>
      <div
        ref={mapContainer}
        className="map-container"
        style={{ height: '100vh' }}
      />
    </div>
  );
}
