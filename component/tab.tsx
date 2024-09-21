import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather, FontAwesome5, Foundation } from "@expo/vector-icons";
import { responsiveWidth } from "react-native-responsive-dimensions";

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
  activeBackgroundColor,
  activeIconColor,
}) => {
  const { navigate } = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        marginVertical: 10,
        marginHorizontal: responsiveWidth(5),
      }}
    >
      {state.routes.map(
        (route: { key: string | number; name: React.Key }, index: any) => {
          const { options } = descriptors[route.key];

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key + "",
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key + "",
            });
          };

          return (
            <TouchableOpacity
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: isFocused ? 1 : 0, // Focused tab takes extra space, others minimal
                flexGrow: isFocused ? 1 : 0, // Makes focused item grow
                minWidth: isFocused ? null : responsiveWidth(18), // Non-focused items take minimal width
                paddingVertical: 10,
                borderRadius: 24,
                margin: 5,
                backgroundColor: isFocused ? activeBackgroundColor : "#fff",
              }}
              key={route.name}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  columnGap: 5,
                }}
              >
                {options.title.toLowerCase() === "home" ? (
                  <Foundation
                    name="home"
                    size={24}
                    color={isFocused ? activeIconColor : "black"}
                  />
                ) : options.title.toLowerCase() === "search" ? (
                  <Feather
                    name="search"
                    size={24}
                    color={isFocused ? activeIconColor : "black"}
                  />
                ) : options.title.toLowerCase() === "shorts" ? (
                  <Feather
                    name="play-circle"
                    size={24}
                    color={isFocused ? activeIconColor : "black"}
                  />
                ) : (
                  <FontAwesome5
                    name="user"
                    size={24}
                    color={isFocused ? activeIconColor : "black"}
                  />
                )}
                {isFocused && (
                  <Text
                    style={{
                      color: "#000",
                      fontSize: 12,
                      fontWeight: "500",
                    }}
                  >
                    {label.toString()}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
};

export default CustomTabBar;
