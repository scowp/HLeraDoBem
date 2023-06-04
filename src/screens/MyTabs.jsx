import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ajuste from './Ajustes';
import Home from './Home';
import Pesquisa from './Pesquisa';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Ajustes" component={Ajuste} />
      <Tab.Screen name="Pesquisa" component={Pesquisa} />
    </Tab.Navigator>
  );
}