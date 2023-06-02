import { Image, Text, View } from "react-native";

export default function ProductCard({ product }) {
  console.log("product", product);
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: "#fff",
        margin: 10,
      }}
    >
      <Text
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "absolute",
          zIndex: 2,
          paddingHorizontal: 10,
          paddingVertical: 5,
          color: "#fff",
          fontWeight: "bold",
          fontSize: 18,
          borderRadius: 5,
          right: 10,
          top: 10,
        }}
      >
        {product.rating.rate}
      </Text>
      <Image
        source={{ uri: product.image }}
        style={{ width: "100%", height: 200 }}
      />
      <View style={{ padding: 12, borderTopWidth: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {product.title}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#666", fontWeight: "bold" }}>
            {product.category}
          </Text>
          <Text style={{ color: "green", fontSize: 18, fontWeight: "bold" }}>
            {product.price}
          </Text>
        </View>
      </View>
    </View>
  );
}
