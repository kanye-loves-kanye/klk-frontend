import React from "react";
import CustomCarousel from "../components/CustomCarousel"
import mockAlbum from "../mockAlbum"
import mockShirt from "../mockShirt";
import mockShoe from "../mockShoe";

const Collection = () => {
  return (
    <div>
      <CustomCarousel items={mockAlbum} />
      <CustomCarousel items={mockShirt} />
      <CustomCarousel items={mockShoe} />
    </div>
  );
};

export default Collection;
