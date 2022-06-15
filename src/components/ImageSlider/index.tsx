import React from "react";

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from "./styles";

interface ImageSliderProps {
  imagesURL: string[];
}

export function ImageSlider({ imagesURL }: ImageSliderProps) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true}></ImageIndex>
        <ImageIndex active={false}></ImageIndex>
        <ImageIndex active={false}></ImageIndex>
        <ImageIndex active={false}></ImageIndex>
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage source={{ uri: imagesURL[0] }} resizeMode="contain" />
      </CarImageWrapper>
    </Container>
  );
}
