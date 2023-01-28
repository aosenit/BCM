import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const instagram =
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGRpZ2l0YWwlMjBwcmludGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60";
const facebook =
  "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGRpZ2l0YWwlMjBwcmludGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60";
const whatsapp =
  "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGRpZ2l0YWwlMjBwcmludGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60";
const pininterest =
  "https://images.unsplash.com/photo-1636044594149-6e2f289c3868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGRpZ2l0YWwlMjBwcmludGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60";
const love =
  "https://images.unsplash.com/photo-1644509966562-2730d6e5f30f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGRpZ2l0YWwlMjBwcmludGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60";
const tiktok =
  "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fGRpZ2l0YWwlMjBwcmludGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60";
const netFlix =
  "https://images.unsplash.com/photo-1633793675529-58eecb6ea16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkwfHxkaWdpdGFsJTIwcHJpbnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60";
const meta =
  "https://images.unsplash.com/photo-1636114673156-052a83459fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMyfHxkaWdpdGFsJTIwcHJpbnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60";

export const images: any = [
  instagram,
  facebook,
  whatsapp,
  pininterest,
  love,
  tiktok,
  netFlix,
  meta,
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
