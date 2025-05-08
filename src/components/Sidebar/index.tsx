import { createPortal } from "react-dom";
import { SidebarContainer, Overlay } from "./styles";
import { X } from "lucide-react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return createPortal(
    <div>
      {open && <Overlay isOpen={open} onClick={onClose} aria-hidden="true" />}

      {open && (
        <SidebarContainer isOpen={open}>
          <button onClick={onClose}>
            <X size={32} />
          </button>
          <nav>
            <a>Collections</a>
            <a>Men</a>
            <a>Women</a>
            <a>About</a>
            <a>Contact</a>
          </nav>
        </SidebarContainer>
      )}
    </div>,
    document.body,
  );
}
