import Card from "@/components/card";
import { pokemonData } from "@/constants";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: 20, backgroundColor: "#F5F5F5" }}>
          {pokemonData.map((pokemon, index) => {
            return <Card key={index} pokemon={pokemon} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
