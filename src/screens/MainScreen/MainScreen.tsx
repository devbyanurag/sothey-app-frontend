
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../utils/types';
import HomeScreen from '../HomeScreen/HomeScreen';
import CustomTabBar from '../../components/CustomTabBar/CustomTabBar';
import AuthScreen from '../AuthScreen/AuthScreen';
import SplashScreen from '../SplashScreen/SplashScreen';
import OrderScreen from '../OrderScreen/OrderScreen';
import AnalyticsScreen from '../AnalyticsScreen/AnalyticsScreen';
import SavedScreen from '../SavedScreen/SavedScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();
export default function MainScreen() {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: 'transparent' }, 
            }}
            tabBar={(props) => <CustomTabBar {...props} />}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="OrderScreen" component={OrderScreen} options={{ headerShown: false }} />
            <Tab.Screen name="AnalyticsScreen" component={AnalyticsScreen} options={{ headerShown: false }} />
            <Tab.Screen name="SavedScreen" component={SavedScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}


