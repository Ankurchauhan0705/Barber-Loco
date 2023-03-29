import React from "react";
import {View,Text, ImageBackground,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import img from '../../img/background.jpg';

function Register(){

  return(
    
    <ImageBackground source={img} style={{flex:1}}>
        <ScrollView>
         <Text style={{color:'black',fontSize:64,textAlign:'center',marginTop:10,fontWeight:'bold'}}>Register</Text>
         <Text style={{color:'black',textAlign:'center',fontSize:40}}>Create a new account</Text>

             <View style={{backgroundColor:'white',height:750,width:400,marginTop:10,borderTopLeftRadius:150,marginLeft:5 }}>
        
                
              <TextInput placeholder="First Name" style={{backgroundColor:'gray',width:300,height:50,margin:30,borderRadius:30,
              marginTop:70,textAlign:'center',marginLeft:40}}>
              </TextInput>
              
              <TextInput placeholder="Middle Name" style={{backgroundColor:'gray',width:300,height:50,margin:30,borderRadius:30,
              marginTop:-0.5,textAlign:'center',marginLeft:40}}>
              </TextInput>

              <TextInput placeholder="Last Name" style={{backgroundColor:'gray',width:300,height:50,margin:30,borderRadius:30,
              marginTop:-0.5,textAlign:'center',marginLeft:40}}>
              </TextInput>

              <TextInput placeholder="Email/User Name" style={{backgroundColor:'gray',width:300,height:50,margin:30,borderRadius:30,
              marginTop:-0.5,textAlign:'center',marginLeft:40}}>
              </TextInput>

              <TextInput placeholder="Phone Number" style={{backgroundColor:'gray',width:300,height:50,margin:30,borderRadius:30,
              marginTop:-0.5,textAlign:'center',marginLeft:40}}>
              </TextInput>

              <TextInput placeholder="Password" style={{backgroundColor:'gray',width:300,height:50,margin:30,borderRadius:30,
              marginTop:-0.5,textAlign:'center',marginLeft:40}}>
                </TextInput>

              <TextInput placeholder="Confrom Password" style={{backgroundColor:'gray',width:300,height:50,margin:30,borderRadius:30,
              marginTop:-0.5,textAlign:'center',marginLeft:40}}>
                 </TextInput>
              
              <TouchableOpacity>
               <View style={{backgroundColor:'darkgreen',width:300,height:50,margin:30,borderRadius:30,marginTop:0,marginLeft:40}}>
                <Text style={{color:'white',fontWeight:'bold',marginLeft:130,marginTop:15}}> Signup
                </Text>
              </View>
              </TouchableOpacity> 
        
              <Text style={{color:'red',textAlign:'center',marginTop:-15,marginLeft:30}}>Already have an account ? </Text>

              <TouchableOpacity >
               <Text style={{color:'darkgreen',fontWeight:'bold',marginLeft:285,marginTop:-15.1}}> Login</Text>
               </TouchableOpacity>
       
             </View>
             </ScrollView>
      </ImageBackground>

 
 
      )
}

export default Register;