import { Redirect } from "expo-router";
import { Text } from "react-native";

export default function Home() {
  return <Redirect href="/(auth)" />;
  // return <Redirect href="/(tabs)" />;
  // return <Text>Hello</Text>;
}
