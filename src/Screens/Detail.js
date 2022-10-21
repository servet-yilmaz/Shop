//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
const Detail = props => {
    const item = props.route.params.item;
    const [color, setColor] = useState('c1');
    const checkmark = () => {
        return (
            <Icon name='checkmark-circle' size={20} style={{ color: 'white', padding: 10 }} />
        )
    }
    return (

        <View style={styles.container}>
            <ImageBackground
                style={styles.bg}
                source={{ uri: item.picture }}
            />
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBack} onPress={() => props.navigation.goBack()}>
                    <Icon name='arrow-back' size={25} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Details</Text>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Icon name='ellipsis-vertical' size={30} />
                </TouchableOpacity>
            </View>

                <View style={styles.descriptionArea}>
                <View style={styles.description}>

                <View style={styles.descTop}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View>
                        <Text style={styles.priceLabel}>Price</Text>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>
                </View>
                <View style={styles.descCenter}>
                    <Icon name='color-filter-sharp' size={26} />
                    <View style={styles.colorArea}>
                        <Text style={styles.colorLabel}>Color</Text>
                        <Text style={styles.colorPipe}>|</Text>
                        <TouchableOpacity activeOpacity={1} onPress={() => setColor('c1')} style={[styles.color, styles.c1]} >{color == 'c1' ? checkmark() : ''}</TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => setColor('c2')} style={[styles.color, styles.c2]} >{color == 'c2' ? checkmark() : ''}</TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => setColor('c3')} style={[styles.color, styles.c3]} >{color == 'c3' ? checkmark() : ''}</TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => setColor('c4')} style={[styles.color, styles.c4]} >{color == 'c4' ? checkmark() : ''}</TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.desc}>{item.desc}</Text>
                </View>
                <TouchableOpacity activeOpacity={.8} style={styles.shopButton}>
                    <Text style={styles.shopText}>Shop Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bg: {
        width: '100%',
        position: 'absolute',
        height: '90%',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center'
    },
    headerBack: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 10
    },
    headerText: {
        marginLeft: -24,
        fontSize: 25,
        fontWeight: 'bold'
    },
    descriptionArea:{
        width: '95%',
        marginStart: '5%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        padding: 30,
        paddingBottom: 0,
        paddingRight: 0,
        borderColor: '#ffffff61',
        borderWidth: 10,
        borderBottomWidth: 0,
        borderRightWidth: 0
    },
    description: {
        paddingRight: 30,
        marginBottom: 30,
    },
    descTop: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        width: '60%'
    },
    priceLabel: {
        color: '#b7b7b7',
        fontWeight: '400'
    },
    price: {
        fontWeight: '800',
        fontSize: 25
    },
    descCenter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20
    },
    colorArea: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'space-between'
    },
    colorLabel: {
        fontSize: 20,
        fontWeight: '500',
        color: '#686868'
    },
    colorPipe: {
        fontSize: 30,
        fontWeight: '200',
        color: '#dde0da',
    },
    color: {
        minWidth: 30,
        minHeight: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    c1: {
        backgroundColor: '#c6ab90'
    },
    c2: {
        backgroundColor: '#cb7a55'
    },
    c3: {
        backgroundColor: '#646b4d'
    },
    c4: {
        backgroundColor: '#dde0da'
    },
    desc: {
        fontSize: 16,
        color: '#151d31',
        fontWeight: '600'
    },
    shopButton:{
        backgroundColor: '#151d31',
        borderTopLeftRadius: 30,
        width: '100%',
        height: 80,
        alignSelf :'flex-end',
        justifyContent: 'center'
    },
    shopText:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        padding: 20,
    }

});

//make this component available to the app
export default Detail;
