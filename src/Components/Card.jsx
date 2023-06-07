import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Card(props) {

    return (
        <View style={[props.titulo == "Campanha de roupas" ? styles.cardAzul : styles.cardAmarelo]}>
            <View style={[props.titulo == "Campanha de roupas" ? styles.cardIconeAzul : styles.cardIconeAmarelo]}>
                <Ionicons name={props.titulo == "Campanha de roupas" ? "shirt": "restaurant"} size={24} color="white" />
            </View>
            <View style={styles.cardInfo} >
                <Text style={styles.cardTitulo}>{props.titulo}</Text>
                <View style={styles.cardTextArea}>
                    <Text style={styles.cardValue}>{props.value}</Text>
                    <Text style={styles.cardText}>itens disponíveis</Text>
                </View>
            </View>
        </View>
    )

    // "#558CDE" "#2674E9"

    //  "#FFA767" "#EF9554"
}

const styles = StyleSheet.create({

    cardAzul: {
        padding: 10,
        backgroundColor: "#558CDE",
        display: "flex",
        flexDirection: "row",
        borderRadius: 10,
        marginBottom: 10,
        width: 310
    },

    cardAmarelo: {
        padding: 10,
        backgroundColor: "#FFA767",
        display: "flex",
        flexDirection: "row",
        borderRadius: 10,
        marginBottom: 10,
        width: 310
    },

    cardIconeAzul: {
        backgroundColor: "#2674E9",
        padding: 30,
        borderRadius: 8
    },

    cardIconeAmarelo: {
        backgroundColor: "#EF9554",
        padding: 30,
        borderRadius: 8
    },

    cardInfo: {
        padding: 15,
        paddingTop: 10
    },

    cardTitulo: {
        color: "white",
        fontSize: 16,
        fontWeight: 700,
    },

    cardTextArea: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    },

    cardValue: {
        color: "white",
        fontSize: 16,
        fontWeight: 600,
        marginEnd: 3
    },

    cardText: {
        color: "white",
    }
});