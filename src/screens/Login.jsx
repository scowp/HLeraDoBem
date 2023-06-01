import { View, Text, Button, StyleSheet } from "react-native";

export default function Login(){
    return (
        <View >
            <Text>Login</Text>
            <Button onPress={()=> navigation.navigate("Home")}>logar</Button>
            <Text>Ainda não tem uma conta? <Button onPress={()=> navigation.navigate("Cadastro")}>Clique aqui.</Button></Text>
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