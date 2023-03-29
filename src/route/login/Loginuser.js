
import React from 'react';
import { View ,Text} from 'react-native';
 import Login from '../../screen/Login/Login'
import{createStackNavigator} from '@react-navigation/stack'
import Adminnav from '../adminnav/Adminnav';
import Fade from '../../screen/Details/Fade';

const stack = createStackNavigator();
export default class Loginuser extends React.Component{


constructor(){
    super()
}
render(){
    return(
        <>
            <stack.Navigator  screenOptions={{
    headerShown: false
  }}>
                <stack.Screen name ='adminnav' component={Adminnav}/>
                <stack.Screen name ='Login' component={Login}/>
                <stack.Screen name ='fade' component={Fade}/>
            
            
            </stack.Navigator>

        </>

    )
}

}