const TopSpot = ({ name, description, location }) => {
  const [lat, lng] = location;
  const href = `https://maps.google.com/?q=${lat},${lng}`;

  return (
    <div data-testid="topspot" className="card mb-3">
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{description}</p>
        <a href={href} className="btn btn-primary">
          Open in Google Maps
        </a>
      </div>
    </div>
  );
};

export default TopSpot;
