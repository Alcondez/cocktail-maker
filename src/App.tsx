import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

 import React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from './screens/Home/HomeScreen';
import SearchScreen from './screens/Search/SearchScreen';
import store from './store/store';

 const Stack = createStackNavigator();

 const App = () => {

   return (
    <Provider store={store}>
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
  </Provider>
     
   );
 };

 export default App;
