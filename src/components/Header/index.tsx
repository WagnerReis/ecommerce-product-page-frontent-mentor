import { Menu, ShoppingCart } from "lucide-react";

import userProfileImg from "../../assets/image-avatar.png";
import logo from "../../assets/logo.svg";
import {
  HeaderContainer,
  NavContainer,
  UserProfile,
  UserActionContainer,
  CartContainer,
  HeaderDivisor,
  HeaderContent,
} from "./styles";
import { useIsMobile } from "../../hooks/use-mobile";
import { Popover } from "radix-ui";
import { Cart } from "../Cart";
import { useCartContext } from "../../hooks/use-cart-context";

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  const isMobile = useIsMobile();
  const { cartItems } = useCartContext();

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <NavContainer>
            {isMobile && (
              <button onClick={toggleSidebar}>
                <Menu absoluteStrokeWidth={false} size={24} />
              </button>
            )}
            <img src={logo} alt="" />
            {!isMobile && (
              <nav>
                <a>Collections</a>
                <a>Men</a>
                <a>Women</a>
                <a>About</a>
                <a>Contact</a>
              </nav>
            )}
          </NavContainer>

          <UserActionContainer>
            <Popover.Root>
              <Popover.Trigger asChild>
                <CartContainer>
                  {cartItems.length > 0 && <span>{cartItems.length}</span>}
                  <ShoppingCart absoluteStrokeWidth={false} size={24} />
                </CartContainer>
              </Popover.Trigger>
              <Popover.Content style={{ zIndex: 10 }}>
                <Cart items={cartItems} />
              </Popover.Content>
            </Popover.Root>

            <UserProfile src={userProfileImg} alt="" />
          </UserActionContainer>
        </HeaderContent>
      </HeaderContainer>
      <HeaderDivisor />
    </>
  );
}
