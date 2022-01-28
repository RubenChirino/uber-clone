import React, { useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

// Icons
import Icon from "react-native-vector-icons/Ionicons";

// Components
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

// Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function MapScreen(props) {
  const Stack = createNativeStackNavigator();

  const { navigation } = props;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "#f3f4f6",
            borderRadius: 999,
            padding: 8,
          }}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Icon name="menu" color="black" size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      {/* <TouchableOpacity
        style={{
          position: "absolute",
          top: 16,
          left: 8,
          backgroundColor: "#f3f4f6",
        }}
      >
        <Icon name="menu" />
      </TouchableOpacity> */}

      <View style={{ height: "50%" }}>
        <Map />
      </View>
      <View style={{ height: "50%" }}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
