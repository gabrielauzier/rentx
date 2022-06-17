declare namespace ReactNavigation {
  export interface RootParamList extends RootStackParamList {
    Home: NavigationStackProp<string>;
    CarDetails: NavigationStackProp<string>;
    Scheduling: NavigationStackProp<string>;
    SchedulingDetails: NavigationStackProp<string>;
    SchedulingCompleted: NavigationStackProp<string>;
    MyCars: NavigationStackProp<string>;
  }
}
