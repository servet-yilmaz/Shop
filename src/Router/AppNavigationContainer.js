//import liraries
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Chats from '../Screens/Home';
import Detail from '../Screens/Detail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(119, 146, 142)',
        border: 'transparent',

    },
};

const TabBar = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
            tabBarActiveTintColor: '#151d31',
            tabBarInactiveTintColor: '#6c6c6c',
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#fff',
                height: 50,
                elevation: 9,
                paddingBottom: 10,
                paddingTop: 10,
            },
        }}
            initialRouteName="Home">
            <Tab.Screen options={{
                tabBarHideOnKeyboard: true,
                tabBarIcon: ({ color, size, focused }) => (
                    <Icon
                        name={focused ? "home" : "home-outline"}
                        color={color}
                        size={size}
                    />
                ),
            }} name="Home"
                component={Chats}
            />
            <Tab.Screen options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <Icon
                        name={focused ? "compass" : "compass-outline"}
                        color={color}
                        size={size}
                    />
                ),
            }} name="Explore"
                component={Chats}
            />
            <Tab.Screen options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <Icon
                        name={focused ? "cart" : "cart-outline"}
                        color={color}
                        size={size}
                    />
                ),
            }} name="Cart"
                component={Chats}
            />
            <Tab.Screen options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <Icon
                        name={focused ? "person" : "person-outline"}
                        color={color}
                        size={size}
                    />
                ),
            }} name="Profile"
                component={Chats}
            />
        </Tab.Navigator>

    )
}

// create a component
const AppNavigationContainer = () => {
    return (
        <NavigationContainer theme={MyTheme} independent={true}>
            <Stack.Navigator initialRouteName="index" screenOptions={{ headerShown: false, animation: "slide_from_right" }}>

                <Stack.Screen options={{ headerShown: false, }} name="index" component={TabBar} />
                <Stack.Screen options={{ headerShown: false,  }} name="Detail" component={Detail} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

//make this component available to the app
export default AppNavigationContainer;
