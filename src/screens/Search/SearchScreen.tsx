import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';

const SearchScreen = () => {
    const [searchValue, setSearchedValue] = useState('');

    const updateSearch = (search: string) => {
        setSearchedValue(search)
    }
    return (
        <SearchBar
        platform="android"
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={searchValue}
      />
    )
}

export default SearchScreen;