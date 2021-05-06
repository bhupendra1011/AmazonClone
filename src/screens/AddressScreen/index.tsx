import React from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Picker as CountryPicker } from '@react-native-picker/picker';
import countryList from "country-list";
import Button from '../../components/Button';

const countries = countryList.getData();

const AddressScreen = () => {
    const [country, setCountry] = React.useState(countries[0].code);
    const [fullName, setFullName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [city, setCity] = React.useState("")
    const [zipCode, setZipCode] = React.useState("");

    const onCheckout = () => {
        // validating also inline errors validations , reat forms library / formik / formkit
        //TODO: work on forms
        if (!fullName) {
            Alert.alert("Please fill in Name");
            return;
        }

    }
    return (
        <ScrollView style={styles.root}>
            <View style={styles.row}>
                <CountryPicker selectedValue={country} onValueChange={setCountry}>
                    {countries.map(country => <CountryPicker.Item key={country.code} value={country.code} label={country.name} />)}
                </CountryPicker>
            </View>
            {/* full name */}
            <View style={styles.row}>
                <Text style={styles.label}>Full Name ( First and Last Name) </Text>
                <TextInput style={styles.input} placeholder="Enter Name"
                    autoCapitalize="words"
                    value={fullName} onChangeText={setFullName} />
            </View>
            {/* phone number */}
            <View style={styles.row}>
                <Text style={styles.label}>Phone Number </Text>
                <TextInput style={styles.input} placeholder="Enter Phone"
                    keyboardType="phone-pad"
                    value={phone} onChangeText={setPhone} />
            </View>
            {/* address */}
            <View style={styles.row}>
                <Text style={styles.label}>Address</Text>
                <TextInput style={styles.input} placeholder="Enter Address"
                    value={address} onChangeText={setAddress} />
            </View>
            {/* city */}
            <View style={styles.row}>
                <Text style={styles.label}>City</Text>
                <TextInput style={styles.input} placeholder="Enter City"
                    value={city} onChangeText={setCity} />
            </View>
            {/* zip code */}
            <View style={styles.row}>
                <Text style={styles.label}>Zip Code</Text>
                <TextInput style={styles.input} placeholder="Enter Zip Code"
                    value={zipCode} onChangeText={setZipCode} />
            </View>

            <Button text="Use This Adress" onPress={onCheckout} containerStyle={{}} />
        </ScrollView>
    )
}

export default AddressScreen

const styles = StyleSheet.create({
    root: { padding: 10 },
    row: {
        marginVertical: 5
    },
    label: {
        fontSize: 16,
        fontWeight: "bold"
    },
    input: {

        height: 40,
        fontSize: 16,
        backgroundColor: "white",
        padding: 5,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 2

    }
})
