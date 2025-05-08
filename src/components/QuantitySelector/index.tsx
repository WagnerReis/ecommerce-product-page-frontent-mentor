import { Minus, Plus } from "lucide-react";
import { Container } from "./styles";
import { useState } from "react";

export function QuantitySelector() {
  const [counter, setCounter] = useState(1);

  function handleAdd() {
    setCounter((state) => state + 1);
  }

  function handleRemove() {
    setCounter((state) => {
      if (state > 1) {
        return state - 1;
      }
      return state;
    });
  }

  return (
    <Container>
      <button onClick={handleRemove}>
        <Minus />
      </button>
      <span>{counter}</span>
      <button onClick={handleAdd}>
        <Plus />
      </button>
    </Container>
  );
}
