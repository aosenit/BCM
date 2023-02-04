import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { projectData } from "./ProjectLarge";

export default function ProjectMobile() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const slides = projectData.map(({ src: url, className }, ind: any) => (
    <Carousel.Slide key={ind}>
      <Image
        src={url}
        alt=""
        withPlaceholder
        fit="cover"
        height={300}
        className="bg-gray-200 p-6 "
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
