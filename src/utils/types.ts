import { ImageSourcePropType } from "react-native";

export type RootStackParamList = {
    MainScreen:undefined,
    HomeScreen: undefined;
    OrderScreen:undefined;
    AnalyticsScreen:undefined;
    SavedScreen:undefined;
    SplashScreen: undefined;
    AuthScreen: undefined;
    PropertyOverViewScreen: { propertyData: PropertyType };
};

export type PropertyType = {
    id: number;
    image: ImageSourcePropType;
    location: string;
    totalValue: string;
    startingAt: string;
    peopleRegistered: number;
    details: string[];
    featureFrag: number;
    description: string;
    descriptionDetails: string;
    fundRaisingTimeline: string;
    pricePerShare: string;
    totalSpots: number;
    financingOptions: string;
    financialModel: string;
    contactPerson: string;
    contactInfo: string;
  };