import React from "react";
import {View,Text, ImageBackground ,TouchableOpacity} from 'react-native';
import img from '../img/background.jpg';

export default class Home extends React.Component{

  constructor(props){

    super(props);
    console.log(props);
  }

render(){
  return(
    
    <ImageBackground source={img} style={{width:400,height:800,flex:1}}>
         <Text style={{color:'black',fontSize:64,textAlign:'center',marginTop:100,fontWeight:'bold'}}>Let's start
         </Text>
         <Text style={{color:'black',fontSize:64,textAlign:'center',fontWeight:'bold'}}>Coding
         </Text>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>
         <View style={{backgroundColor:'white',width:300,height:50,borderRadius:30,margin:40,marginTop:120}}>
                <Text style={{color:'darkgreen',fontWeight:'bold',fontSize:20,textAlign:'center',marginTop:10}}>
                Signup</Text>
              </View>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
             <View style={{backgroundColor:'darkgreen',width:300,height:50,margin:40,borderRadius:30,marginTop:-10}}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:20,textAlign:'center',marginTop:10}}>
                Login</Text>
              </View>
              </TouchableOpacity>

          
  
      </ImageBackground>
        
        )}
}