import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyFlatList from './Home';
import MyExperienceWithALS from './QuizPages/MyExperienceWithALS';
import VikramSarabhai from './QuizPages/VikramSarabhai';
import FutureOfJobs from './QuizPages/FutureOfJobs';
import AmbassadorsOfCultureAndArts from './QuizPages/AmbassadorsOfCultureAndArts';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyFlatList}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="MyExperienceWithALS"
          component={MyExperienceWithALS}
          options={{ title: 'My Experience with ALS Quiz' }}
        />
        <Stack.Screen
          name="VikramSarabhai"
          component={VikramSarabhai}
          options={{ title: 'Vikram Sarabhai Quiz' }}
        />
        <Stack.Screen
          name="FutureOfJobs"
          component={FutureOfJobs}
          options={{ title: 'The Future of Jobs Quiz' }}
        />
        <Stack.Screen
          name="AmbassadorsOfCultureAndArts"
          component={AmbassadorsOfCultureAndArts}
          options={{ title: 'Ambassadors of Culture and Arts Quiz' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
