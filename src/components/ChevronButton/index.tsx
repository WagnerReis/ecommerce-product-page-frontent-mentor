import type { ReactNode } from "react";
import { Button } from "./stylest";

interface ChevronButtonProsp {
  children: ReactNode;
  onChangeImage: () => void;
}

export function ChevronButton({ onChangeImage, children }: ChevronButtonProsp) {
  return <Button onClick={onChangeImage}>{children}</Button>;
}
