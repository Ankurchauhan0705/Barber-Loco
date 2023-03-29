import React from "react";
import {View,Text } from "react-native";
import Subheader from "../../component/Subheader";
class Notification extends React.Component{

    constructor(props){
        super(props)
        this.state={...props}
        console.log(props);
    }
    render(){
        console.log(this.state.menu);
        return(
            <View>
                
            <Subheader menu="Notification" nav={this.props.navigation}/>
                           <Text>hii</Text>
                           </View>   )
    }


}
export default Notification ;