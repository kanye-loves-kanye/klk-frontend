import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const CustomCarousel = ({ items, onAddToCollection, collection, setCollection }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);


  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={index}
    >
      <img src={item.src} alt={item.altText} />
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      <br/>
      <a>
      <button onClick={() => onAddToCollection(item)}>Add to my collection</button>
      </a>
      
    </CarouselItem>
  ));

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

const AlbumCarousel = ({ collection, setCollection }) => {
  const items = [
    {
      src: 'https://i.postimg.cc/KYpGYCTF/Kanyewest-collegedropout.jpg',
      altText: 'Slide 1',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/PJZFB8H9/lateregistration.jpg',
      altText: 'Slide 2',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/rsRY0hcd/Graduation-album.jpg',
      altText: '',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/nzmkzbWQ/808hb.jpg',
      altText: 'Slide 1',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/L4rmywJb/mbdtf.jpg',
      altText: 'Slide 2',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/Y0gBK2vy/watchthethrone.jpg',
      altText: '',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/k4Lp1v0W/Cruel-Summercover.jpg',
      altText: 'Slide 1',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/C53skFZg/Kanye-West-Yeezus-cover-art.jpg',
      altText: 'Slide 2',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/KvBxCfLv/tlop.webp',
      altText: '',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/pL4Rj4CB/Yealbum.webp',
      altText: 'Slide 1',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/G2PXKnjn/kadssaw.webp',
      altText: 'Slide 2',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/LsLD4Fwg/kingisjesus.webp',
      altText: '',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/sXf6gDWH/donda.png',
      altText: 'Slide 2',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/9MSdHWY7/vulgen.png',
      altText: '',
      caption: '',
    },
    // Add more slides as needed
  ];
 
  const handleAddToCollection = (item) => {
    if (collection.some((colItem) => colItem.src === item.src)) {
      alert(`${item.altText} is already in your collection!`);
      return;
    }
  
    // Add the item to the collection
    setCollection((prevCollection) => [...prevCollection, item]);
  
    // Show a success message
    alert(`${item.altText} has been added to your collection!`);
  };
  return <CustomCarousel items={items} onAddToCollection={handleAddToCollection} />;
}

const ShirtCarousel = () => {
  const items = [
    {
      src: 'https://i.postimg.cc/G2QNHpt2/Chickfila.jpg',
      altText: '',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/sD18gsrj/Mamba.jpg',
      altText: '',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/prLS8t5B/No-More-Parties.jpg',
      altText: '',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/c4jzK2xQ/Pablocombo.jpg',
      altText: '',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/PfS9HN0V/Ultralightbeams.jpg',
      altText: '',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/3NfcFbgQ/Votekanye.jpg',
      altText: '',
      caption: '',
    },
  ];
  return <CustomCarousel items={items} />;
}

const ShoeCarousel = () => {
  const items = [
    {
      src: 'https://i.postimg.cc/KvrK4SrW/onfeet350.avif',
      altText: 'Slide 2',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/yYzgVY99/350onfeet.jpg',
      altText: '',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/0jvkqj3y/Yzyfoamrunner.jpg',
      altText: 'Slide 1',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/fLmzFm8P/Yzy750.jpg',
      altText: 'Slide 2',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/HLfWBB95/Yzy700.jpg',
      altText: '',
      caption: '',
    },
    {
      src: 'https://i.postimg.cc/PqLrWBYT/Yzy500.jpg',
      altText: 'Slide 1',
      caption: '',
    },
  ]
  return <CustomCarousel items={items} />;
}

const Example = () => (
  <>
    <AlbumCarousel />
    <br />
    <ShirtCarousel />
    <br />
    <ShoeCarousel />
  </>
);

export default Example;