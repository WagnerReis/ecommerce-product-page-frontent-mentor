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

export function Header() {
  const isMobile = useIsMobile();

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <NavContainer>
            {isMobile && <Menu absoluteStrokeWidth={false} size={24} />}
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
            <CartContainer>
              <span>3</span>
              <ShoppingCart absoluteStrokeWidth={false} size={24} />
            </CartContainer>

            <UserProfile src={userProfileImg} alt="" />
          </UserActionContainer>
        </HeaderContent>
      </HeaderContainer>
      <HeaderDivisor />
    </>
  );
}
