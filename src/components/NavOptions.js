import React from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

// Redux
import { useSelector } from "react-redux";
import { selectOrigin } from "../redux/slices/navSlice";

// Hooks
import { useNavigation } from "@react-navigation/native";

// Resources
import { Icon } from "react-native-elements/dist/icons/Icon";

const data = [
  {
    id: 1,
    title: "Get a ride",
    image: require("../assets/thumbnails/uberX.webp"),
    screen: "MapScreen",
  },
  {
    id: 2,
    title: "Order food",
    image: require("../assets/thumbnails/uberEats.png"),
    screen: "EatsScreen",
  },
];

export default function NavOptions() {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View
            style={{
              opacity: !origin ? 0.2 : 1,
            }}
          >
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
              source={item.image}
            />
            <Text style={styles.optionTitle}>{item.title}</Text>
            <Icon
              style={styles.optionIcon}
              type="antdesign"
              name="arrowright"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  optionContainer: {
    width: 160,
    margin: 8,
    padding: 8,
    paddingLeft: 24,
    paddingBottom: 32,
    paddingTop: 16,
    backgroundColor: "#e5e7eb",
  },
  optionTitle: {
    marginTop: 8,
    fontSize: 16,
  },
  optionIcon: {
    width: 40,
    marginTop: 16,
    padding: 8,
    backgroundColor: "black",
    borderRadius: 999,
  },
});
