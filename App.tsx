import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/utils/types';
import AuthScreen from './src/screens/AuthScreen/AuthScreen';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import { useFonts } from 'expo-font';
import customFonts from './src/utils/fonts'
import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/screens/MainScreen/MainScreen';
import PropertyOverViewScreen from './src/screens/PropertyOverViewScreen/PropertyOverViewScreen';


import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { useEffect } from 'react';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  let [fontsLoaded] = useFonts(customFonts);
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }



  return (
    <NavigationContainer>
      <StatusBar hidden />
      {/* <StatusBar
        backgroundColor="#ffffff"
        barStyle="dark-content"
      /> */}
      <Stack.Navigator>
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />

        <Stack.Screen name='AuthScreen' component={AuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name='MainScreen' component={MainScreen} options={{ headerShown: false }} />

        <Stack.Screen name='PropertyOverViewScreen' component={PropertyOverViewScreen} options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
  },
});