import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

// Redux
import { selectTravelTimeInformation } from "../redux/slices/navSlice";

// Icons
import { Icon } from "react-native-elements";

// Constants
import { GENERAL_STYLES, SURGE_CHARGE_RATE } from "../utils/constants";

// Navigation
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const data = [
  {
    id: "Uber-X-796",
    title: "UberX",
    multiplier: 1,
    image: require("../assets/thumbnails/uberX.webp"),
  },
  {
    id: "Uber-XL-102",
    title: "Uber XL",
    multiplier: 1.2,
    image: require("../assets/thumbnails/uberXL.webp"),
  },
  {
    id: "Uber-LUX-358",
    title: "Uber LUX",
    multiplier: 1.75,
    image: require("../assets/thumbnails/uberLUX.webp"),
  },
];

export default function RideOptionsCard() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView
      style={{
        backgroundColor: GENERAL_STYLES.defaultScreenColor,
        flexGrow: 1,
      }}
    >
      <View>
        <TouchableOpacity
          style={styles.backArrow}
          onPress={() => navigation.navigate("NavigateCard")}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>
        Select a Ride - {travelTimeInformation?.distance?.text}
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              ...styles.rideOptionContainer,
              backgroundColor:
                item.id === selected?.id ? "#e5e7eb" : "transparent",
            }}
            onPress={() => setSelected(item)}
          >
            <Image style={styles.rideOptionImg} source={item.image} />
            <View>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                {item.title}
              </Text>
              <Text style={{ marginTop: 4 }}>
                {travelTimeInformation?.duration?.text} Travel time
              </Text>
            </View>
            <Text style={{ fontSize: 18 }}>
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "USD",
              }).format(
                (travelTimeInformation?.duration?.value *
                  SURGE_CHARGE_RATE *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View
        style={{ marginTop: "auto", borderTopWidth: 1, borderColor: "#e5e7eb" }}
      >
        <TouchableOpacity
          disabled={!selected}
          style={{
            ...styles.chooseBtn,
            backgroundColor: !selected ? "#d1d5db" : "black",
          }}
        >
          <Text style={styles.chooseText}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backArrow: {
    position: "absolute",
    top: 5,
    left: 20,
    padding: 15,
    borderRadius: 99,
  },
  title: {
    position: "relative",
    alignSelf: "center",
    zIndex: 0,
    textAlign: "center",
    paddingVertical: 20,
    fontSize: 18,
    width: 270,
  },
  rideOptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 35,
  },
  rideOptionImg: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  chooseBtn: { paddingVertical: 12, margin: 12 },
  chooseText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
});
