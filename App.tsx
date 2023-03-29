import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Logoutuser from "./src/route/logout/Logoutuser";
import Home from "./src/route/Home";
import Register from "./src/screen/Login/Register";
import Login from "./src/screen/Login/Login";
import Adminnav from "./src/route/adminnav/Adminnav";



const stack = createStackNavigator();
function App(){

  return(
 <NavigationContainer>
   <stack.Navigator  screenOptions={{
     headerShown: false
   }}>   
   <stack.Screen name ='Home' component={Home}/>
   <stack.Screen name ='Register' component={Register}/>
   <stack.Screen name ='Login' component={Login}/>
  <stack.Screen name ='Adminnav' component={Adminnav}/>
  

  
  
   <stack.Screen name='logput' component={Logoutuser }/>
    
   </stack.Navigator>

 </NavigationContainer> 

 
  )
}

export default App;