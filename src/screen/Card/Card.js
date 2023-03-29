import React from "react";
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import Subheader from "../../component/Subheader";
import img from "../../img/logo/delete.png";
import img1 from "../../img/a.jpg";
import img2 from "../../img/logo/coupon.png"
import img3 from "../../img/b.jpg";
import img4 from "../../img/logo/credit.png";
import img5 from "../../img/logo/upi.webp";
import img6 from "../../img/logo/wallet.png";
import img7 from "../../img/logo/netbanking.jpg";
import img8 from "../../img/logo/cashonshop.jpg";



class Card extends React.Component {
    constructor(props) {
        super(props)


    }
    render() {
        return (

            <View>
                <ScrollView>

                    <Subheader menu="Cart Screen" nav={this.props.navigation} />

                    <Text style={{ fontSize: 20, color: 'black', marginLeft: 10, marginTop: 30, fontWeight: 'bold' }}>Your Card</Text>
                    <View style={{ backgroundColor: "white", height: 150, width: 350, alignSelf: 'center', marginTop: 15, borderRadius: 10 }}>
                        <Image source={img1} style={{ height: 120, width: 120, marginLeft: 20, marginTop: 15, borderRadius: 10 }} />
                        <Text style={{ marginLeft: 200, marginTop: -100 }}>Fade Hair Cutting style </Text>
                        <Text style={{ marginLeft: 250, marginTop: 10 }}>RS.350</Text>
                        <TouchableOpacity>
                            <Image source={img} style={{ height: 30, width: 30, marginLeft: 250, marginTop: 20 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: "white", height: 150, width: 350, alignSelf: 'center', marginTop: 15, borderRadius: 10 }}>
                        <Image source={img3} style={{ height: 120, width: 120, marginLeft: 20, marginTop: 15, borderRadius: 10 }} />
                        <Text style={{ marginLeft: 200, marginTop: -100 }}>Slick Pompadour Style </Text>
                        <Text style={{ marginLeft: 250, marginTop: 10 }}>RS.250</Text>
                        <TouchableOpacity>
                            <Image source={img} style={{ height: 30, width: 30, marginLeft: 250, marginTop: 20 }} />
                        </TouchableOpacity>
                    </View>


                    <View style={{ backgroundColor: "white", height: 60, width: 350, alignSelf: 'center', marginTop: 15, borderRadius: 10 }}>
                        <TextInput style={{ width: 300, height: 60, borderRadius: 10, fontSize: 30 }}></TextInput>
                        <Image source={img2} style={{ height: 30, width: 30, marginLeft: 305, marginTop: -40 }} />
                    </View>

                    <View style={{ backgroundColor: "white", height: 150, width: 350, alignSelf: 'center', marginTop: 15, borderRadius: 10 }}>
                        <Text style={{ fontSize: 25, marginTop: 5 }}>Fade Hair Cutting Style : </Text>
                        <Text style={{ fontSize: 25, marginLeft: 260, marginTop: -25 }}>RS.250 </Text>
                        <Text style={{ fontSize: 25 }}>Slick Pompadour Style : </Text>
                        <Text style={{ fontSize: 25, marginLeft: 260, marginTop: -25 }}>RS.350 </Text>
                        <Text style={{ color: 'black', fontSize: 25, marginLeft: 20, marginTop: 25 }}>Total : </Text>
                        <Text style={{ fontSize: 25, marginLeft: 100, marginTop: -25 }}>RS.600 </Text>

                    </View>
                    <Text style={{ fontSize: 20, color: 'black', marginLeft: 10, marginTop: 30, fontWeight: 'bold' }}>Payment Method</Text>

                    <View style={{ backgroundColor: 'white', height: 60, width: 350, alignSelf: 'center', marginTop: 15, borderRadius: 10 }}>
                        <Image source={img4} style={{ height: 30, width: 30, marginTop: 15, marginLeft: 10 }} />
                        <Text style={{ fontSize: 25, marginLeft: 50, marginTop: -30 }}> Credit/Debit/ATM Card</Text>
                    </View>

                    <View style={{ backgroundColor: 'white', height: 60, width: 350, alignSelf: 'center', marginTop: 15, borderRadius: 10 }}>
                        <Image source={img5} style={{ height: 30, width: 30, marginTop: 15, marginLeft: 10 }} />
                        <Text style={{ fontSize: 25, marginLeft: 50, marginTop: -30 }}>UPI</Text>
                    </View>

                    <View style={{ backgroundColor: 'white', height: 60, width: 350, alignSelf: 'center', marginTop: 15, borderRadius: 10 }}>
                        <Image source={img6} style={{ height: 30, width: 30, marginTop: 15, marginLeft: 10 }} />
                        <Text style={{ fontSize: 25, marginLeft: 50, marginTop: -30 }}>Wallet Postpaid</Text>
                    </View>

                    <View style={{ backgroundColor: 'white', height: 60, width: 350, alignSelf: 'center', marginTop: 15, borderRadius: 10 }}>
                        <Image source={img7} style={{ height: 30, width: 30, marginTop: 15, marginLeft: 10 }} />
                        <Text style={{ fontSize: 25, marginLeft: 50, marginTop: -30 }}>Net Banking</Text>
                    </View>

                    <View style={{ backgroundColor: 'white', height: 60, width: 350, alignSelf: 'center', marginTop: 15, borderRadius: 10 }}>
                        <Image source={img8} style={{ height: 30, width: 30, marginTop: 15, marginLeft: 10 }} />
                        <Text style={{ fontSize: 25, marginLeft: 50, marginTop: -30 }}>Cash on Shop</Text>
                    </View>



                </ScrollView>
            </View>

        )
    }


}
export default Card;