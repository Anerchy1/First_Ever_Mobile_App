import { FlatList, SafeAreaView, Text, View } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
export default function Index() {
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
  if (loading) return <Text>Loading ...</Text>;
  return (
    <FlatList
      data={items}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={{ width: "50%", height: 300 }}>
          <Link href="/product">
            <ProductCard product={item} key={item.id} />
          </Link>
        </View>
      )}
    />
  );
}
