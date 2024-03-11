import React from "react";
import CustomCarousel from "../components/CustomCarousel"
import mockAlbum from "../mockAlbum"
import mockShirt from "../mockShirt";
import mockShoe from "../mockShoe";

const Collection = ({onAddToCollection}) => {
  return (
    <div>
      <CustomCarousel items={mockAlbum} onAddToCollection={onAddToCollection}/>
      <CustomCarousel items={mockShirt} onAddToCollection={onAddToCollection}/>
      <CustomCarousel items={mockShoe} onAddToCollection={onAddToCollection}/>
    </div>
  );
};

export default Collection;
