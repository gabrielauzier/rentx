import React from "react";
import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";

import { TouchableOpacityProps } from "react-native";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { CarDTO } from "../../dtos/CarDTO";

interface CarProps extends TouchableOpacityProps {
  data: CarDTO;
}

export function Car({ data, ...rest }: CarProps) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest} activeOpacity={0.7}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}
