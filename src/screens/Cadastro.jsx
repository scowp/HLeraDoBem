import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Cadastro({ navigation }){
    return (
        <View>
            <Text>Cadastro</Text>
            <Button onPress={()=> navigation.navigate("Home")} title="Cadastrar"/>
            <Text>Já tem uma conta? <Button onPress={()=> navigation.navigate("Login")} title="Clique aqui."/></Text>
        </View>
    )
}