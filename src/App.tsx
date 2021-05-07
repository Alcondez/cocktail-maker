import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

 import React from 'react';
 import {
   Alert,
   Image,
   SafeAreaView,
   StatusBar,
   View,
 } from 'react-native';

 const App = () => {

   return (
     <SafeAreaView style={{ flex: 1}}>
       <StatusBar barStyle='light-content' />
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <Icon
                name="glass"
                size={50}
                color="black"
              />
          <Text style={{fontWeight: 'bold'}}>CockTail</Text><Text>Finder</Text>
         <Button
            icon={
              <Icon
                name="search"
                size={15}
                color="white"
              />
            }
            title="Button with icon component"
          />
         </View>
     </SafeAreaView>
   );
 };

 export default App;
