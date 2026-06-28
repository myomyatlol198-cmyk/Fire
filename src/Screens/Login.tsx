import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { s } from 'react-native-size-matters'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const navigation = useNavigation();

    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [email, setEmail] = useState('');

    return (
        <SafeAreaProvider style={styles.container}>
            <View style={styles.shieldBackground}> 

                <Feather name="shield" size={s(75)} color="#FF0000" />
                <View style={styles.fireIconOverlay}>
                    <MaterialIcons name="local-fire-department" size={s(40)} color="#FF0000" />
                </View>

            </View>

            <Text style={styles.headerText}>WELCOME TO QUICKFIRE</Text>

            <SafeAreaView>

                <Text style={styles.label}>Email Address *</Text>
                <View style={styles.input}>
                    <Fontisto name="email" size={s(20)} color="#BBD5DA" style={styles.icons} />
                    <TextInput
                        placeholder="Enter Email Address"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType='email-address'
                    />
                </View>

                <Text style={styles.label}>Password *</Text>
                <View style={styles.passwordInput}>
                    <View style={{ flexDirection: 'row' }}>
                        <Feather name="lock" size={s(20)} color="#BBD5DA" style={styles.icons} />
                        <TextInput
                            placeholder="Enter Password"
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <TouchableOpacity style={{}} onPress={() => setHidePassword(!hidePassword)}>
                        <Feather
                            name={hidePassword ? "eye-off" : "eye"}
                            size={20}
                            color="#BBD5DA"
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate("Register" as never)}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: s(20) }}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.orContainer}>
                    <View style={styles.line}></View>
                    <Text style={{ fontWeight: 'bold', color: '#FF0000', marginHorizontal: s(5) }}>Or</Text>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.signUpContainer}>
                    <Text>Don't have an account</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register" as never)}><Text style={styles.signUp}> Sign Up</Text></TouchableOpacity>
                </View>

            </SafeAreaView>

        </SafeAreaProvider>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        padding: s(20)
    },
    shieldBackground: {
        marginTop: s(30),
        width: s(110),
        height: s(110),
        borderRadius: s(55),
        backgroundColor: '#DFF1F1',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'relative',
        shadowColor: '#BBD5DA',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: s(5),
        elevation: s(3),
    },
    fireIconOverlay: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: s(22),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF0000',
        marginTop: s(10),
    },
    label: {
        fontSize: s(14),
        padding: s(5),
    },
    input: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: s(10),
        marginBottom: s(10),
        paddingVertical: s(5),
        paddingHorizontal: s(10),
        alignItems: 'center',
        borderColor: '#BBD5DA',
    },
    passwordInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: s(10),
        marginBottom: s(10),
        paddingVertical: s(5),
        paddingHorizontal: s(10),
        alignItems: 'center',
        borderColor: '#BBD5DA',
    },
    icons: {
        padding: s(5),
        alignSelf: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        backgroundColor: '#FF0000',
        paddingVertical: s(10),
        borderRadius: s(10),
        alignItems: 'center',
        marginVertical: s(10),
    },
    orContainer: {
        flexDirection: 'row',
        marginBottom: s(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        height: 2,
        flex: 1,
        backgroundColor: '#BBD5DA',
        marginTop: s(20),
        marginBottom: s(10),
    },
    signUpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: s(10)
    },
    signUp: {
        color: '#FF0000',
        fontWeight: 'bold',

    }
})