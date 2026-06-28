import { TouchableOpacity, StyleSheet, Text, TextInput, View, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { s, vs } from 'react-native-size-matters';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig'; 

const Register = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
        if (!email || !password || !confirmPassword || !username || !phone) {
            Alert.alert("Error", "Please fill out all asterisk (*) fields.");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email.trim(), password);
        } catch (error) {
            Alert.alert("Registration Failed", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.background}>
                <View style={styles.createIconOverlay}>
                    <Feather name="user-plus" size={s(50)} color="#FF0000" />
                </View>
            </View>

            <Text style={styles.headerText}>Create Account</Text>
            <Text style={{ textAlign: 'center', color: '#FF0000', marginTop: s(10) }}>Sign up to report fire alert and maintain safety.</Text>

            <SafeAreaView style={{ marginHorizontal: s(10), paddingBottom: vs(30) }}>
                <Text style={styles.label}>Username *</Text>
                <View style={styles.input}>
                    <Feather name="user" size={s(22)} color="#BBD5DA" style={styles.icons} />
                    <TextInput placeholder="Enter Username" value={username} onChangeText={setUsername} />
                </View>

                <Text style={styles.label}>Email Address *</Text>
                <View style={styles.input}>
                    <Fontisto name="email" size={s(20)} color="#BBD5DA" style={styles.icons} />
                    <TextInput placeholder="Enter Email Address" value={email} onChangeText={setEmail} keyboardType='email-address' autoCapitalize='none' />
                </View>

                <Text style={styles.label}>Phone Number *</Text>
                <View style={styles.input}>
                    <Feather name="phone-call" size={s(20)} color="#BBD5DA" style={styles.icons} />
                    <TextInput placeholder="Enter Phone Number" value={phone} onChangeText={setPhone} keyboardType='numeric' />
                </View>

                <Text style={styles.label}>Password *</Text>
                <View style={styles.passwordInput}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Feather name="lock" size={s(20)} color="#BBD5DA" style={styles.icons} />
                        <TextInput placeholder="Enter Password" value={password} onChangeText={setPassword} secureTextEntry={hidePassword} autoCapitalize='none' style={{ flex: 1 }} />
                    </View>
                    <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                        <Feather name={hidePassword ? "eye-off" : "eye"} size={20} color="#BBD5DA" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.label}>Confirm Password *</Text>
                <View style={styles.passwordInput}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Feather name="lock" size={s(20)} color="#BBD5DA" style={styles.icons} />
                        <TextInput placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={hidePassword} autoCapitalize='none' style={{ flex: 1 }} />
                    </View>
                    <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                        <Feather name={hidePassword ? "eye-off" : "eye"} size={20} color="#BBD5DA" />
                    </TouchableOpacity>
                </View>

                <View style={styles.agreeTerms}>
                    <MaterialCommunityIcons name="checkbox-marked-outline" size={s(20)} color="green" />
                    <Text> I agreed the <Text style={{ color: '#FF0000', fontWeight: 'bold' }}>Terms of Service</Text> and <Text style={{ color: '#FF0000', fontWeight: 'bold' }}>Privacy Policy</Text>. </Text>
                </View>

                <TouchableOpacity style={[styles.btnContainer, { opacity: loading ? 0.7 : 1 }]} onPress={handleSignUp} disabled={loading}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: s(20) }}>
                        {loading ? "Creating Account..." : "Sign Up"}
                    </Text>
                </TouchableOpacity>

                <View style={styles.orContainer}>
                    <View style={styles.line}></View>
                    <Text style={{ fontWeight: 'bold', color: '#FF0000', marginHorizontal: s(5) }}>Or</Text>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.signInContainer}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login" as never)}>
                        <Text style={styles.signIn}> Sign In</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        padding: s(20)
    },
    background: {
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
    createIconOverlay: {
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
    agreeTerms: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginStart: s(10),

    },
    line: {
        height: 2,
        flex: 1,
        backgroundColor: '#BBD5DA',
        marginTop: s(20),
        marginBottom: s(10),
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
    signInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: vs(10),
    },
    signIn: {
        color: '#FF0000',
        fontWeight: 'bold',

    }
})

