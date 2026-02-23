const toRadians = (deg) => (deg * Math.PI) / 180;

// Haversine formula, returns miles
const milesBetween = (lat1, lon1, lat2, lon2) => {
  const R = 3958.8; // Earth radius in miles

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

const Distance = ({ from, to }) => {
  // If we don't have user location yet, render nothing
  if (!from || !to) return null;

  const { lat, lng } = from;
  const [spotLat, spotLng] = to;

  const miles = milesBetween(lat, lng, spotLat, spotLng);

  return <p>{miles.toFixed(1)} miles away</p>;
};

export default Distance;
