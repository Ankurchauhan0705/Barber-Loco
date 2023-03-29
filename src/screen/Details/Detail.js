import React from "react";
import {View,Image,Text,ScrollView,Button,TouchableOpacity,SafeAreaView} from 'react-native';
import img from'../../img/a.jpg';
import { ScrollView as Gr } from "react-native-gesture-handler";
import a from '../../img/banner/aa.jpg';
import b from '../../img/banner/aaa.jpg';
import c from '../../img/banner/cc.png';
import d from '../../img/banner/dd.jpg';
import e from '../../img/banner/ee.jpg';
import f from '../../img/banner/ff.jpg';
import g from '../../img/banner/gg.jpg';
import h from '../../img/banner/hh.jpg';
import i from '../../img/banner/ii.jpg';
import aa from '../../img/Details/Fade/Fade1.jpg';
import bb from '../../img/Details/Fade/Fade2.jpg';
import cc from '../../img/Details/Fade/Fade3.jpg';
import dd from '../../img/Details/Fade/Fade4.jpg';
import { SliderBox } from "react-native-image-slider-box";
let images= [aa,bb,cc,dd]
export default class Deatil extends React.Component{


    constructor(props){
        super(props)
        let data = this.props.route.params.item
        this.state={product:data,isVisible:false}
this.addProduct=this.addProduct.bind(this);
    }
    addProduct=()=>{
        const{product} =this.state
        console.log(product.id);
        // console.log(2 === 2);
        // console.log(2 === '2');
        // console.log(2 == 2);
        // console.log(2 == '2');
        const{isVisible}=this.state
        this.setState({isVisible:!isVisible})
       // this.props.navigation.navigate('Home')
    }

    componentWillUnmount(){
        console.log("component");
    }
    render(){  

const{product,isVisible}=this.state


  return(
        

    <SafeAreaView style={{flex:1}}>
         <ScrollView style={{flex:1}}>
  <View style={{ backgroundColor: 'white', flex:1 }}>
    
  <SliderBox images={images}/>
     
     <View style={{flex:1}}>
      <View style={{width:'100%',backgroundColor:'red'}}>
      <Image source={img} style={{ width:"100%",borderRadius:30 }}/>
      </View>
    <View style={{flex:1,backgroundColor:'',padding:20,flexDirection:'row'}}>
    <View>
      <Text style={{fontSize:20}}>
       {product.Name}
        </Text>
        <Text style={{fontSize:20,marginLeft:20}}>
       {product.Rate}
        </Text>
        </View>
         <View  style={{flex:1, backgroundColor:isVisible? 'black':"red",borderRadius:20}}>
        <TouchableOpacity onPress={this.addProduct}>
        <Text style={{color:'white',fontWeight:'bold',fontSize:34,marginLeft:15}}>ADD</Text>
        </TouchableOpacity>
        </View>
        </View>
     </View>
    <View style={{flex:1,height:150,borderRadius:5,marginTop:10,padding:10}}>
      
<Gr>
      <Text style={{color:'black',fontSize:20,margin:5}}>
        {product.Deatil}
      </Text>
      </Gr>
      </View>    
    
      </View> 
      <View style={{flex:1,height:100,backgroundColor:'red'}}></View>
    </ScrollView>
    </SafeAreaView>
        
        )
}
}