const API_KEY = process.env.REACT_APP_API_KEY;

// export async function fetchPlaces() {
//   const lon = 0;
//   const lat = 45;
//   const data = await fetch(
//     `http://api.opentripmap.com/0.1/ru/places/radius?radius=3000&lon=${lon}&lat=${lat}&apikey=${API_KEY}`
//   );
//   const resp = await data.json();
//   console.log('resp', resp);
// }

export async function fetchPlaces() {
  const lon = 0;
  const lat = 45;
  const data = await fetch(
    `http://geodb-free-service.wirefreethought.com/v1/geo/cities`
  );
  const resp = await data.json();
  console.log('resp', resp);
}
