import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import {Icon} from 'react-native-elements'
import firebase from 'firebase/app'

export default function Main(){
    return(
        <View style={styles.viewBody}>
        <Text style={styles.title}>Descubre los mejores detinos para viajar</Text>
        <Image
            style={styles.stretch}
            source={require('../../assets/icon.png')}
        />
        <Image
            style={styles.stretch}
            source={require('../../assets/img/img333.jpg')}
        />
        <Image
            style={styles.stretch}
            source={require('../../assets/img/img333.jpg')}
        />
    </View>
    
    )
    
}

const styles = StyleSheet.create({
    viewBody:{
        flex:1,
        backgroundColor:'#00FF7F'
    },
    stretch:{
        width: '10%',
        height: 100,
        resizeMode: 'contain',
        marginBottom: 5
    },
    title:{
        fontWeight:'bold',
        fontSize: 20,
        marginBottom:12,
        textAlign:'center',
        backgroundColor: '#778899',
        fontFamily: 'Helvética'
    }
   
})