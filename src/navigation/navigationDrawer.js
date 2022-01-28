// Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";

// Pages
import HomeScreen from "../screens/HomeSreen";
import EatsScreen from "../screens/EatsScreen";
import MapScreen from "../screens/MapScreen";

export default function navigationDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="EatsScreen" component={EatsScreen} />
      <Drawer.Screen name="MapScreen" component={MapScreen} />
    </Drawer.Navigator>
  );
}
