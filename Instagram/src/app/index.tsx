import { Redirect } from "expo-router";

export default function Home() {
  return <Redirect href="/(auth)" />;
  // return <Redirect href="/(tabs)" />;
  // return <Text>Hello</Text>;
}
