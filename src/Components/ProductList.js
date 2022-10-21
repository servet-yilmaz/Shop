//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// create a component
const ProductList = props => {
    const item = props.item;
    return (
        <TouchableOpacity style={styles.container} activeOpacity={.5} onPress={props.onPress}>
                <Image
                    style={styles.image}
                    source={{ uri: item.picture }}
                />
                <View style={styles.texts}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '45%',
    },
    image: {
        flex: 1,
        height: 220,
        borderRadius: 20,
        borderWidth: 5,
    },
    texts: {
        marginVertical: 15
    },
    name: {
        fontSize: 18,
        color: '#151d31',
        fontWeight: 'bold',
        marginBottom: 5
    },
    price: {
        fontSize: 16,
        color: '#151d31',
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default ProductList;
