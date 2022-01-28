import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

// Navigation
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 1,
    title: "Ride",
    image: require("../assets/thumbnails/uberX.webp"),
    screen: "MapScreen",
  },
  {
    id: 2,
    title: "Order Food",
    image: require("../assets/thumbnails/food.png"),
    screen: "EatsScreen",
  },
  {
    id: 3,
    title: "Grocery",
    image: require("../assets/thumbnails/grocery.png"),
    screen: "EatsScreen",
  },
];

export default function NavServices({ style }) {
  const navigation = useNavigation();

  function handleOnPress({ screen }) {
    navigation.navigate(screen);
  }

  return (
    <View style={{ paddingVertical: 25, ...style }}>
      <FlatList
        horizontal
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-around",
        }}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => handleOnPress({ screen: item.screen })}
          >
            <Image style={styles.optionImage} source={item.image} />
            <Text style={styles.optionText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  optionContainer: {
    width: 80,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  optionImage: {
    width: 75,
    height: 60,
    resizeMode: "contain",
  },
  optionText: {
    fontSize: 15,
    marginTop: 10,
  },
});
