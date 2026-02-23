import TopSpot from "./TopSpot";

const TopSpots = ({ spots, userLocation }) => {
  return (
    <div data-testid="topspots">
      {spots.map((topspot) => (
        <TopSpot
          key={topspot.name}
          name={topspot.name}
          description={topspot.description}
          location={topspot.location}
          userLocation={userLocation}
        />
      ))}
    </div>
  );
};

export default TopSpots;
