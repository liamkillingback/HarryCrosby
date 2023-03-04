import React, { useEffect } from "react";
import "./carousel.css";
import { useState } from "react";
import { useSwipeable } from 'react-swipeable';



export const CarouselItem = ({ children, width }) => {
  return (
    <div id={children} className="carousel__item" style={{ width: width }}>
      
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, SetActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
        newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
        newIndex = 0;
    }
    SetActiveIndex(newIndex);
  };
    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1);
        }, 5000)
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
  })
    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });
    
  return (
    <>
      <div className="carousel__header">
        <span>P</span>
        <span>h</span>
        <span>o</span>
        <span>t</span>
        <span>o</span>
        <span>g</span>
        <span>r</span>
        <span>a</span>
        <span>p</span>
        <span>h</span>
        <span>y</span>
        <span> / </span>
        <span>a</span>
        <span>n</span>
        <span>i</span>
        <span>m</span>
        <span>a</span>
        <span>t</span>
        <span>i</span>
        <span>o</span>
        <span>n</span>
      </div>
      <div {...handlers} className="carousel">
        <div
          className="carousel__inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
      </div>
      <div className="carousel__indicators">
        <button
          className="carousel__right_btn"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className="indicators"
              id={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            ></button>
          );
        })}
        <button
          className="carousel__left_btn"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default Carousel;
