import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { validarLogin } from '../context/integration/Login';

export default function Cadastro({ navigation }) {

    const [nome, setNome] = React.useState("");
    const [cpf, setCPF] = React.useState("");
    const [rg, setRG] = React.useState("");
    const [dataNsc, setDataNsc] = React.useState("");

    return (
        <View style={styles.container}>
            <View style={{ width: 320, marginBottom: 40 }}>
                <Text style={styles.titulo}>Preencha as informações para entrar na plataforma.</Text>
            </View>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNome}
                value={nome}
                placeholder="Digite aqui..."
            />
            <Text style={styles.label}>CPF</Text>
            <TextInput
                style={styles.input}
                onChangeText={setCPF}
                value={cpf}
                placeholder="Digite aqui..."
            />
            <Text style={styles.label}>Registro Geral</Text>
            <TextInput
                style={styles.input}
                onChangeText={setRG}
                value={rg}
                placeholder="Digite aqui..."
            />
            <Text style={styles.label}>Data de nascimento</Text>
            <TextInput
                style={styles.input}
                onChangeText={setDataNsc}
                value={dataNsc}
                placeholder="Digite aqui..."
            />

            {/* <TouchableOpacity style={styles.button} onPress={() => validarLogin(user, senha).authorized ? navigation.navigate("Cadastro") : console.log("error")}> */}
            <TouchableOpacity style={styles.button} onPress={() => console.log(validarLogin("mateus@gmail.com", "mateus123"))}>
                <Text style={{ color: "white", fontWeight: 600, fontSize: 16 }}>Avançar</Text>
            </TouchableOpacity>
        </View>
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

    input: {
        height: 40,
        width: 310,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
        marginTop: 0
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