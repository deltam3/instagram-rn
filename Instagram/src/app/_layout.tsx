import { Slot, Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
