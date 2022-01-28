import { Platform } from "react-native";

let isIosValue = null;
function isIos() {
  if (!isIosValue) {
    isIosValue = Platform.OS === "ios";
  }
  return isIosValue;
}

function showGreeting() {
  const date = new Date();
  const hour = date.getHours();
  if (hour >= 0 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good Afternoon";
  } else if (hour >= 18 && hour < 24) {
    greeting = "Good Night";
  }
  return greeting;
}

module.exports = {
  isIos,
  showGreeting,
};
