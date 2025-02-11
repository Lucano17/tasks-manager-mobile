import { Image, StyleSheet, Platform, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FlatList } from "react-native-reanimated/lib/typescript/Animated";
import { useEffect, useState } from "react";
import { fetchTasks } from "@/api/getTasks";

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    fetchTasks().then((games) => {
      setTasks(tasks)
    })
  },[])
  return (
    <ThemedView
      style={{
        flex: 1,
        padding: 40,
        paddingTop: 80,
        gap: 16,
        overflow: "hidden",
      }}
    >
      <Text style={{color: "red"}}>Home</Text>
      {/* <FlatList
      data={tasks}
      keyExtractor={(task) => task.id}
      renderItem={({item, index}) => (
        <Text id={tasks.id}></Text>
      )}
      >

      </FlatList> */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
