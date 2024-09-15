const Card = ({
  imageUrl,
  altText,
  plantName,
  scientificName,
  usage1,
  usage2,
}) => {
  return (
    <div className="relative bg-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-transform  card">
      <img src={imageUrl} alt={altText} className="w-full h-80 object-cover" />
      <div className="p-4 bg-white text-black card-content">
        <h3 className="text-2xl font-semibold">{plantName}</h3>
        <p className="text-sm italic">{scientificName}</p>
        <p className="my-2">{usage1}</p>
        <p className="my-2">{usage2}</p>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="card cursor-pointer rounded-lg relative overflow-hidden">
      <img
        src={imageUrl}
        alt={altText}
        className="w-60 h-80 object-cover rounded-sm"
      />
      <div className="card-content text-white p-3">
        <div className="my-1">
          <h2 className="font-bold text-lg">{plantName}</h2>
          <h2 className="font-semibold">{scientificName} </h2>
        </div>

        <p className="my-2">{usage1}</p>
        <p className="my-2">{usage2}</p>
      </div>
    </div> */
}
