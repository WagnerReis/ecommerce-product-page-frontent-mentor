import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
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
  ImageSlider,
} from "./styles";

import image1 from "../../assets/image-product-1.jpg";
import image2 from "../../assets/image-product-2.jpg";
import image3 from "../../assets/image-product-3.jpg";
import image4 from "../../assets/image-product-4.jpg";

import thumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../assets/image-product-4-thumbnail.jpg";
import { useIsMobile } from "../../hooks/use-mobile";
import { ChevronButton } from "../ChevronButton";
import { useCartContext } from "../../hooks/use-cart-context";

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

  const [counter, setCounter] = useState(1);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useIsMobile();

  const { handleAddToCart } = useCartContext();

  function handleOpenModal() {
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    // Restore scrolling
    document.body.style.overflow = "auto";
  }

  function handleNextImage() {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setImageDefault(images[nextIndex].src);
    setCurrentImageIndex(nextIndex);
  }

  function handlePrevImage() {
    const nextIndex = (currentImageIndex - 1 + images.length) % images.length;
    setImageDefault(images[nextIndex].src);
    setCurrentImageIndex(nextIndex);
  }

  function handleAddItem() {
    setCounter((state) => state + 1);
  }

  function handleRemoveItem() {
    setCounter((state) => {
      if (state > 1) {
        return state - 1;
      }
      return state;
    });
  }

  return (
    <Container>
      <ImagesContainer>
        {!isMobile && (
          <GalleryModal
            open={isModalOpen}
            onClose={handleCloseModal}
            imagePreview={imageDefault}
            productImages={images}
            handleNextImage={handleNextImage}
            handlePrevImage={handlePrevImage}
            changeCurrentImageIndex={setCurrentImageIndex}
          />
        )}

        {isMobile ? (
          <ImageSlider>
            <ChevronButton onChangeImage={handlePrevImage}>
              <ChevronLeft />
            </ChevronButton>
            <img
              src={imageDefault}
              alt=""
              onClick={isMobile ? undefined : handleOpenModal}
            />
            <ChevronButton onChangeImage={handleNextImage}>
              <ChevronRight />
            </ChevronButton>
          </ImageSlider>
        ) : (
          <img
            src={imageDefault}
            alt=""
            onClick={isMobile ? undefined : handleOpenModal}
          />
        )}

        {!isMobile && (
          <ThumbnailContainer>
            {images.map((image) => (
              <img
                key={image.id}
                src={image.thumbnail}
                alt=""
                onClick={isMobile ? undefined : handleOpenModal}
                onMouseEnter={() => {
                  if (!isMobile) {
                    setImageDefault(image.src);
                  }
                }}
              />
            ))}
          </ThumbnailContainer>
        )}
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
          <QuantitySelector
            value={counter}
            onAdd={handleAddItem}
            onRemove={handleRemoveItem}
          />
          <Button
            onClick={() =>
              handleAddToCart({
                id: "1",
                name: "Fall Limited Edition Sneakers",
                price: 125,
                image: images[0].thumbnail,
                quantity: counter,
              })
            }
          >
            <ShoppingCart size={18} strokeWidth={2} />
            <span>Add to cart</span>
          </Button>
        </Actions>
      </InfoContainer>
    </Container>
  );
}
