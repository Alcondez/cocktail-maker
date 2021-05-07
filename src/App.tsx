import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

 import React from 'react';
import HomeScreen from './screens/Home/HomeScreen';
import SearchScreen from './screens/Search/SearchScreen';

 const Stack = createStackNavigator();

 const App = () => {

   return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
      <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
  </NavigationContainer>
     
   );
 };

 export default App;
