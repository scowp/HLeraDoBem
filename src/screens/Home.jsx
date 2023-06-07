import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Ajustes from './Ajustes';
import Pesquisa from './Pesquisa';
import Card from '../Components/Card';
import CardOng from '../Components/CardOng';

const Tab = createBottomTabNavigator();


export default function Home() {
    return (
        <View style={styles.container}>
            <View style={{marginBottom: 30, width: 310}}>
                <Text style={styles.titulo}>Suas inscrições em campanhas</Text>
                <Text style={styles.vazio}>Ops! Aparentemente você não está inscrito em nenhuma campanha :(</Text>
            </View>
            <View style={{marginBottom: 10}}>
                <Text style={styles.titulo}>Campanhas disponíveis</Text>
                <Card titulo="Campanha de roupas" value={0}/>
                <Card titulo="Campanha de alimentos" value={0}/>
            </View>
            <View style={{marginBottom: 10}}>
                <Text style={styles.titulo}>Campanhas disponíveis</Text>
                <CardOng titulo="Hlera do bem"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding:30,
    },

    titulo: {
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 10,
    },

    vazio: {
        fontSize: 14,
        fontWeight: 500,
        color: "#8E8E8E"
    },

 
});