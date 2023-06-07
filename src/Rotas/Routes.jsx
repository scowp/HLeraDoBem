import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Cadastro from '../screens/Cadastro';
import Login from '../screens/Login';
import MyTabs from './MyTabs';
import Inicio from "../screens/Inicio";
import CadastroInfos from "../screens/CadastroInfos";
import CadastroEndereco from "../screens/CadastroEndereco";
import CadastroDados from "../screens/CadastroDados";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Inicio" component={Inicio}/>
        <Stack.Screen name="Cadastro" component={CadastroInfos} options={{headerShown: true}}/>
        <Stack.Screen name="Cadastro2" component={CadastroEndereco} options={{headerShown: true}}/>
        <Stack.Screen name="Cadastro3" component={CadastroDados} options={{headerShown: true}}/>
        <Stack.Screen name="Login" component={Login}  options={{headerShown: true}}/>
        <Stack.Screen name="Home" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
