import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Ajustes from './Ajustes';
import Pesquisa from './Pesquisa';

const Tab = createBottomTabNavigator();


export default function Home() {
    return (
        <View style={styles.container}>
            <View style={{marginBottom: 40}}>
                <Text style={styles.titulo}>Suas inscrições em campanhas</Text>
                <Text style={styles.vazio}>Ops! Aparentemente você não está inscrito em nenhuma campanha :(</Text>
            </View>
            <View style={{marginBottom: 10}}>
                <Text style={styles.titulo}>Campanhas disponíveis</Text>
                <View style={styles.card}>
                    <Ionicons name="shirt" size={24} color="white" style={styles.cardIcone}/>
                    <View>
                        <Text style={styles.cardTitulo}>Campanha de roupas</Text>
                        <Text><Text style={styles.cardTitulo}>0</Text>itens disponíveis</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding:30,
        paddingTop: 50,
    },

    titulo: {
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 10
    },

    vazio: {
        fontSize: 14,
        fontWeight: 500,
        color: "#8E8E8E"
    },

    card: {
        padding: 10,
        backgroundColor: "#558CDE",
        display: "flex",
        flexDirection: "row",
        borderRadius: 10
    },

    cardIcone: {
        backgroundColor: "#2674E9",
        padding: 30,
        
    },

    cardTitulo: {
        color: "white",
        fontSize: 16,
        fontWeight: 700
    },
});