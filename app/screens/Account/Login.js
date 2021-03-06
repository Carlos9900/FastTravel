import React,{useRef} from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoginForm from '../../components/Account/LoginForm'
import Toast from 'react-native-toast-message'


export default function Login(){
    const toastRef = useRef()
    return(
        <KeyboardAwareScrollView>
            <Image
                source={require('../../../assets/img/fastravellll.png')}
                resizeMode='contain'
                style={styles.logo}
            />
            <View style={styles.viewContainer}>
                <LoginForm toastRef={toastRef}/>
                <CreateAccount/>
            </View>
            <Divider style={styles.divider}/>
            <Toast ref={toastRef}/>
        </KeyboardAwareScrollView>
    )
}

function CreateAccount(){
    const navigation = useNavigation()
    return(
        <Text style = {styles.textRegister}>
            ¿No te has registrado aún? {' '}
            <Text
                style = {styles.linkRegister}
                onPress={()=>navigation.navigate('register')}
            >
                Registrarse
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:'100%',
        height: 300,
        marginTop: 20
    },
    viewContainer:{
        marginRight:40,
        marginLeft:40
    },
    divider:{
        backgroundColor:'#32BCE5',
        margin: 40
    },
    textRegister:{
        marginTop: 15,
        marginLeft:10,
        marginRight: 10,
        textAlign: 'center'
    },
    linkRegister:{
        color: '#32BCE5',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    loginText:{
        textAlign: 'center'
    }
})