import { Stack } from "expo-router";
import { theme } from "../../theme";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="myaccount"
        options={{ label: "My Account", title: "My Account" }}
      />
    </Stack>
  );
}
