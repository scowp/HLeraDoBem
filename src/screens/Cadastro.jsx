import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { validarLogin } from '../context/integration/Login';

export default function Cadastro(props) {

    const navigation = useNavigation();

    
    return (
        <ScrollView
            automaticallyAdjustKeyboardInsets={true}
            contentContainerStyle={{
                flex: 1
            }}
        >
            <View style={styles.container}>
                <View style={{ width: 320, marginBottom: 40 }}>
                    <Text style={styles.titulo}>{props.titulo}</Text>
                </View>
                {props.children}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(props.proximaPagina)}>
                    <Text style={{ color: "white", fontWeight: 600, fontSize: 16 }}>Avançar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
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