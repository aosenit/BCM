import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const images: any = [
  "https://images.pexels.com/photos/8533362/pexels-photo-8533362.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/8490245/pexels-photo-8490245.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

export default function ProjectMobile() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const slides = [...images].map((url: any, ind: any) => (
    <Carousel.Slide key={ind}>
      <Image
        src={url}
        alt=""
        withPlaceholder
        fit="cover"
        height={300}
        className="bg-gray-200 p-8 "
      />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      mx="auto"
      withIndicators
      slideGap="md"
      loop
      align="start"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      className="md:hidden"
    >
      {slides}
    </Carousel>
  );
}
