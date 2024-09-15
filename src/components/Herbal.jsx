import Card from "./Card";
import Image from "../assets/images/pexels-catiamatos-1072179.jpg";

const Herbal = () => {
  return (
    <div className="min-h-screen bg-gray-600 p-10 relative">
      {/* <img
        src={Image}
        alt="a plant image"
        className="w-full h-full object-cover absolute top-0 left-0"
      /> */}
      <div className="overlay2"></div>
      <nav className="flex justify-center mb-10">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search More Plants"
            className="w-full p-3 pl-10 rounded-lg shadow-md bg-gray-700 text-gray-300 focus:outline-none placeholder-gray-500"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a7 7 0 111.42-1.42l4.58 4.58a1 1 0 01-1.42 1.42l-4.58-4.58zm-5.9 0a5 5 0 100-10 5 5 0 000 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </nav>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-center mb-10 text-green-400 z-20">
          Most Popular Ayush Plants
        </h2>
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card
            plantName="Tulsi"
            scientificName="Ocimum trnuiflorum"
            imageUrl="https://images.unsplash.com/photo-1664289283342-7dfd936b4b99?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            usage1="Anti-inflammatory, antimicrobial, and adaptogenic properties"
            usage2="Commonly used for cold, cough and fever remedies"
          />

          <Card
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/ad/WithaniaFruit.jpg"
            plantName="Ahwagandha"
            scientificName="Withania somnifera"
            usage1="Helps cope with stress (adaptogen), improves congnitive function, energey"
            usage2="Anti-imnflammatory, anti-cancer and boosts immunity"
          />
          <Card
            imageUrl="https://images.unsplash.com/photo-1644061923948-f5b918b524c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1sYXxlbnwwfHwwfHx8MA%3D%3D"
            plantName="Amla"
            scientificName="Phyllanthus emblica "
            usage1="ric in Vitamin C, boost immunity"
            usage2="Promotes heart health, controls blood sugar, used in hair/skincare"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-center my-14 text-green-400 z-20">
          Most Rare Ayush Plants
        </h2>
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card
            plantName="Tulsi"
            scientificName="Ocimum trnuiflorum"
            imageUrl="https://images.unsplash.com/photo-1664289283342-7dfd936b4b99?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            usage1="Anti-inflammatory, antimicrobial, and adaptogenic properties"
            usage2="Commonly used for cold, cough and fever remedies"
          />

          <Card
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/ad/WithaniaFruit.jpg"
            plantName="Ahwagandha"
            scientificName="Withania somnifera"
            usage1="Helps cope with stress (adaptogen), improves congnitive function, energey"
            usage2="Anti-imnflammatory, anti-cancer and boosts immunity"
          />
          <Card
            imageUrl="https://images.unsplash.com/photo-1644061923948-f5b918b524c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1sYXxlbnwwfHwwfHx8MA%3D%3D"
            plantName="Amla"
            scientificName="Phyllanthus emblica "
            usage1="ric in Vitamin C, boost immunity"
            usage2="Promotes heart health, controls blood sugar, used in hair/skincare"
          />
        </div>
      </div>
    </div>
  );
};

export default Herbal;
