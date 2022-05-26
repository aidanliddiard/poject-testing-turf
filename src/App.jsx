import { useRef, useEffect, useState } from 'react';
import { libraries, hospitals } from './data/data';
import { fetchPlaces } from './services/places';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import midpoint from '@turf/midpoint';
import styles from './App.css';
import * as turf from '@turf/turf';
import Map from 'react-map-gl';

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
    var point1 = turf.point([144.0, -37.0]);
    var point2 = turf.point([144.0, -39.0]);
    console.log('turf', turf);
    var midpoint = turf.midpoint(point1, point2);
    console.log('midpoint', midpoint);
    const fetchData = async () => {
      const data = await fetchPlaces();
    };
    fetchData();
    return () => map.remove();
  }, []);
  return (
    <div className={styles.sidebarStyle}>
      <div
        ref={mapContainer}
        className={styles.map_container}
        style={{ height: '80vh' }}
      />
      <Map
        initialViewState={{
          longitude: -84.5,
          latitude: 38.05,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}
