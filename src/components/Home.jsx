import React from "react";
import { About, Navbar, Preview, Footer } from "../containers";
import Carousel, { CarouselItem } from '../containers/carousel/Carousel';
const Home = () => {
  return (
    <>
      <Carousel>
        <CarouselItem>Item1</CarouselItem>
        <CarouselItem>Item2</CarouselItem>
        <CarouselItem>Item3</CarouselItem>
      </Carousel>
      
    </>
  );
};

export default Home;
