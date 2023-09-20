import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home, Products, Details} from '../screens'
import { View, Button} from "react-native";
import { Header } from "../components";



const Stack = createNativeStackNavigator()

function StackNavigator () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={({route, navigation}) => ({
              headerShown: true,
            header: () => (
               <View style={{ flexDirection:'row', gap:10 , height:60}}>
                   <Header title={'Aspetto BookStore'}/>
               </View>
              )
            })}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Products' component={Products} />
                <Stack.Screen name='Details' component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default StackNavigator