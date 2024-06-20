import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import TriviaScreen from '../screens/TriviaScreen';
import LocationScreen from '../screens/LocationScreen';


const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Trivia" component={TriviaScreen} />
                <Stack.Screen name="LocationScreen" component={LocationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
} 