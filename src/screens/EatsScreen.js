import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

// Icons
import Icon from "react-native-vector-icons/Ionicons";

// Constants
import { GENERAL_STYLES } from "../utils/constants";

// Components
import NavServices from "../components/NavServices";
import NavFavorites from "../components/NavFavorites";

export default function EatsScreen(props) {
  const { navigation /* route: { params }, */ } = props;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Icon name="menu" color="#fff" size={35} style={{ marginTop: 20 }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ backgroundColor: GENERAL_STYLES.defaultScreenColor }}>
      {/* Top Box */}
      <View style={topBoxStyles.container}>
        <SafeAreaView>
          <View
            style={{ marginTop: 80, marginBottom: 5, paddingHorizontal: 20 }}
          >
            <Text style={topBoxStyles.title}>In this together</Text>
            <Text style={topBoxStyles.description}>
              Restautants are openning and delivering with Uber Eats
            </Text>
            <TouchableOpacity style={topBoxStyles.orderNowBtn}>
              <Text style={topBoxStyles.orderNowText}>Order now</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <Image
          style={{
            resizeMode: "contain",
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: "red",
          }}
          source={require("../assets/thumbnails/delivery.png")}
        />
      </View>
      {/* Bottom Box */}
      <View style={bottomBoxStyles.container}>
        <NavServices
          style={{ backgroundColor: GENERAL_STYLES.defaultScreenColor }}
        />
        <NavFavorites
          style={{
            backgroundColor: GENERAL_STYLES.defaultScreenColor,
            marginTop: 10,
          }}
          title="Go again"
          titleButton={() => (
            <TouchableOpacity
              style={{
                borderRadius: 999,
                backgroundColor: "#e2e8f0",
                paddingHorizontal: 15,
                paddingVertical: 10,
              }}
            >
              <Text style={{ fontWeight: "500" }}>Schedule</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const topBoxStyles = StyleSheet.create({
  container: {
    height: "45%",
    backgroundColor: "#47b275",
    margin: 0,
    padding: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "white",
  },
  description: {
    marginTop: 18,
    fontSize: 16,
    color: "white",
    width: "80%",
  },
  orderNowBtn: {
    marginTop: 18,
    borderRadius: 999,
    backgroundColor: "black",
    width: 95,
    paddingHorizontal: 6,
    paddingVertical: 9,
  },
  orderNowText: {
    color: "white",
    textAlign: "center",
  },
});

const bottomBoxStyles = StyleSheet.create({
  container: {
    height: "65%",
    backgroundColor: "#f5f5f5",
  },
});
