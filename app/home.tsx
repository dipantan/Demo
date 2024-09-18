import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";

import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
    const { width: screenWidth } = Dimensions.get("window");

    const svgHeight = responsiveHeight(40);
    const svgWidth = 390; // original width in the Path definition
    const scaleX = screenWidth / svgWidth;

    const aspectRatio = 292 / 202;
    const svgWidth2 = responsiveWidth(90); // Adjust this percentage as needed
    const svgHeight2 = svgWidth2 / aspectRatio; // Maintain the aspect ratio

    const Categories = [
        "Construction",
        "Entertainment",
        "Pet Care",
        "Home Care",
        "Events",
        "Healthcare",
    ];

    const rec = [
        'Now share the construction sectors with your anyone can save it as bookmark',
        'Now share the entertainment sectors with your anyone can save it as bookmark',
        'Now share the entertainment sectors with your anyone can save it as bookmark',
    ]

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

            <LinearGradient

                colors={['#feb5b0', '#f1a6bc']}
                style={styles.background}
            >
                <View style={{ height: '80%', justifyContent: 'center', marginLeft: responsiveWidth(5) }}>
                    <Text
                        style={{

                            fontSize: responsiveFontSize(2.8),
                            fontWeight: "700",

                        }}
                    >
                        Hello,
                    </Text>
                    <Text
                        style={{

                            fontSize: responsiveFontSize(2.2),
                            fontWeight: "500",

                        }}
                    >
                        Fancy for a wash today!
                    </Text>
                    <Image
                        source={require('../assets/home/w.png')}
                        style={{ height: responsiveWidth(12), width: responsiveWidth(9), position: 'absolute', bottom: 10 }}
                    />
                    <Image
                        source={require('../assets/home/e.png')}
                        style={{ height: responsiveWidth(8), width: responsiveWidth(7), position: 'absolute', top: '45%', right: 0 }}
                    />
                </View>


            </LinearGradient>


            <Octicons
                style={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                }}
                name="three-bars"
                size={24}
                color="#000"
            />
            <Image
                source={require('../assets/Logo.png')}
                resizeMode='stretch'
                style={{
                    height:
                        responsiveFontSize(2.4), width: responsiveWidth(9), position: 'absolute', top: 22, right: '46%'
                }}
            />
            <MaterialIcons
                style={{
                    position: "absolute",
                    top: 15,
                    right: 15, padding: 5, borderRadius: 4, backgroundColor: '#fbc2c3'
                }}
                name="notifications-none"
                size={responsiveFontSize(3.5)}
                color="#000"
            />



            <View
                style={{


                    marginTop: -responsiveHeight(4.9),
                    backgroundColor: '#fff', borderTopLeftRadius: responsiveWidth(10), borderTopRightRadius: responsiveWidth(10), paddingTop: 20
                }}
            >
                <Image
                    source={require('../assets/home/catt.png')}
                    style={{ height: responsiveWidth(20), width: responsiveWidth(15), position: 'absolute', top: -responsiveHeight(8.5), right: responsiveWidth(38) }}
                />
                <Image
                    source={require('../assets/home/dog.png')}
                    style={{ height: responsiveWidth(20), width: responsiveWidth(18), position: 'absolute', top: -responsiveHeight(8.5), right: responsiveWidth(20) }}
                />
                <Image
                    source={require('../assets/home/cat.png')}
                    style={{ height: responsiveWidth(19), width: responsiveWidth(16.5), position: 'absolute', top: -responsiveHeight(8), right: responsiveWidth(4) }}
                />
                <View
                    style={{
                        backgroundColor: "#eee",
                        width: "90%",
                        borderRadius: 10,
                        marginTop: 10,
                        padding: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: 'center',
                        columnGap: 10,
                        height: responsiveHeight(7)
                    }}
                >
                    <Feather name="search" size={responsiveFontSize(2.99)} color="#ff6593" />
                    <Text style={{ color: "#ff6593" }}>What are you looking for?</Text>
                </View>
                <Image
                    source={require('../assets/home/book.png')}
                    resizeMode="stretch"
                    style={{ height: responsiveWidth(33), width: '90%', alignSelf: 'center', marginTop: 18 }}
                />

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center", marginTop: responsiveHeight(2.4)
                    }}
                >
                    <Text
                        style={{
                            marginStart: responsiveWidth(4.5),
                            fontSize: responsiveFontSize(2.2),
                            fontWeight: "700",

                        }}
                    >
                        Popular Service
                    </Text>
                    <Entypo
                        style={{ marginEnd: responsiveWidth(4.5) }}
                        name="dots-three-horizontal"
                        size={responsiveFontSize(2.5)}
                        color="black"
                    />
                </View>
                <View style={{ width: '92%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between' }}>
                    <Image
                        resizeMode="stretch"
                        source={require("../assets/home/pg.png")}
                        style={[styles.image, { width: '48%', height: responsiveHeight(24), marginRight: 0 }]}
                    />
                    <Image
                        source={require("../assets/home/pw.png")}
                        resizeMode="stretch"
                        style={[styles.image, { width: '48%', height: responsiveHeight(17.3), marginRight: 0 }]}
                    />
                </View>
                <View style={{ width: '92%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 14, justifyContent: 'space-between' }}>

                    <Image
                        source={require("../assets/home/pd.png")}
                        resizeMode="stretch"
                        style={[styles.image, { width: '48%', height: responsiveHeight(17.3), marginRight: 0, }]}
                    />
                    <Image
                        resizeMode="stretch"
                        source={require("../assets/home/pt.png")}
                        style={[styles.image, { width: '48%', height: responsiveHeight(24), marginRight: 0, marginTop: -responsiveHeight(3) }]}
                    />
                </View>
                <View style={{ width: '92%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between' }}>
                    <Image
                        resizeMode="stretch"
                        source={require("../assets/home/pa.png")}
                        style={[styles.image, { width: '48%', height: responsiveHeight(24), marginRight: 0 }]}
                    />

                </View>
            </View>




            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center", marginTop: responsiveHeight(2.4)
                }}
            >
                <Text
                    style={{
                        marginStart: responsiveWidth(4.5),
                        fontSize: responsiveFontSize(2.2),
                        fontWeight: "700",

                    }}
                >
                    Service Providers
                </Text>
                <Entypo
                    style={{ marginEnd: responsiveWidth(4.5) }}
                    name="dots-three-horizontal"
                    size={responsiveFontSize(2.5)}
                    color="black"
                />
            </View>
            {rec.map((item) =>
                <View style={{ width: '92%', alignSelf: 'center', marginTop: 20, justifyContent: 'center' }}>
                    <Image
                        resizeMode="stretch"
                        source={require("../assets/home/tmd.png")}
                        style={[styles.image, { width: '100%', height: responsiveHeight(13), marginRight: 0, marginBottom: 10 }]}
                    />
                    {/* <Text numberOfLines={3} style={{position:'absolute',top:15,right:'18%',width:'50%',fontSize:responsiveFontSize(2),fontWeight:'bold',color:'#060047'}}>{item}</Text> */}
                </View>


            )}

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center", marginTop: responsiveHeight(2.4)
                }}
            >
                <Text
                    style={{
                        marginStart: responsiveWidth(4.5),
                        fontSize: responsiveFontSize(2.2),
                        fontWeight: "700",

                    }}
                >
                    Ratings
                </Text>
                <Entypo
                    style={{ marginEnd: responsiveWidth(4.5) }}
                    name="dots-three-horizontal"
                    size={responsiveFontSize(2.5)}
                    color="black"
                />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center", marginTop: responsiveHeight(2.4),width:'95%'
                }}
            >
                <Text
                    style={{
                        marginStart: responsiveWidth(4.5),
                        fontSize: responsiveFontSize(2),
                        fontWeight: "500",color:'#ff6593'

                    }}
                >
                   13 Reviews
                </Text>
                <Text
                    style={{
                        marginStart: responsiveWidth(4.5),
                        fontSize: responsiveFontSize(2),
                        fontWeight: "500",color:'#ff6593'

                    }}
                >
                   WRITE A REVIEW <Entypo
                    style={{ marginEnd: responsiveWidth(4.5) }}
                    name="edit"
                    size={responsiveFontSize(2.5)}
                    color={'#ff6593'}
                />
                </Text>
                
            </View>
            {rec.map((item) =>
                <View style={{ width: '92%', alignSelf: 'center', marginTop: 20, justifyContent: 'center' }}>
                    <Image
                        resizeMode="stretch"
                        source={require("../assets/home/rate.png")}
                        style={[styles.image, { width: '100%', height: responsiveHeight(13), marginRight: 0, marginBottom: 10 }]}
                    />
                    {/* <Text numberOfLines={3} style={{position:'absolute',top:15,right:'18%',width:'50%',fontSize:responsiveFontSize(2),fontWeight:'bold',color:'#060047'}}>{item}</Text> */}
                </View>


            )}
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '42%',
        height: responsiveHeight(5.2), marginRight: responsiveWidth(1.5),
        resizeMode: "stretch",
    },
    background: {
        height: responsiveHeight(33),
        width: '100%',
    }
});
