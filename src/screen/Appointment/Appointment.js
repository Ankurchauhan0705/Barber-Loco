import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Subheader from "../../component/Subheader";
import v from '../../img/Specialist/v.png';
class Appointment extends React.Component {

    constructor(props) {
        super(props)
        this.state = { ...props }
        console.log(props);
    }
    render() {
        console.log(this.state.menu);
        return (
            <View>

                <Subheader menu="Appointment" nav={this.props.navigation} />

                <Text style={{ color: 'black', fontSize: 30, marginLeft: 10 ,fontWeight:'bold'}}>Appointment</Text>
                <Text style={{ color: 'black', fontSize: 30, marginLeft: 10 ,fontWeight:'bold'}}>Choose Date & Time</Text>


                <Text style={{ color: 'black', fontSize: 30, marginTop: 200, marginLeft: 10 ,fontWeight:'bold'}}>February</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'black', marginLeft: 20, marginTop: 20, fontSize: 15 }}>9:00 AM</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', marginTop: -14 }}>9:30 AM</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ color: 'black', fontSize: 15, alignSelf: 'flex-end', marginTop: -17, marginRight:20 }}>10:00 AM</Text>
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 30, marginTop: 80, marginLeft: 10 ,fontWeight:'bold'}}> Choose Beauty Specialist </Text>
                <Image source={v} style={{ margin: 20, width: 120, height: 120, marginLeft:40 }}></Image>
                <Text style={{ color: 'black', fontSize: 20, marginLeft: 20, marginTop:-20 }}>Vikas Marwah</Text>
                <Image source={v} style={{ margin: 20, width: 120, height: 120, marginLeft:200,marginTop:-141 }}></Image>
                <Text style={{ color: 'black', fontSize: 20, marginLeft: 200, marginTop:-20 }}>Vikas Marwah</Text>
                <TouchableOpacity>
                    <View style={{ backgroundColor: 'black', width: 300, height: 50, margin: 40, borderRadius: 30, marginTop: 20 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 10 }}>
                            Book Appointment</Text>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }


}
export default Appointment;