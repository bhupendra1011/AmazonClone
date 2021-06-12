import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import Button from '../../components/Button'
import { Auth } from "aws-amplify";

const MenuScreen = () => {
    const onLogout = () => {
        Auth.signOut();
    };
    return (
        <SafeAreaView>
            <Button text="Log out" onPress={onLogout} />
        </SafeAreaView>
    )
}

export default MenuScreen

const styles = StyleSheet.create({})
