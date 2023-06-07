import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from 'react';
import Cadastro from "./Cadastro";

export default function CadastroEndereco() {

    const [cep, setCEP] = React.useState("");
    const [logr, setLogr] = React.useState("");
    const [estado, setEstado] = React.useState("");
    const [cidade, setCidade] = React.useState("");
    const [dataNsc, setDataNsc] = React.useState("");
    const [bairro, setBairro] = React.useState("");
    const [num, setNum] = React.useState("");
    const [complemento, setCompelemento] = React.useState("");


    return (
        <Cadastro proximaPagina="Cadastro3" titulo="Aonde você mora? :)">
            <Text style={styles.label}>Código de endereço postal (CEP)</Text>
            <TextInput
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
                    <TextInput
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