import * as React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import App from '../src/App';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('App', () => {
  afterEach(cleanup);
  test('page should render correctly', async () => {
    const component = (
        <App />
    );

    const { findByText, findByPlaceholderText } = render(component);
    const navigationButton = await findByText('Search for your favorite cocktail');
    expect(navigationButton).toBeTruthy();
    
  });

  test('it should navigate to a new page when clicking the navigation button', async () => {
    const component = (
        <App />
    );

    const { getByText, findByPlaceholderText } = render(component);
    const navigationButton = getByText('Search for your favorite cocktail');
    fireEvent(navigationButton, 'press');
    const searchBar = await findByPlaceholderText('Search');
    expect(searchBar).toBeTruthy();
  })
})
