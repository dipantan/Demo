import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { Defs, LinearGradient, Path, Stop, Svg } from "react-native-svg";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Octicons from "@expo/vector-icons/Octicons";
import { router } from "expo-router";

const Index = () => {
  const { width: screenWidth } = Dimensions.get("window");

  const svgHeight = responsiveHeight(40);
  const svgWidth = 390; // original width in the Path definition
  const scaleX = screenWidth / svgWidth;

  const rec = [
    "Now share the construction sectors with your anyone can save it as bookmark",
    "Now share the entertainment sectors with your anyone can save it as bookmark",
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Svg width={screenWidth} height={svgHeight} fill="none">
        <Path
          d={`M0 0h${svgWidth}v136c0 27.614-22.386 50-50 50H0V0z`}
          fill="url(#paint0_linear_2_2187)"
          transform={`scale(${scaleX}, 1)`} // Scale horizontally
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

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
          position: "absolute",
          top: 20,
          left: 4,
          right: 0,
        }}
      >
        <Octicons name="three-bars" size={24} color="#fff" />

        <View>
          <View
            style={{
              backgroundColor: "#FF8A00",
              width: 10,
              height: 10,
              borderRadius: 5,
              alignSelf: "flex-end",
            }}
          />
          <Image
            source={require("../../assets/Logo.png")}
            resizeMode="stretch"
            style={{
              height: responsiveFontSize(2.4),
              width: responsiveWidth(9),
              marginRight: 10,
            }}
          />
        </View>
      </View>

      <ImageBackground
        style={{
          width: responsiveWidth(72),
          height: responsiveHeight(24),
          position: "absolute",
          top: responsiveHeight(10),
        }}
        resizeMode="stretch"
        source={require("../../assets/bg.png")}
      >
        <View
          style={{
            marginTop: "6%",
            marginStart: responsiveWidth(5),
          }}
        >
          <Text style={{ fontSize: responsiveFontSize(1.8) }}>Welcome,</Text>
          <Text
            style={{ fontSize: responsiveFontSize(2.3), fontWeight: "500" }}
          >
            Find your{" "}
          </Text>
          <Text
            style={{ fontSize: responsiveFontSize(2.3), fontWeight: "500" }}
          >
            Dream Sector!
          </Text>

          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              marginTop: responsiveHeight(1.5),
              padding: responsiveWidth(1.5),
              flexDirection: "row",
              alignItems: "center",
              columnGap: 10,
              marginRight: responsiveWidth(5),
            }}
          >
            <Feather
              name="search"
              size={responsiveFontSize(2.8)}
              color="#FF8A00"
            />
            <Text style={{ color: "#999" }}>What are you looking for?</Text>
          </View>
        </View>
      </ImageBackground>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: -responsiveHeight(2.9),
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

      <View
        style={{
          width: "92%",
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TouchableOpacity style={styles.image_container}>
          <Image
            source={require("../../assets/categories/construction.png")}
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.image_container}>
          <Image
            source={require("../../assets/categories/entertainment.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "92%",
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={[styles.image_container, { width: "31%" }]}
          onPress={() => router.push("/pet")}
        >
          <Image
            source={require("../../assets/categories/pet.png")}
            style={[styles.image]}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.image_container, { width: "35%" }]}>
          <Image
            source={require("../../assets/categories/home.png")}
            style={[styles.image]}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.image_container, { width: "30%" }]}>
          <Image
            source={require("../../assets/categories/events.png")}
            style={[styles.image]}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "92%",
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity style={[styles.image_container, { width: "37%" }]}>
          <Image
            source={require("../../assets/categories/health.png")}
            style={[styles.image]}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: responsiveHeight(2.4),
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

      <View
        style={{
          width: "92%",
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          justifyContent: "space-between",
        }}
      >
        <Image
          resizeMode="stretch"
          source={require("../../assets/sector/home.png")}
          style={[
            styles.image,
            { width: "48%", height: responsiveHeight(18.3), marginRight: 0 },
          ]}
        />
        <Image
          source={require("../../assets/sector/helt.png")}
          resizeMode="stretch"
          style={[
            styles.image,
            { width: "48%", height: responsiveHeight(18.3), marginRight: 0 },
          ]}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: responsiveHeight(2.4),
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

      {rec.map((item, index) => (
        <View
          style={{
            width: "92%",
            alignSelf: "center",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          key={index}
        >
          <Image
            resizeMode="stretch"
            source={require("../../assets/rec/rec.png")}
            style={[
              styles.image,
              {
                width: "100%",
                height: responsiveHeight(16),
                marginRight: 0,
                marginBottom: 20,
              },
            ]}
          />
          <Text
            numberOfLines={3}
            style={{
              position: "absolute",
              top: 15,
              right: "18%",
              width: "50%",
              fontSize: responsiveFontSize(1.7),
              fontWeight: "bold",
              color: "#060047",
            }}
          >
            Now share the Construction Sectors with your anyone and can save it
            as bookmark
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: responsiveHeight(5.2),

    resizeMode: "stretch",
  },
  image_container: {
    // backgroundColor: "red",
    marginRight: responsiveWidth(1.5),
    width: "42%",
  },
});
