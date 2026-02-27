import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";
import "./App.css";

const images: GalleryItem[] = [
  {
    original: "/1.jpg",
    thumbnail: "/1.jpg",
  },
  {
    original: "/2.jpg",
    thumbnail: "/2.jpg",
  },
  {
    original: "/3.jpg",
    thumbnail: "/3.jpg",
  },
  {
    original: "/4.jpg",
    thumbnail: "/4.jpg",
  },
  {
    original: "/5.jpg",
    thumbnail: "/5.jpg",
  },
  {
    original: "/6.jpg",
    thumbnail: "/6.jpg",
  },
  {
    original: "/7.jpg",
    thumbnail: "/7.jpg",
  },
  {
    original: "/8.jpg",
    thumbnail: "/8.jpg",
  },
  {
    original: "/9.jpg",
    thumbnail: "/9.jpg",
  },
  {
    original: "/10.jpg",
    thumbnail: "/10.jpg",
  },
];


const shuffledImages = [...images].sort(() => Math.random() - 0.5);


function App() {
  const galleryRef = useRef<ImageGalleryRef>(null);

  return (
    <ImageGallery
    additionalClass="hover-nav-only"
    slideInterval={100000}
    showThumbnails={false}
    thumbnailPosition = "left"
      showNav={true}
      ref={galleryRef}
      items={shuffledImages}
      onSlide={(index) => console.log("Slid to", index)}
    />
  );
}

export default App; 