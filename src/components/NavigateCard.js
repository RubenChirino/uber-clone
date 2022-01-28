import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";

// Constants
import { GENERAL_STYLES } from "../utils/constants";

// Utils
import { showGreeting } from "../utils/functions";

// Icons
import { Icon } from "react-native-elements";

// Redux
import { useDispatch } from "react-redux";
import { setDestination } from "../redux/slices/navSlice";

// Env variables
import { GOOGLE_MAPS_API_KEY } from "@env";

// Packages
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Components
import NavFavorites from "./NavFavorites";

export default function NavigateCard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function goToLocation({ location = undefined, description = undefined }) {
    dispatch(
      setDestination({
        location: location || {
          lat: 40.73061,
          lng: -73.935242,
        },
        description:
          description ||
          "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.",
      })
    );
    navigation.navigate("RideOptionsCard");
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Text style={styles.greetingText}>{showGreeting()}, Ruben</Text>
      <View
        style={{
          borderTopWidth: 1,
          borderColor: "#e5e7eb",
          flexShrink: 1,
        }}
      >
        <View>
          <TouchableOpacity
            style={toInputBoxStyles.container}
            onPress={goToLocation}
          >
            <View style={toInputBoxStyles.textInputContainer}>
              <Text style={toInputBoxStyles.textInput}>Where to?</Text>
            </View>
          </TouchableOpacity>
          {/* <GooglePlacesAutocomplete
            styles={toInputBoxStyles}
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            returnKeyTypes={"search"}
            enablePoweredByContainer={false}
            onPress={(data, details = null) => goToLocation(details.geometry.location, data.description)}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: "en",
            }}
            fetchDetails={true}
            debounce={400}
            minLength={2}
          /> */}
        </View>

        <NavFavorites />
      </View>

      <View style={styles.optionsButtonContainer}>
        <TouchableOpacity
          style={{
            ...styles.optionButton,
            backgroundColor: "black",
          }}
          onPress={() => navigation.navigate("NavigateCard")}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={{ color: "white", textAlign: "center" }}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.optionButton }}
          onPress={() => navigation.navigate("EatsScreen")}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={{ textAlign: "center" }}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: GENERAL_STYLES.defaultScreenColor,
  },
  greetingText: {
    textAlign: "center",
    paddingVertical: 20,
    fontSize: 18,
  },
  optionsButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    marginTop: "auto",
    borderTopWidth: 1,
    borderColor: "#f3f4f6",
  },
  optionButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 999,
  },
});

// For GooglePlacesAutocomplete
const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: GENERAL_STYLES.defaultScreenColor,
    paddingTop: 20,
    flex: 0,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
    paddingVertical: 10,
    paddingLeft: 10,
  },
});
