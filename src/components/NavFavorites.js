import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Icons
import { Icon } from "react-native-elements";

const data = [
  {
    id: 1,
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },
  {
    id: 2,
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

export default function NavFavorites({ style, title, titleButton }) {
  return (
    <View style={style}>
      {title && (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {titleButton && titleButton()}
        </View>
      )}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: "#e2e8f0", height: 0.5 }} />
        )}
        renderItem={({ item: { location, destination, icon } }) => (
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", padding: 20 }}
          >
            <Icon
              style={styles.iconStyle}
              name={icon}
              type="ionicon"
              color="black"
              size={18}
            />
            <View>
              <Text style={{ fontWeight: "600", fontSize: 18 }}>
                {location}
              </Text>
              <Text style={{ color: "#6b7280", marginTop: 2 }}>
                {destination}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

NavFavorites;

const styles = StyleSheet.create({
  titleContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#6b7280",
  },
  iconStyle: {
    marginRight: 20,
    borderRadius: 999,
    backgroundColor: "#e2e8f0",
    padding: 15,
  },
});
