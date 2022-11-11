import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./src/navigation/Navigation";
import DataContextProvider from "./src/context/dataContext";

export default function App() {

  return (
    <DataContextProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
    </DataContextProvider>
  );
}
