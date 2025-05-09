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
import { ChevronButton } from "../ChevronButton";

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
  handleNextImage: () => void;
  handlePrevImage: () => void;
  changeCurrentImageIndex: (index: number) => void;
}

export function GalleryModal({
  open,
  onClose,
  imagePreview,
  productImages,
  handleNextImage,
  handlePrevImage,
  changeCurrentImageIndex,
}: GalleryModalProps) {
  const [imageDefault, setImageDefault] = useState(imagePreview);

  useEffect(() => {
    setImageDefault(imagePreview);
  }, [imagePreview]);

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
              <ChevronButton onChangeImage={handlePrevImage}>
                <ChevronLeft />
              </ChevronButton>

              <img src={imageDefault} alt="" />

              <ChevronButton onChangeImage={handleNextImage}>
                <ChevronRight />
              </ChevronButton>
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
                    changeCurrentImageIndex(Number(image.id) - 1);
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
