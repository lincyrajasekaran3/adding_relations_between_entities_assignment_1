const DestinationCard = ({ destination }) => {
    return (
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '15px',
          margin: '10px',
          width: '250px',
          textAlign: 'center',
        }}
      >
        <img
          src={destination.image}
          alt={destination.name}
          style={{ width: '100%', height: '150px', borderRadius: '10px' }}
        />
        <h2>{destination.name}</h2>
        <h4>{destination.location}</h4>
        <p>{destination.description}</p>
        <strong>{destination.price}</strong>
      </div>
    );
  };
  
  export default DestinationCard;