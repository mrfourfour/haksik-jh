import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import ShopPage from '../../pages/ShopPage';

const Stack = createStackNavigator();

function ShopNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Shop" component={ShopPage} />
        </Stack.Navigator>
    )
}

export default ShopNavigation;