import { libraries, hospitals } from './data/data';
import styles from './App.css';
import Map, { Source, Layer } from 'react-map-gl';

let API_KEY =
  'pk.eyJ1IjoiZGVudmVybWNjYXJ0aHkiLCJhIjoiY2wzcWNrNjFnMTcxaTNjbTl4NjF3bmNzYiJ9.Mn95Dhy435F88fGlNJaeUw';

const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf',
  },
};

export default function App() {
  return (
    <div className={styles.sidebarStyle}>
      <Map
        mapboxAccessToken={API_KEY}
        initialViewState={{
          longitude: -84.5,
          latitude: 38.05,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Source id="my-data" type="geojson" data={hospitals}>
          <Layer {...layerStyle} />
        </Source>
        <Source id="my-data" type="geojson" data={libraries}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    </div>
  );
}
