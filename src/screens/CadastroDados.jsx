import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { TextInputMask } from 'react-native-masked-text'
import React from 'react';
import Cadastro from "./Cadastro";
import { inserirUsuario } from "../context/integration/Usuario";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CadastroDados({ navigation }) {

    const [email, setEmail] = React.useState("");
    const [cel, setCel] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [confSenha, setConfSenha] = React.useState("");

    const validarFormulario = () => {
        let error = false
        if (email === "" || cel === "" || senha === "" || confSenha === "") {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return false
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Erro', 'Por favor, digite o Email corretamente');
            return false;
        }
        const numeroRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        if (!numeroRegex.test(cel)) {
            Alert.alert('Erro', 'Por favor, digite o número corretamente');
            return false;
        }
        if (senha !== confSenha) {
            Alert.alert('Erro', 'Por favor, confirme sua senha corretamente');
            return false;
        }
        return !error
    };

    const salvou = () => {
        if (validarFormulario()) {
            console.log("salvou")
            return true
        }
    }

    dados = {
        email: email,
        numeroCelular: cel,
        senha: senha,
        grupo: "DOADOR"
    }


    const getDataInfo = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@info')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    }

    const getDataEndereco = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@ende')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    }


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
            <TextInputMask
                type="cel-phone"
                options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) '
                }}
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
                secureTextEntry={true}
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                onChangeText={setConfSenha}
                value={confSenha}
                placeholder="Digite aqui..."
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={async() => {
                if (salvou()) {
                    navigation.navigate("HomeScreen")
                    await inserirUsuario(await getDataInfo(), dados ,await getDataEndereco())
                    console.log(await getDataInfo())
                    console.log(dados)
                    console.log(await getDataEndereco())
                    
                }
            }}>
                <Text style={{ color: "white", fontWeight: 600, fontSize: 16 }}>Avançar</Text>
            </TouchableOpacity>
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