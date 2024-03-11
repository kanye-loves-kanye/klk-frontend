import React, { useState } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';

const CustomCarousel = ({ items }) => {
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

// const Example = () => (
//   <>
//     <AlbumCarousel />
//     <br />
//     <ShirtCarousel />
//     <br />
//     <ShoeCarousel />
//   </>
// );

export default CustomCarousel;