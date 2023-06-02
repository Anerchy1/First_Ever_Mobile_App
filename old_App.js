import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import ProductCard from "./components/ProductCard";
import { useEffect, useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      {loading && <Text>Loading...</Text>}
      {!loading && (
        <FlatList
          data={items}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={{ width: "50%" }}>
              <ProductCard product={item} key={item.id} />
            </View>
          )}
        />
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
