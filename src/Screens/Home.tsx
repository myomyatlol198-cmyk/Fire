import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { s } from 'react-native-size-matters';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';

const Home = () => {
    const [isActive, setIsActive] = useState(false);

    const handlePress = () => {
        setIsActive(!isActive);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.hey}>Hey,</Text>
                    <Text style={styles.name}>Myo Myat</Text>
                </View>

                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="notifications-outline" size={22} color="#1e293b" />
                </TouchableOpacity>
            </View>

            <View style={styles.SOS_header_text}>
                <Text style={styles.subText}>Help is just a click away!</Text>
                <Text style={styles.mainText}>
                    Click <Text style={styles.highlightText}>SOS button</Text> to call for help
                </Text>
            </View>

            <View style={styles.sosContainer}>
                {isActive ? (
                    [...Array(3).keys()].map((index) => (
                        <MotiView
                            key={`active-${index}`}
                            from={{ opacity: 0.6, scale: 0.9 }}
                            animate={{ opacity: 0, scale: 2.4 }}
                            transition={{
                                type: 'timing',
                                duration: 1600,
                                easing: Easing.bezier(0.16, 1, 0.3, 1),
                                loop: true,
                                delay: index * 320,
                                repeatReverse: false,
                            }}
                            style={[StyleSheet.absoluteFill, styles.wave, styles.activeWave]}
                        />
                    ))
                ) : (
                    <>
                        <MotiView
                            from={{ opacity: 0.3, scale: 1 }}
                            animate={{ opacity: 0.7, scale: 1.25 }}
                            transition={{
                                type: 'timing',
                                duration: 2200,
                                easing: Easing.inOut(Easing.ease),
                                loop: true,
                                repeatReverse: true,
                            }}
                            style={[StyleSheet.absoluteFill, styles.wave, styles.inactiveWaveOuter]}
                        />
                        <MotiView
                            from={{ scale: 0.9, opacity: 0.5 }}
                            animate={{ scale: 1.05, opacity: 0.9 }}
                            transition={{
                                type: 'timing',
                                duration: 2200,
                                easing: Easing.inOut(Easing.ease),
                                loop: true,
                                repeatReverse: true,
                            }}
                            style={[StyleSheet.absoluteFill, styles.wave, styles.inactiveWaveInner]}
                        />
                    </>
                )}

                <TouchableOpacity 
                    activeOpacity={0.9} 
                    onPress={handlePress} 
                    style={[styles.SOS, isActive && styles.sosDangerActive]}
                >
                    <View style={[styles.sosOuterRing, isActive && styles.sosOuterRingActive]}>
                        <View style={[styles.sosCore, isActive && styles.sosCoreActive]}>
                            {isActive && (
                                <MotiView 
                                    from={{ opacity: 0.3 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ type: 'timing', duration: 300, loop: true, repeatReverse: true }}
                                    style={styles.liveIndicator}
                                />
                            )}
                            <Text style={[styles.sosText, isActive && styles.sosTextActive]}>
                                {isActive ? 'CANCEL' : 'SOS'}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.8} style={styles.volunteer_help}>
                <Text style={styles.volunteerText}>Volunteer for help</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        marginHorizontal: s(24),
        marginTop: s(60),
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    hey: {
        fontSize: s(15),
        color: '#64748b',
        fontWeight: '500',
    },
    name: {
        fontSize: s(22),
        color: '#0f172a',
        fontWeight: '700',
        letterSpacing: -0.5,
    },
    iconButton: {
        backgroundColor: '#ffffff',
        padding: s(10),
        borderRadius: s(12),
        elevation: 2,
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },
    SOS_header_text: {
        marginTop: s(40),
        marginHorizontal: s(24),
    },
    subText: {
        fontWeight: '600',
        fontSize: s(13),
        color: '#64748b',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    mainText: {
        fontSize: s(16),
        fontWeight: '700',
        color: '#1e293b',
        marginTop: s(4),
    },
    highlightText: {
        color: '#dc2626',
    },
    sosContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: s(260),
        width: s(260),
        alignSelf: 'center',
        marginTop: s(70),
    },
    SOS: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        height: s(200),
        width: s(200),
        borderRadius: s(100),
        elevation: 16,
        shadowColor: '#dc2626',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        padding: s(6),
    },
    sosDangerActive: {
        backgroundColor: '#1e1b4b',
        shadowColor: '#ef4444',
        shadowOpacity: 0.4,
        shadowRadius: 24,
    },
    sosOuterRing: {
        width: '100%',
        height: '100%',
        borderRadius: s(100),
        backgroundColor: '#fef2f2',
        padding: s(12),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fee2e2',
    },
    sosOuterRingActive: {
        backgroundColor: '#311010',
        borderColor: '#451a1a',
    },
    sosCore: {
        width: '100%',
        height: '100%',
        borderRadius: s(100),
        backgroundColor: '#dc2626',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    sosCoreActive: {
        backgroundColor: '#ef4444',
    },
    liveIndicator: {
        position: 'absolute',
        top: s(32),
        width: s(6),
        height: s(6),
        borderRadius: s(3),
        backgroundColor: '#ffffff',
    },
    sosText: {
        color: '#ffffff',
        fontSize: s(26),
        fontWeight: '900',
        letterSpacing: 0.5,
    },
    sosTextActive: {
        fontSize: s(16),
        letterSpacing: 1.5,
        marginTop: s(6),
    },
    wave: {
        borderRadius: s(130),
    },
    activeWave: {
        backgroundColor: '#ef4444',
    },
    inactiveWaveOuter: {
        backgroundColor: '#fee2e2',
        borderWidth: 1,
        borderColor: '#fecaca',
    },
    inactiveWaveInner: {
        backgroundColor: '#fff5f5',
        margin: s(20),
        borderWidth: 1.5,
        borderColor: '#fee2e2',
    },
    volunteer_help: {
        marginTop: s(90),
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: s(40),
        paddingVertical: s(14),
        borderRadius: s(14),
        elevation: 3,
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        borderWidth: 1,
        borderColor: '#f1f5f9',
    },
    volunteerText: {
        fontSize: s(13),
        fontWeight: '700',
        color: '#0f172a',
    },
});