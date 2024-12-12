import { Stack } from "expo-router";
import { theme } from "../../theme";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="profile" />
      <Stack.Screen name="splashscreen" />
      <Stack.Screen name="details" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="login" />
    </Stack>
  );
}
