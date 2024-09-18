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
  Circle,
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Svg,
} from "react-native-svg";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Octicons from "@expo/vector-icons/Octicons";

const Index = () => {
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

  const rec =[
    'Now share the construction sectors with your anyone can save it as bookmark',
    'Now share the entertainment sectors with your anyone can save it as bookmark',
  ]

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Svg width={screenWidth} height={svgHeight} fill="none">
        <Path
          d={`M0 0h${svgWidth}v136c0 27.614-22.386 50-50 50H0V0z`}
          scaleX={scaleX} // Adjust path scale horizontally
          fill="url(#paint0_linear_2_2187)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_2_2187"
            x1={-17.3333}
            y1={-6.85875}
            x2={5.07866}
            y2={246.657}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#a77dff" />
            <Stop offset={1} stopColor="#F7F3FF" />
          </LinearGradient>
        </Defs>
      </Svg>


      <Octicons
        style={{
          position: "absolute",
          top: 20,
          left: 20,
        }}
        name="three-bars"
        size={24}
        color="#fff"
      />
      <Image 
      source={require('../assets/Logo.png')}
      resizeMode='stretch'
      style={{height:
        responsiveFontSize(2.4), width: responsiveWidth(9), position: 'absolute', top: 20, right:20
      }}
      />

      <Svg
        width={svgWidth2}
        height={svgHeight2}
        fill="none"
        style={{
          position: "absolute",
          top: svgHeight2 / 2.8,
          left: -4,
          //   backgroundColor: "red",
        }}
      >
        <Defs>
          <ClipPath id="a">
            <Rect width={102} height={72} rx={20} fill="#fff" />
          </ClipPath>
        </Defs>
        <Path
          d="M32.731 6.076h226.013c15.944 0 28.868 13.028 28.868 29.098V144.62c0 16.07-12.924 29.097-28.868 29.097H34.306c-7.453 1.027-28.969 7.875-29.267 26.657 0 1.964-.003 2.21-.003.396 0-.133 0-.265.003-.396.005-13.016-.066-101.469-1.416-164.15C3.268 19.742 16.373 6.077 32.73 6.077z"
          fill="#edffce"
          strokeWidth={0.96608}
        />
        <G
          clipPath="url(#a)"
          transform="matrix(1.07173 .00885 0 1.04858 178.63 5.14)"
        >
          <Circle cx={82.5} cy={17.5} r={44.5} fill="#fff" />
          <Circle cx={85} cy={14} r={30} fill="#ffe600" />
          <Circle cx={38} cy={30} r={16} fill="#8002ff" />
          <Circle cx={77.5} cy={60.5} r={8.5} fill="#ff5e5e" />
        </G>

        <View
          style={{
            marginTop: '8%',
            marginStart: responsiveWidth(6.5),
          }}
        >
          <Text style={{ fontSize: responsiveFontSize(1.8) }}>Welcome,</Text>
          <Text
            style={{ fontSize: responsiveFontSize(2.5), fontWeight: "500" }}
          >
            Find your{" "}
          </Text>
          <Text
            style={{ fontSize: responsiveFontSize(2.5), fontWeight: "500" }}
          >
            Dream Sector!
          </Text>

          <View
            style={{
              backgroundColor: "#fff",
              width: "72%",
              borderRadius: 10,
              marginTop: 10,
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              columnGap: 10,
            }}
          >
            <Feather name="search" size={responsiveFontSize(2.99)} color="#FF8A00" />
            <Text style={{ color: "#999" }}>What are you looking for?</Text>
          </View>
        </View>
      </Svg>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",marginTop:-responsiveHeight(2.9)
        }}
      >
        <Text
          style={{
            marginStart: responsiveWidth(4.5),
            fontSize: responsiveFontSize(2.2),
            fontWeight: "700",
            
          }}
        >
          Explore Categories
        </Text>
        <Entypo
          style={{ marginEnd: responsiveWidth(4.5) }}
          name="dots-three-horizontal"
          size={responsiveFontSize(2.5)}
          color="black"
        />
      </View>

      <View style={{width:'92%',alignSelf:'center',flexDirection:'row',alignItems:'center',marginTop:20,}}>
        <Image
          source={require("../assets/categories/construction.png")}
          style={styles.image}
        />
        <Image
          source={require("../assets/categories/entertainment.png")}
          style={[styles.image,{width:'43%'}]}
        />
      </View>
      <View style={{width:'92%',alignSelf:'center',flexDirection:'row',alignItems:'center',marginTop:10,}}>
      <Image
          source={require("../assets/categories/pet.png")}
          style={[styles.image,{width:'31%'}]}
        />
        <Image
          source={require("../assets/categories/home.png")}
          style={[styles.image,{width:'35%'}]}
        />
         <Image
          source={require("../assets/categories/events.png")}
          style={[styles.image,{width:'30%'}]}
        />
         
      </View>
      <View style={{width:'92%',alignSelf:'center',flexDirection:'row',alignItems:'center',marginTop:10,}}>
      <Image
          source={require("../assets/categories/health.png")}
          style={[styles.image,{width:'37%'}]}
        />
        
        </View>
        
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",marginTop:responsiveHeight(2.4)
        }}
      >
        <Text
          style={{
            marginStart: responsiveWidth(4.5),
            fontSize: responsiveFontSize(2.2),
            fontWeight: "700",
            
          }}
        >
          Popular Sector
        </Text>
        <Entypo
          style={{ marginEnd: responsiveWidth(4.5) }}
          name="dots-three-horizontal"
          size={responsiveFontSize(2.5)}
          color="black"
        />
      </View>
      <View style={{width:'92%',alignSelf:'center',flexDirection:'row',alignItems:'center',marginTop:20,justifyContent:'space-between'}}>
        <Image
        resizeMode="stretch"
          source={require("../assets/sector/home.png")}
          style={[styles.image,{width:'48%',height:responsiveHeight(18.3),marginRight:0}]}
        />
        <Image
          source={require("../assets/sector/helt.png")}
          resizeMode="stretch"
          style={[styles.image,{width:'48%',height:responsiveHeight(18.3),marginRight:0}]}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",marginTop:responsiveHeight(2.4)
        }}
      >
        <Text
          style={{
            marginStart: responsiveWidth(4.5),
            fontSize: responsiveFontSize(2.2),
            fontWeight: "700",
            
          }}
        >
          Recommended For You
        </Text>
        <Entypo
          style={{ marginEnd: responsiveWidth(4.5) }}
          name="dots-three-horizontal"
          size={responsiveFontSize(2.5)}
          color="black"
        />
      </View>
     { rec.map((item)=>
     <View style={{width:'92%',alignSelf:'center',marginTop:20,justifyContent:'center'}}>
     <Image
     resizeMode="stretch"
       source={require("../assets/rec/rec.png")}
       style={[styles.image,{width:'100%',height:responsiveHeight(15),marginRight:0,marginBottom:20}]}
     />
     <Text numberOfLines={3} style={{position:'absolute',top:15,right:'18%',width:'50%',fontSize:responsiveFontSize(2),fontWeight:'bold',color:'#060047'}}>{item}</Text>
   </View>
    
    
    ) }
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width:'42%',
    height: responsiveHeight(5.2),marginRight:responsiveWidth(1.5),
    resizeMode: "stretch",
  },
});
