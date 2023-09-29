import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Pedometer } from "expo-sensors";
import { useState, useEffect } from "react";

export default function App() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);
  const [permissionCheck, setPermissionCheck] = useState(false);
  const subscribe = async () => {
    const permissionCheck = Pedometer.getPermissionsAsync();
    const isAvailable = await Pedometer.isAvailableAsync();

    setIsPedometerAvailable(String(isAvailable));

    if (permissionCheck) {
      setPermissionCheck(true);
    }

    if (isAvailable) {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      const subscription = Pedometer.watchStepCount((result) => {
        setCurrentStepCount(result.steps);
      });

      // You can return the subscription to keep a reference to it.
      return subscription;
    }
  };

  useEffect(() => {
    let subscription;

    const startSubscription = async () => {
      subscription = await subscribe();
    };

    startSubscription();

    // Clean up the subscription when the component unmounts.
    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>
        Pedometer.isAvailableAsync(): {isPedometerAvailable}
      </Text>
      <Text style={{ color: "white" }}>
        The Permission value is {JSON.stringify(permissionCheck)}
      </Text>
      <Text style={{ color: "white" }}>
        Steps taken in the last 24 hours: {pastStepCount}
      </Text>
      <Text style={{ color: "white" }}>
        Walk! And watch this go up: {currentStepCount}
      </Text>
      <Text style={{ color: "white" }}>Step Counter Version 0.1</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
