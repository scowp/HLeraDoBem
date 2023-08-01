import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pesquisa from '../screens/Pesquisa';
import Ajustes from '../screens/Ajustes';
import Home from '../screens/Home';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false
            }}
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: "#032A90",
                    position: "absolute",
                    bottom: 20,
                    left: 15,
                    right: 15,
                    border: 0,
                    borderRadius: 10,
                    height: 60,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    if (route.name === 'Ajustes') {
                        iconName = focused ? 'settings' : 'settings-outline'
                    }
                    if (route.name === 'Pesquisa') {
                        iconName = focused ? 'search' : 'search-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
            })}
        >

            <Tab.Screen name="Home" component={Home} options={{
                headerTitleStyle: {
                    color: "red",
                },
                headerStyle: {
                    borderBottomWidth: 0,
                }
            }} />
            <Tab.Screen name="Pesquisa" component={Pesquisa} options={{
                headerShown: false
            }} />

            <Tab.Screen name="Ajustes" component={Ajustes} options={{
                headerTitleStyle: {
                    color: "red",
                }
            }} />
        </Tab.Navigator>
    );
}



