import React from "react";
import { Container, Title } from "./styles";
import DoneIcon from "../../assets/done.svg";
import { RFValue } from "react-native-responsive-fontsize";

export function Home() {
  return (
    <Container>
      <DoneIcon width={RFValue(36)} />
      <Title>
        Welcome, bro! This is a start template app bootstrapped with Expo Bare
        Workflow and TypeScript
      </Title>
    </Container>
  );
}
