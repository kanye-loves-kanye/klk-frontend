import React, { useState } from 'react';
import AlbumCarousel from '../components/AlbumCarousel';
import ShirtCarousel from '../components/ShirtCarousel';
import ShoeCarousel from '../components/ShoeCarousel';

const Example = () => {
  const [collection, setCollection] = useState([]);

  const handleAddToCollection = (item) => {
    if (collection.some((colItem) => colItem.src === item.src)) {
      alert(`${item.altText} is already in your collection!`);
      return;
    }

    setCollection((prevCollection) => [...prevCollection, item]);

    alert(`${item.altText} has been added to your collection!`);
  };

  return (
    <>
      <AlbumCarousel collection={collection} setCollection={setCollection} />
      <br />
      <ShirtCarousel />
      <br />
      <ShoeCarousel />
    </>
  );
};

export default Example;