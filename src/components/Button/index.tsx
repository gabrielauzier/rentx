import React from "react";

import { Container, Title } from "./styles";

interface ButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
}

export function Button({ title, onPress, ...rest }: ButtonProps) {
  return (
    <Container {...rest} onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
}
