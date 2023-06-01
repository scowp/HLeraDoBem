import { View, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Cadastro({ navigation }){
    return (
        <View>
            <Text>Cadastro</Text>
            <Button onPress={()=> navigation.navigate("Home")}>Cadastrar</Button>
            <Text>Já tem uma conta? <Button onPress={()=> navigation.navigate("Login")}>Clique aqui.</Button></Text>
        </View>
    )
}