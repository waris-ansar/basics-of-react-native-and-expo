import { Image, Text, View } from "react-native";
import { styles } from "./styles";

const Card = ({ pokemon }: { pokemon: any }) => {
  const getTypeDetails = (type: string) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };

  return (
    <View
      style={[
        styles.mainContainer,
        { borderColor: getTypeDetails(pokemon.type).borderColor },
      ]}
    >
      <View style={styles.nameContainer}>
        <Text
          style={[
            styles.name,
            { color: getTypeDetails(pokemon.type).borderColor },
          ]}
        >
          {pokemon.name}
        </Text>
        <Text style={styles.hp}>❤️HP: {pokemon.hp}</Text>
      </View>

      <Image
        style={styles.image}
        source={pokemon.image}
        accessibilityLabel={`${pokemon.name} Pokemon`}
        resizeMode="contain"
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge]}>
          <Text style={styles.typeEmoji}>
            {getTypeDetails(pokemon.type).emoji}
          </Text>
          <Text style={styles.typeText}>{pokemon.type}</Text>
        </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {pokemon.moves.join(", ")}</Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          Weakness: {pokemon.weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
};

export default Card;
