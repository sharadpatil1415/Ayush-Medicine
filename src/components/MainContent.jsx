import { IoIosSearch } from "react-icons/io";
import Card from "./Card";
import Image from "../assets/images/Premium Photo _ White ceramic teapot and dry tea herb with matcha tea powder on blac.jpg";

const MainContent = () => {
  return (
    <div className="w-full h-auto bg-slate-200 p-8 main-content relative">
      <div className="w-full flex justify-center items-center relative">
        <input
          type="text"
          name="searchBar"
          placeholder="Search More Plants"
          className="my-4 px-6 py-2 rounded-lg w-50 md:w-80 border-none outline-none"
        />
        <div className="absolute top-6.5 left-72 md:left-[53rem] md:text-2xl text-xl opacity-50 ">
          <IoIosSearch />
        </div>
      </div>
      <div>
        <h2 className="md:ml-60 my-6 text-2xl">Most Popular Ayush Plants</h2>
        <div className="flex justify-center gap-8">
          <div className="flex flex-col md:grid md:grid-cols-3 md:gap-40 gap-6 mx-6">
            <Card
              imageUrl="https://images.unsplash.com/photo-1664289283342-7dfd936b4b99?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              plantName="Tulsi"
              scientificName="Ocimum trnuiflorum"
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
      <div className="mt-16">
        <h2 className="md:ml-60 my-6 text-2xl">Most Rare Ayush Plants</h2>
        <div className="flex justify-center gap-8">
          <div className="flex flex-col md:grid md:grid-cols-3 md:gap-40 gap-6 mx-6">
            <Card
              imageUrl="https://images.unsplash.com/photo-1664289283342-7dfd936b4b99?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              plantName="Tulsi"
              scientificName="Ocimum trnuiflorum"
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
    </div>
  );
};

export default MainContent;
