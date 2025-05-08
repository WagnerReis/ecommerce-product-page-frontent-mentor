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
} from "./styles";

export function ProductPage() {
  return (
    <Container>
      <ImagesContainer>images</ImagesContainer>
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
