import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, useWindowDimensions } from "react-native";
import { GeneratedCard } from "../../types/card";
import { TrumpCardFront } from "./TrumpCardFront";
import { TrumpCardBack } from "./TrumpCardBack";

interface CardRevealContainerProps {
  card: GeneratedCard;
  onPrint: () => void;
  onNewHero: () => void;
}

export const CardRevealContainer: React.FC<CardRevealContainerProps> = ({
  card,
  onPrint,
  onNewHero,
}) => {
  const [side, setSide] = useState<"front" | "back">("front");
  const { width: windowWidth } = useWindowDimensions();

  const cardWidth = Math.min(340, windowWidth - 32);
  const cardHeight = cardWidth * 1.5;

  return (
    <ScrollView style={styles.scrollWrapper} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.congratsText}>🎉 YOUR PLAYY TRUMP CARD IS READY!</Text>
        <Text style={styles.subText}>Tap below to flip between Front & Back card view</Text>
      </View>

      <View style={styles.cardViewport}>
        {side === "front" ? (
          <TrumpCardFront card={card} width={cardWidth} height={cardHeight} />
        ) : (
          <TrumpCardBack card={card} width={cardWidth} height={cardHeight} />
        )}
      </View>

      <TouchableOpacity
        style={styles.flipBtn}
        onPress={() => setSide(side === "front" ? "back" : "front")}
      >
        <Text style={styles.flipBtnText}>
          🔄 FLIP CARD TO {side === "front" ? "BACK DOSSIER" : "FRONT ARTWORK"}
        </Text>
      </TouchableOpacity>

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.printBtn} onPress={onPrint}>
          <Text style={styles.actionBtnText}>🖨️ PRINT TRUMP CARD</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.newHeroBtn} onPress={onNewHero}>
          <Text style={styles.actionBtnText}>✨ CREATE ANOTHER HERO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollWrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 12,
  },
  congratsText: {
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 1,
    textAlign: "center",
  },
  subText: {
    color: "#64748B",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 4,
    textAlign: "center",
  },
  cardViewport: {
    marginVertical: 10,
  },
  flipBtn: {
    backgroundColor: "#4F46E5",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 14,
    marginVertical: 12,
    borderWidth: 2,
    borderColor: "#E0E7FF",
  },
  flipBtnText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1,
  },
  actionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
    marginTop: 8,
  },
  printBtn: {
    backgroundColor: "#10B981",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 16,
    elevation: 6,
  },
  newHeroBtn: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 16,
    elevation: 6,
  },
  actionBtnText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1,
  },
});
