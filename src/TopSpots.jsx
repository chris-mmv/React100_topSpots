import TopSpot from "./TopSpot";

const TopSpots = ({ spots }) => {
  return (
    <div data-testid="topspots">
      {spots.map((topspot) => (
        <TopSpot
          key={topspot.name}
          name={topspot.name}
          description={topspot.description}
          location={topspot.location}
        />
      ))}
    </div>
  );
};

export default TopSpots;
