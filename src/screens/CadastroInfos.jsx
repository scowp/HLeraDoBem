import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from 'react';
import Cadastro from "./Cadastro";

export default function CadastroInfos() {

    const [nome, setNome] = React.useState("");
    const [cpf, setCPF] = React.useState("");
    const [rg, setRG] = React.useState("");
    const [dataNsc, setDataNsc] = React.useState("");

    const validarFormulario = () => {
        if (nome === '' || cpf === '' || rg === '' || dataNsc === '') {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
        } else {
            Alert.alert('Sucesso', 'Formulário enviado com sucesso');
            // Aqui você pode adicionar lógica adicional, como enviar os dados do formulário para um servidor
        }
    };

    return (
        <Cadastro proximaPagina="Cadastro2" titulo="Preencha as informações para entrar na plataforma.">
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