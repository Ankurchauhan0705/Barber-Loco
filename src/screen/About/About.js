import React from "react";
import {View,Image,Text,ScrollView,Button} from 'react-native';
//import img from '../../img/background.jpg';
import img from'../../img/a.jpg';


import {data} from '../../data/data';
function About(){



  return(
  
   
  <View style={{ backgroundColor: 'white', flex:1 }}>
    <ScrollView>
     
     <View style={{backgroundColor:'white',height:350,width:300,marginLeft:50}}>
      <Image source={img} style={{ width:300,height:350,borderRadius:30 }} />
      <Text style={{color:'black',fontWeight:'bold',fontSize:34,marginTop:-25,fontFamily:'Teko-Bold',marginLeft:-50 }}>
        {'\n'}
        {data[0].Name[0]} {'\n'}
        {data[1].Rate[0]}
        
      </Text>
      </View>
      <Text style={{color:'black',fontSize:20,marginTop:110,marginLeft:20}}>A fade haircut is one of those classic barber styles that are as unique as the individual who wears one.
        There are many different ways to clipper the head,
        and a fade is the perfect example of short haircuts for men that are perfectly blended from top to bottom.
        {'\n'}
        Before you venture to the salon or shop, you should know a few general basics about this cut.
        Pictures speak volumes when it comes to communicating with your barber or stylist. If you just say you want a fade haircut,
        you may no idea what you’ll end up with. Read on to understand how to do this short clipper cut and what it entails
        </Text>
    
        </ScrollView>
        </View> 
        
        )
}

export default About ;