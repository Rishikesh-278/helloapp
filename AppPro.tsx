import React from "react";
import { Text, TextInput, View, StyleSheet, useColorScheme, Image } from "react-native";

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === "dark";
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }}
                height={100} width={100} />
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>This is a text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro;