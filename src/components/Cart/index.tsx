import { Trash2 } from "lucide-react";
import {
  CartContainer,
  CartContent,
  CartItemContainer,
  Info,
  Resume,
} from "./styles";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  items: CartItem[];
}

export function Cart({ items }: CartProps) {
  return (
    <CartContainer>
      <header>
        <h2>Cart</h2>
      </header>
      <hr />

      <CartContent>
        {!items.length && <span>Your cart is empty.</span>}

        {items.map((item) => (
          <CartItemContainer>
            <div key={item.id}>
              <img src={item.image} alt="" />
              <Resume>
                <Info>
                  <div>
                    <h3>{item.name}</h3>
                  </div>
                  <div>
                    <div>
                      <span>
                        ${item.price} x {item.quantity}
                      </span>
                      <strong>${item.price * item.quantity}</strong>
                    </div>
                  </div>
                </Info>
                <Trash2 size={22} strokeWidth={2} />
              </Resume>
            </div>
            <button>Checkout</button>
          </CartItemContainer>
        ))}
      </CartContent>
    </CartContainer>
  );
}
