import { Stack } from "expo-router";
import { theme } from "../../theme";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="myaccount"
        options={{ label: "My Account", title: "My Account" }}
      />
      <Stack.Screen name="about" options={{ label: "About", title: "About" }} />
      <Stack.Screen
        name="changepassword"
        options={{ label: "Change Password ", title: "Change Password" }}
      />
      <Stack.Screen
        name="helpsupport"
        options={{ label: "Help & Support", title: "Help & Support" }}
      />
      <Stack.Screen
        name="privacypolicy"
        options={{ label: "Privacy Policy", title: "Privacy Policy" }}
      />
      <Stack.Screen
        name="rulesguidelines"
        options={{ label: "Rules & Guidelines", title: "Rules & Guidelines" }}
      />
      <Stack.Screen
        name="useragreement"
        options={{ label: "User Agreement", title: "User Agreement" }}
      />
    </Stack>
  );
}
