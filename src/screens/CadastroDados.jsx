import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from 'react';
import Cadastro from "./Cadastro";

export default function CadastroDados() {

    const [email, setEmail] = React.useState("");
    const [cel, setCel] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [confSenha, setConfSenha] = React.useState("");


    return (
        <Cadastro proximaPagina="Home" titulo="Estamos finalizando...">
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Digite aqui..."
            />
            <Text style={styles.label}>Celular</Text>
            <TextInput
                style={styles.input}
                onChangeText={setCel}
                value={cel}
                placeholder="Digite aqui..."
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                onChangeText={setSenha}
                value={senha}
                placeholder="Digite aqui..."
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                onChangeText={setConfSenha}
                value={confSenha}
                placeholder="Digite aqui..."
            />
        </Cadastro>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 30,
        paddingTop: 50
    },

    titulo: {
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 10,
        width: 250
    },

    label: {
        fontWeight: 200,
        fontSize: 16,
        width: 300,
    },

    labelPequeno: {
        fontWeight: 200,
        fontSize: 16,
        marginStart: 15
    },

    input: {
        height: 40,
        width: 310,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
        marginTop: 0
    },
    inputPequeno: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
        marginTop: 0,
    },

    inputPequenoArea: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },

    button: {
        backgroundColor: '#F36D6D',
        padding: 15,
        borderRadius: 10,
        width: 310,
        alignItems: 'center',
        marginTop: 35,
    },
});