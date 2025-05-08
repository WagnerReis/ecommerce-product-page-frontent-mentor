import { ShoppingCart } from "lucide-react";
import { QuantitySelector } from "../QuantitySelector";
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
import { useState } from "react";

export function ProductPage() {
  const [imageDefault, setImageDefault] = useState(image1);

  return (
    <Container>
      <ImagesContainer>
        <img src={imageDefault} alt="" />

        <ThumbnailContainer>
          <img
            src={thumbnail1}
            alt=""
            onMouseEnter={() => setImageDefault(image1)}
          />
          <img
            src={thumbnail2}
            alt=""
            onMouseEnter={() => setImageDefault(image2)}
          />
          <img
            src={thumbnail3}
            alt=""
            onMouseEnter={() => setImageDefault(image3)}
          />
          <img
            src={thumbnail4}
            alt=""
            onMouseEnter={() => setImageDefault(image4)}
          />
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
