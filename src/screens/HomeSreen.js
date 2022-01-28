import React from "react";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";

// Redux
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../redux/slices/navSlice";

// Env variables
import { GOOGLE_MAPS_API_KEY } from "@env";

// Constants
import { GENERAL_STYLES } from "../utils/constants";

// Components
import NavOptions from "../components/NavOptions";

// Packages
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import NavFavorites from "../components/NavFavorites";

export default function HomeSreen() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View
        style={{
          padding: 20,
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={require("../assets/uber-logo.png")}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          returnKeyType={"search"}
          fetchDetails={true}
          placeholder="Ruben, where do you want to go?"
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          minLength={2}
          debounce={400}
          enablePoweredByContainer={false}
        />
        <NavOptions />
        <NavFavorites title="Saved destinations" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    backgroundColor: GENERAL_STYLES.defaultScreenColor,
    height: "100%",
  },
});
