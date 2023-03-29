
import React from 'react';
import { View ,Text} from 'react-native';
 import Login from '../../screen/Login/Login'
import{createDrawerNavigator} from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screen/Home/Home';
import Deatil from '../../screen/Details/Detail';
import Card from '../../screen/Card/Card';
import Notification from '../../screen/Notification/Notification';
import Appointment from '../../screen/Appointment/Appointment';
import Contact from '../../screen/Contact/Contact';
import { firebase } from '@react-native-firebase/firestore';
import Firebase from '../../Firebase';

const drawer = createDrawerNavigator();
const stact =createStackNavigator();
export default class Adminnav extends React.Component{


constructor(){
    super()
}
infoProduct=()=>(
    <stact.Navigator  screenOptions={{
        headerShown: false
      }}>
        <stact.Screen name="Home" component={Home} />
        <stact.Screen name="Deatil" component={Deatil} />
        <stact.Screen name="card" component={Card} />
        <stact.Screen name="notification" component={Notification} />
        <stact.Screen name="appointment" component={Appointment} />  
    
    </stact.Navigator>

)

render(){
    return(
        <>
            <drawer.Navigator  screenOptions={{
        headerShown: false
      }} >
                <drawer.Screen name ='Home' component={this.infoProduct}/>
                <drawer.Screen name ='contact' component={Contact}/>
                <drawer.Screen name ='firebase' component={Firebase}/>
            
            </drawer.Navigator>

        </>

    )
}

}