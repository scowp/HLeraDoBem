import { View, Text, Button, StyleSheet } from "react-native";

export default function Login({navigation}){
    return (
        <View >
            <Text>Login</Text>
            <Button onPress={()=> navigation.navigate("Home")} title="Logar"/>
            <Text>Ainda não tem uma conta? <Button onPress={()=> navigation.navigate("Cadastro")} title="Clique aqui."/></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });