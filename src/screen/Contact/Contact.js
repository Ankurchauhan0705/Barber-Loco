import React from "react";
import {View,Image,Text,ScrollView,Button, TextInputBase, TouchableOpacity} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
//import img from '../../img/background.jpg';
function Contact(){



  return(
  
   
  <View style={{ backgroundColor: 'white', flex:1 }}>
    <ScrollView>
     <View style={{width:400,height:150,backgroundColor:'gray'}}>
      <Text style={{color:'black',fontSize:50,marginTop:15,marginLeft:20}}> Contact Us
      </Text>
      <Text style={{color:'black',fontSize:20,marginTop:10 ,marginLeft:15}}> Please fill the from in a  decent manner</Text>

     </View>
         
         <Text style={{color:'black',fontSize:30,margin:30,marginTop:30}}>Full Name</Text>
         <TextInput  style={{width:350,height:50,backgroundColor:'white',marginLeft:35,borderWidth:1,fontSize:20}}></TextInput> 

         <Text style={{color:'black',fontSize:30,margin:30,marginTop:20}}>E-mail</Text> 
         <TextInput style={{width:350,height:50,backgroundColor:'white',marginLeft:35,borderWidth:1,fontSize:20}}></TextInput>

         <Text style={{color:'black',fontSize:30,margin:30,marginTop:20}}>Phone Number</Text> 
         <TextInput style={{width:350,height:50,backgroundColor:'white',marginLeft:35,borderWidth:1,fontSize:20}}></TextInput>  

         <Text style={{color:'black',fontSize:30,margin:30,marginTop:20}}>Message</Text>   
         <TextInput multiline={true} style={{width:350,height:200,backgroundColor:'white',marginLeft:35,borderWidth:1,paddingBottom:0,fontSize:20}}></TextInput> 

          <TouchableOpacity>
         <View style={{backgroundColor:'gray',height:50,width:100,borderRadius:50,margin:10,marginLeft:35}}><Text style={{color:'white',margin:15,marginLeft:5,fontSize:20}}>SUBMIT</Text></View>
         </TouchableOpacity>
        </ScrollView>
        </View> 
        
        )
}

export default Contact ;