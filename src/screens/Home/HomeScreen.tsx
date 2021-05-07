import React, { FC } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen: FC<any> = ({navigation}) => {
    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ef476f'}}>
       <StatusBar barStyle='light-content' />
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <Icon
                name="glass"
                size={50}
                color="white"
              />
          <Text style={{ marginTop: 10, marginBottom: 20}}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>CockTail</Text><Text style={{ color: 'white'}}>Finder</Text>
          </Text>
          
         <Button
            buttonStyle={{backgroundColor: 'white', paddingHorizontal: 20}}
            titleStyle={{color: "black", marginLeft: 20}}
            icon={
              <Icon
                name="search"
                size={15}
                color='#ef476f'
              />
            }
            title="Button with icon component"
            onPress={() => navigation.navigate('Search')}
          />
         </View>
     </SafeAreaView>
    )
}
export default HomeScreen;

