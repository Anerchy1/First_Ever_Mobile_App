import { StatusBar } from "expo-status-bar";
import { LoremIpsum } from "lorem-ipsum";
import { useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";

export default function Detail() {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 6,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ flex: 1 }}>
        <Image
          source={{ uri: "https://via.placeholder.com/500" }}
          style={{ width: "100%", height: 300 }}
        />
        <View style={{ padding: 12 }}>
          <Text style={{ fontSize: 30, fontWeight: "600" }}>
            {lorem.generateWords(3)}{" "}
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "teal",
              paddingVertical: 8,
              textAlign: "right",
              fontWeight: "600",
            }}
          >
            Price${" "}
          </Text>
          <Text>{lorem.generateParagraphs(4)}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity onLongPress={() => Vibration.vibrate(1000)}>
        <View
          style={{
            position: "absolute",
            right: 12,
            bottom: 12,
            padding: 12,
            backgroundColor: "teal",
            borderWidth: 1,
            borderRadius: 5,
          }}
        >
          <Text>Add to card</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "teal",
//     alignItems: "start",
//     justifyContent: "center",
//   },
// });
