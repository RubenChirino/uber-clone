// Packages
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";

// Utils
import { isIos } from "../utils/functions";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import navigationDrawer from "./navigationDrawer";

// Pages
import HomeSreen from "../screens/HomeSreen";
import MapScreen from "../screens/MapScreen";
import EatsScreen from "../screens/EatsScreen";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={isIos() ? "padding" : "height"}
          keyboardVerticalOffset={isIos() ? -64 : 0}
        >
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeSreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                title: "",
                headerTransparent: true,
              }}
            />
            <Stack.Screen
              name="EatsScreen"
              component={EatsScreen}
              options={{
                title: "",
                headerTransparent: true,
              }}
            />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
