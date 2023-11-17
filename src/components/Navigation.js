import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';



const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Profile" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


