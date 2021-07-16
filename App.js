import React from 'react';
import LoginScreen from './src/presentation/login/login';
import RegisterScreen from './src/presentation/register/register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator inititalRoute={LoginScreen}>
              <Stack.Screen
                  name="LoginScreen"
                  component={LoginScreen}
                  options={{ headerShown:false}}/>
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown:false}} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
