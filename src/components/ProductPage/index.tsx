import { ShoppingCart } from "lucide-react";
import { useState } from "react";

import { QuantitySelector } from "../QuantitySelector";
import { GalleryModal } from "../GalleryModal";

import {
  Actions,
  Container,
  ImagesContainer,
  InfoContainer,
  Price,
  PriceContainer,
  Button,
  ThumbnailContainer,
} from "./styles";

import image1 from "../../assets/image-product-1.jpg";
import image2 from "../../assets/image-product-2.jpg";
import image3 from "../../assets/image-product-3.jpg";
import image4 from "../../assets/image-product-4.jpg";

import thumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../assets/image-product-4-thumbnail.jpg";

const images = [
  {
    id: "1",
    src: image1,
    thumbnail: thumbnail1,
  },
  {
    id: "2",
    src: image2,
    thumbnail: thumbnail2,
  },
  {
    id: "3",
    src: image3,
    thumbnail: thumbnail3,
  },
  {
    id: "4",
    src: image4,
    thumbnail: thumbnail4,
  },
];

export function ProductPage() {
  const [imageDefault, setImageDefault] = useState(image1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  return (
    <Container>
      <ImagesContainer>
        <GalleryModal
          open={isModalOpen}
          onClose={handleCloseModal}
          imagePreview={imageDefault}
          productImages={images}
        />
        <img src={imageDefault} alt="" onClick={handleOpenModal} />

        <ThumbnailContainer>
          {images.map((image) => (
            <img
              key={image.id}
              src={image.thumbnail}
              alt=""
              onClick={handleOpenModal}
              onMouseEnter={() => setImageDefault(image.src)}
            />
          ))}
        </ThumbnailContainer>
      </ImagesContainer>
      <InfoContainer>
        <h1>Sneaker Company</h1>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <PriceContainer>
          <Price>
            <span>$125.00</span>
            <span>$250.00</span>
          </Price>
          <span className="discount">50%</span>
        </PriceContainer>
        <Actions>
          <QuantitySelector />
          <Button>
            <ShoppingCart size={18} strokeWidth={2} />
            <span>Add to cart</span>
          </Button>
        </Actions>
      </InfoContainer>
    </Container>
  );
}
