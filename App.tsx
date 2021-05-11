import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopPage from './src/pages/ShopPage';
import TicketPage from './src/pages/TicketPage';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Ticket" component={TicketPage} />
        <Tab.Screen name="Shop" component={ShopPage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App;