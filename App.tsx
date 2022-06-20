import React from "react";
import "react-native-gesture-handler";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import * as SplashScreen from "expo-splash-screen";

import { StatusBar } from "react-native";
import { Routes } from "./src/routes";

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) return null;
  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="default" backgroundColor="transparent" />

      <Routes />
    </ThemeProvider>
  );
}
