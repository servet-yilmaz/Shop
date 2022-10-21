//import liraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigationContainer from './src/Router/AppNavigationContainer';

// create a component
const App = () => {
  return (
    <NavigationContainer>
      <AppNavigationContainer />
    </NavigationContainer>
  );
};

//make this component available to the app
export default App;
