import * as React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Card(props) {

    return (
        <View style={styles.card}>
            <View style={{padding: 5}}>
                <Image style={{width: 45, height: 45}} source={require('../assets/hleralogo.png')}/>
            </View>
            <View style={styles.cardInfo} >
                <Text style={styles.cardTitulo}>{props.titulo}</Text>
            </View>
        </View>
    )

    // "#558CDE" "#2674E9"

    //  "#FFA767" "#EF9554"
}

const styles = StyleSheet.create({

    card: {
        padding: 10,
        backgroundColor: "#021851",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 10,
        width: 310
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

});