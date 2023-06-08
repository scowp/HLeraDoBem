import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { TextInputMask } from 'react-native-masked-text'
import React from 'react';
import Cadastro from "./Cadastro";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CadastroEndereco({ navigation }) {

    const [cep, setCEP] = React.useState("");
    const [logr, setLogr] = React.useState("");
    const [estado, setEstado] = React.useState("");
    const [cidade, setCidade] = React.useState("");
    const [bairro, setBairro] = React.useState("");
    const [num, setNum] = React.useState("");
    const [complemento, setCompelemento] = React.useState("");

    const validarFormulario = () => {
        let error = false
        if (cep === "" || logr === "" || estado === "" || cidade === "" || bairro === "" || num === "") {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return false
        }
        const cepRegex = /^\d{5}-?\d{3}$/;
        if (!cepRegex.test(cep)) {
            Alert.alert('Erro', 'Por favor, digite o CEP corretamente');
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

    let ende = {
        cep: cep,
        logr: logr,
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        num: num,
        complemento: complemento
    }

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@ende', jsonValue)
        } catch (e) {
            // saving error
        }
    }

    return (
        <Cadastro proximaPagina="Cadastro3" titulo="Aonde você mora? :)" >
            <Text style={styles.label}>Código de endereço postal (CEP)</Text>
            <TextInputMask
                type="custom"
                options={{
                    mask: '99999-999'
                }}
                style={styles.input}
                onChangeText={setCEP}
                value={cep}
                placeholder="Digite aqui..."
            />
            <Text style={styles.label}>Logradouro</Text>
            <TextInput
                style={styles.input}
                onChangeText={setLogr}
                value={logr}
                placeholder="Digite aqui..."
            />
            <View style={styles.inputPequenoArea}>
                <View style={{ width: 165 }}>
                    <Text style={styles.labelPequeno}>Estado</Text>
                    <TextInput
                        style={styles.inputPequeno}
                        onChangeText={setEstado}
                        value={estado}
                        placeholder="Digite aqui..."
                    />
                </View>
                <View style={{ width: 165 }}>
                    <Text style={styles.labelPequeno}>Cidade</Text>
                    <TextInput
                        style={styles.inputPequeno}
                        onChangeText={setCidade}
                        value={cidade}
                        placeholder="Digite aqui..."
                    />
                </View>
            </View>
            <Text style={styles.label}>Bairro</Text>
            <TextInput
                style={styles.input}
                onChangeText={setBairro}
                value={bairro}
                placeholder="Digite aqui..."
            />
            <View style={styles.inputPequenoArea}>
                <View style={{ width: 165 }}>
                    <Text style={styles.labelPequeno}>Número</Text>
                    <TextInputMask
                        type="custom"
                        options={{
                            mask: '99999'
                          }}
                        style={styles.inputPequeno}
                        onChangeText={setNum}
                        value={num}
                        placeholder="Digite aqui..."
                    />
                </View>
                <View style={{ width: 165 }}>
                    <Text style={styles.labelPequeno}>Complemento</Text>
                    <TextInput
                        style={styles.inputPequeno}
                        onChangeText={setCompelemento}
                        value={complemento}
                        placeholder="Digite aqui..."
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={async () => {
                if (salvou()) {
                    navigation.navigate("Cadastro3")
                }
                await storeData(ende)
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