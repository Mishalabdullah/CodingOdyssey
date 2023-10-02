import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import { useState } from "react";
export default function App() {
  const today = new Date();

  // Function to calculate the date for the next 45 days
  const getNext45DaysDate = () => {
    const next45Days = new Date();
    next45Days.setDate(today.getDate() + 45); // Add 45 days to today's date
    return next45Days.toDateString();
  };

  // Initialize state for today's date and a flag to show/hide the next date
  const [showNextDate, setShowNextDate] = useState(false);
  const [next45DaysDate, setNext45DaysDate] = useState("");

  // Function to update the date and show it when the button is clicked
  const handleButtonClick = () => {
    setShowNextDate((prevShowNextDate) => !prevShowNextDate);
    if (!showNextDate) {
      setNext45DaysDate(getNext45DaysDate());
    } else {
      setNext45DaysDate("");
    }
  };

  return (
    <ImageBackground
      source={require("./assets/water.jpeg")} // Replace with the path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>LIFE - 45 Days</Text>
        <Text style={styles.text}>What's the date after 45 days ?</Text>
        <Button
          onPress={handleButtonClick}
          title="Click To View"
          color="#000"
          accessibilityLabel="Learn more about this purple button"
        />
        {showNextDate && (
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>
              Today's date: {today.toDateString()}
            </Text>
            <Text style={styles.dateText}>
              Date 45 days later: {next45DaysDate}
            </Text>
          </View>
        )}
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // You can adjust the resizeMode as needed
    justifyContent: "center", // Center the content vertically
  },
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: 10, // Increase space below the text
    fontSize: 24,
  },
  dateText: {
    marginBottom: 10, // Increase space below each date text
    fontSize: 20, // Adjust the font size to your preference
    fontWeight: "bold", // Make the text bold
  },
  dateContainer: {
    marginTop: 10, // Increase space above the date container
  },
  heading: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    position: "absolute", // Position the heading absolutely
    top: 100, // Place the heading at the top
    width: "100%", // Set the width to span the entire screen
    zIndex: 2, // Set a higher zIndex to ensure it's on top
  },
});
