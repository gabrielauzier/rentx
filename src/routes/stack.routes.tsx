import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { SchedulingCompleted } from "../screens/SchedulingCompleted";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Screen
        name="CarDetails"
        component={CarDetails}
        options={{ headerShown: false }}
      />
      <Screen
        name="Scheduling"
        component={Scheduling}
        options={{ headerShown: false }}
      />
      <Screen
        name="SchedulingDetails"
        component={SchedulingDetails}
        options={{ headerShown: false }}
      />
      <Screen
        name="SchedulingCompleted"
        component={SchedulingCompleted}
        options={{ headerShown: false }}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
