import React, { useCallback, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, View } from 'react-native';
import { Avatar, Card, ListItem, SearchBar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { Drink, queryDrinks } from '../../store/appReducer';
import { RootState } from '../../store/store';

const SearchScreen = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchedValue] = useState('');
    const {fetching, drinks} = useSelector((state: RootState) => state.app);
    const updateSearch = useCallback((query: string) => {
        setSearchedValue(query);
        if (query.length > 2) {
            dispatch(queryDrinks(query));
        }
    }, [dispatch, setSearchedValue])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ef476f'}}>
            <SearchBar
                platform="android"
                placeholder="Search"
                onChangeText={updateSearch}
                value={searchValue}
            />
            {
                fetching &&
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size="large" color="white" />
                </View>
            }
            
            {
                !fetching &&
                <ScrollView style={{flex: 1}}>
                    {
                        drinks && drinks.map((drink: Drink) => (
                            <Card containerStyle={{padding: 0}} key={drink.id}>
                                <ListItem>
                                    <Avatar size="large" rounded source={{uri: drink.imageUrl}} />
                                    <ListItem.Content>
                                        <ListItem.Title style={{fontSize: 20}}>{drink.name}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            </Card>
                        ))
                    }
                </ScrollView>
            }
            

        </SafeAreaView>
        
    )
}

export default SearchScreen;