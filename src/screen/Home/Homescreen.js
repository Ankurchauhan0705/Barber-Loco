import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Fade from '../Details/Fade';
import Buzz from '../Details/Buzz';
import Caesar from '../Details/Caesar';
import Long from '../Details/Long';
import Short from '../Details/Short';
import Textured from '../Details/Textured';
import Wolf from '../Details/Wolf';
import Spice from '../Details/Spice';
import Katora from '../Details/Katora';
import Shag from '../Details/Shag';
export default class Homescreen extends React.Component{


    constructor(){
        super()
    }

render(){

    const Stack = createStackNavigator();
    return(

        <Stack.Navigator>

            <Stack.Screen  name="home" component={Home}/>
            <Stack.Screen  name="fade" component={Fade}/>                                     
            <Stack.Screen  name="buzz" component={Buzz}/>
            <Stack.Screen  name="caesar" component={Caesar}/>
            <Stack.Screen  name="long" component={Long}/>
            <Stack.Screen  name="short" component={Short}/>
            <Stack.Screen  name="textured" component={Textured}/>
            <Stack.Screen  name="wolf" component={Wolf}/>
            <Stack.Screen  name="spice" component={Spice}/>
            <Stack.Screen  name="katora" component={Katora}/>
            <Stack.Screen  name="shag" component={Shag}/>



         </Stack.Navigator>


        


    );
}

} 