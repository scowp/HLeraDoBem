import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import bg from "../assets/inicio_bg.png"

export default function Inicio({ navigation }) {
    return (
        <ImageBackground source={bg} resizeMode="cover" style={styles.container}>

            <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: "white", fontWeight: 600, fontSize: 16 }}>Logar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCadastrar} onPress={() => navigation.navigate("Cadastro")}>
                <View>
                    <Text style={{ color: "white", fontWeight: 600, fontSize: 16 }}>Cadastrar</Text>
                </View>
            </TouchableOpacity>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: "100%",
        paddingBottom: 20
    },

    buttonLogin: {
        backgroundColor: 'rgba(0,0,0,0.35)',
        padding: 15,
        paddingVertical: 20,
        borderRadius: 10,
        width: 310,
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 2,
        borderColor: "white",
    },

    buttonCadastrar: {
        backgroundColor: '#F36D6D',
        padding: 15,
        paddingVertical: 20,
        borderRadius: 10,
        width: 310,
        alignItems: 'center',
        marginBottom: 15
    },
});