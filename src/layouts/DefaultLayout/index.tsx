// import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      {/* <Header /> */}
      <header>Header</header>
      <Outlet />
    </LayoutContainer>
  );
}
