import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";
import { Stack } from "expo-router";
export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text> This is Header </Text>
      {/* 
      <Stack>
        <Stack.Screen name="index" options={{ title: "My first ever app" }} />
      </Stack> */}
      <Stack screenOptions={{ headerShown: false }} />

      <Text> This is Footer </Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
