import React, { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";

// Env variables
import { GOOGLE_MAPS_API_KEY } from "@env";

// Redux
import { useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../redux/slices/navSlice";
import { useDispatch } from "react-redux";

// Packages
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

export default function Map() {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination) return;
    // Zoom & fit to markers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_API_KEY}`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status !== "REQUEST_DENIED") {
            dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
          } else {
            dispatch(
              setTravelTimeInformation({
                distance: {
                  text: "2.911,6 mi",
                },
                duration: {
                  text: "44 h",
                  value: "160820",
                },
              })
            );
          }
        });
    };

    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_API_KEY]);

  return (
    <MapView
      ref={mapRef}
      style={{ flex: 1 }}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location.lat,
        longitude: origin?.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {/* === Markers === */}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location.lat,
            longitude: origin?.location.lng,
          }}
          title="Origin"
          description={origin?.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination?.location.lat,
            longitude: destination?.location.lng,
          }}
          title="Destination"
          description={destination?.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({});
