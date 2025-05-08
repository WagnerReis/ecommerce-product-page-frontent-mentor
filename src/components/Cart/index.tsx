import { CartContainer, CartContent } from "./styles";

export function Cart() {
  return (
    <CartContainer>
      <header>
        <h2>Cart</h2>
      </header>
      <hr />

      <CartContent>
        <span>Your cart is empty.</span>
      </CartContent>
    </CartContainer>
  );
}
