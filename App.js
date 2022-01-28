import "react-native-gesture-handler";
import React from "react";
// Set up redux
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

// App Navigation
import Navigation from "./src/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
