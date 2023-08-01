import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { TextInputMask } from 'react-native-masked-text'
import React from 'react';
import Cadastro from "./Cadastro";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CadastroInfos({ navigation }) {

    const [nome, setNome] = React.useState("");
    const [cpf, setCPF] = React.useState("");
    const [rg, setRG] = React.useState("");
    const [dataNsc, setDataNsc] = React.useState("");

    const validarFormulario = () => {
        let error = false
        if (nome === "" || cpf === "" || rg === "" || dataNsc === "") {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return false
        }
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!cpfRegex.test(cpf)) {
            Alert.alert('Erro', 'Por favor, digite o CPF corretamente');
            return false;
        }

        // Expressão regular para validar data de nascimento (formato: dd/mm/aaaa)
        const dataNascimentoRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dataNascimentoRegex.test(dataNsc)) {
            Alert.alert('Erro', 'Por favor, digite a data de nascimento corretamente');
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

    let objInfo ={
        nome: nome,
        cpf: cpf,
        rg: rg,
        dataNascimento: dataNsc
    }

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@info', jsonValue)
        } catch (e) {
          // saving error
        }
      }

    return (
        <Cadastro titulo="Preencha as informações para entrar na plataforma.">
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNome}
                value={nome}
                placeholder="Digite aqui..."
            />
            <Text style={styles.label}>CPF</Text>
            <TextInputMask
                type={'cpf'}
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
            <TextInputMask
                type="custom"
                options={{
                    mask: '99/99/9999'
                }}
                style={styles.input}
                onChangeText={setDataNsc}
                value={dataNsc}
                placeholder="Digite aqui..."
            />
            <TouchableOpacity style={styles.button} onPress={async() => {
                if (salvou()) {
                    navigation.navigate("Cadastro2")
                    await storeData(objInfo)

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