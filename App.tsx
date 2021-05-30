import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TicketPage from './src/pages/TicketPage';
import ShopNavigation from './src/navigations/ShopNavigation';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Ticket" component={TicketPage} />
        <Tab.Screen name="ShopNavigation" component={ShopNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App;