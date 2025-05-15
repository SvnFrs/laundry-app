import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { UserProvider } from "../contexts/UserContext";
import { OrderProvider } from "@/contexts/OrderContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    const hideSplashAndNavigate = async () => {
      SplashScreen.hideAsync();

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay for splash screen

      router.replace("/(tabs)/(home)");
    };

    hideSplashAndNavigate();
  }, []);

  return (
    <UserProvider>
      <OrderProvider>
        <View style={styles.container}>
          <Stack
            screenOptions={{
              headerShown: false,
              animation: "slide_from_bottom",
              animationDuration: 500,
              contentStyle: {
                backgroundColor: "#FFFFFF",
              },
            }}
          />
        </View>
      </OrderProvider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Default screen color
  },
});
