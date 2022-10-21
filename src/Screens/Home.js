//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, ActivityIndicator } from 'react-native';
import ProductList from '../Components/ProductList';
import Product from '../Data/products.json';

// create a component
const Home = ({ navigation }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setData(Product.data);
            console.log(data);
        }, 1000);
    });

    const topImage = () => {
        return (
            <View>
                <View style={styles.topImage}>
                    <ImageBackground
                        resizeMode='cover'
                        style={{ width: '120%', marginLeft: -100, marginTop: -30, height: '120%' }}
                        source={{ uri: 'https://i.pcmag.com/imagery/reviews/04xcGVwhozVNfZnEGvepp4v-9..v1569473494.jpg' }}
                    />
                    <View style={styles.topImageText}>
                        <View style={styles.topImageTextArea}>
                            <View style={styles.topImageLeft}>
                                <Text style={styles.topImageLeftTopText}>The Most</Text>
                                <Text style={styles.topImageLeftTopText}>Unique Lights</Text>
                                <Text style={styles.topImageLeftBottomText}>For Daily Living</Text>
                            </View>
                            <View style={styles.topImageRight}>
                                <Text onPress={() => navigation.navigate("Explore")} style={styles.topImageRightText}>Explore</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.label}>New Arrivals</Text>
            </View>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <ProductList
                item={item}
                onPress={() => navigation.navigate("Detail", { item })} />
        )

    }
    return (
        <View
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            overScrollMode='never' style={styles.container}>

            {
                data.length == 0 ? <ActivityIndicator style={styles.loading} size={'large'} /> :
                    <FlatList
                        overScrollMode='never'
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        ListHeaderComponent={topImage()}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        contentContainerStyle={styles.flatList}
                        columnWrapperStyle={{ justifyContent: 'space-around' }}
                    />
            }

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '2.5%',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
    topImage: {
        height: 280,
        borderRadius: 40,
        width: '100%',
        overflow: 'hidden',
    },
    topImageText: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: "#00000050",
        justifyContent: 'flex-end'
    },
    topImageTextArea: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        bottom: 20,
        paddingHorizontal: 20
    },

    topImageLeftTopText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
    topImageLeftBottomText: {
        fontSize: 14,
        fontWeight: '500',
        color: 'white',
        marginTop: 10
    },
    topImageRight: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: 60,
        width: 100,
        textAlign: 'center',
        justifyContent: 'center',
    },
    topImageRightText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    label: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 30,
        color: '#151d31',
        marginStart: 10
    },
    flatList: {
        paddingTop: '2.5%',
        marginBottom: 10,
        justifyContent: 'space-evenly'
    }
});

//make this component available to the app
export default Home;