import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';

export default function Ajustes() {
    return (
        <View style={styles.container}>
            <View style={styles.user}>
                <Text style={styles.username}>Matheus G.</Text>
                <Text style={styles.userinfo}>+55 11 12345-1234</Text>
                <Text style={styles.userinfo}>nome@hlera.com</Text>
            </View>
            <Text style={styles.titulo}>Editar informações</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={{color: "white", fontWeight: 600, fontSize: 16}}>Editar e-mail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={{color: "white", fontWeight: 600, fontSize: 16}}>Editar senha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={{color: "white", fontWeight: 600, fontSize: 16}}>Editar telefone</Text>
            </TouchableOpacity>
            <View style={styles.logout}>
                <Ionicons name="log-out" size={28} color="#F36D6D" />
                <Text style={styles.logoutText}>Encerrar sessão</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 30,
        paddingTop: 50,
        height: "100%"
    },

    user: {
        width: 310,
        marginBottom: 40
    },

    username: {
        fontWeight: 700,
        fontSize: 20,
        marginBottom: 10
    },

    userinfo: {
        fontSize: 18,
        marginBottom: 5
    },

    titulo: {
        fontWeight: 700,
        fontSize: 20,
        marginBottom: 15
    },

    button: {
        backgroundColor: '#F36D6D',
        padding: 15,
        borderRadius: 10,
        width: 310,
        alignItems: 'center',
        marginBottom: 25
    },

    logout: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },

    logoutText: {
        fontSize: 16,
        fontWeight: 700,
        marginStart: 10
    }
})