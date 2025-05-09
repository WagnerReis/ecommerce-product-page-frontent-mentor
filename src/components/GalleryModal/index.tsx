import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

import {
  Overlay,
  ModalContainer,
  MainImage,
  ModalContent,
  ThumbnailContainer,
  Thumbnail,
} from "./styles";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProductImage {
  id: string;
  src: string;
  thumbnail: string;
}

interface GalleryModalProps {
  open: boolean;
  imagePreview: string;
  productImages: ProductImage[];
  onClose: () => void;
}

export function GalleryModal({
  open,
  onClose,
  imagePreview,
  productImages,
}: GalleryModalProps) {
  const [imageDefault, setImageDefault] = useState(imagePreview);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setImageDefault(imagePreview);
  }, [imagePreview]);

  function handleNextImage() {
    const nextIndex = (currentImageIndex + 1) % productImages.length;
    setImageDefault(productImages[nextIndex].src);
    setCurrentImageIndex(nextIndex);
  }

  function handlePrevImage() {
    const nextIndex =
      (currentImageIndex - 1 + productImages.length) % productImages.length;
    setImageDefault(productImages[nextIndex].src);
    setCurrentImageIndex(nextIndex);
  }

  return createPortal(
    <div>
      {/* Overlay */}
      {open && <Overlay isOpen={open} onClick={onClose} aria-hidden="true" />}

      {/* Modal */}
      {open && (
        <ModalContainer>
          <ModalContent>
            <X
              className="close-icon"
              size={24}
              onClick={onClose}
              strokeWidth={3}
            />
            <MainImage>
              <button onClick={handlePrevImage}>
                <ChevronLeft />
              </button>
              <img src={imageDefault} alt="" />
              <button onClick={handleNextImage}>
                <ChevronRight />
              </button>
            </MainImage>

            <ThumbnailContainer>
              {productImages.map((image) => (
                <Thumbnail
                  key={image.id}
                  src={image.thumbnail}
                  alt=""
                  selected={image.src === imageDefault}
                  onClick={() => {
                    setImageDefault(image.src);
                    setCurrentImageIndex(+image.id - 1);
                  }}
                />
              ))}
            </ThumbnailContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </div>,
    document.body,
  );
}
