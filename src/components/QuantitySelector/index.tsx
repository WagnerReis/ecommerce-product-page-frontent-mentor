import { Minus, Plus } from "lucide-react";
import { Container } from "./styles";

interface QuantitySelectorProps {
  value?: number;
  onAdd?: () => void;
  onRemove?: () => void;
}

export function QuantitySelector({
  value = 1,
  onAdd,
  onRemove,
}: QuantitySelectorProps) {
  return (
    <Container>
      <button onClick={onRemove}>
        <Minus size={20} strokeWidth={4} />
      </button>
      <span>{value}</span>
      <button onClick={onAdd}>
        <Plus size={20} strokeWidth={4} />
      </button>
    </Container>
  );
}
