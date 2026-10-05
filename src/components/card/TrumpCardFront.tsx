import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GeneratedCard } from "../../types/card";
import { PlayyComposition } from "../playys/PlayyComposition";

interface TrumpCardFrontProps {
  card: GeneratedCard;
  width?: number;
  height?: number;
}

export const TrumpCardFront: React.FC<TrumpCardFrontProps> = ({
  card,
  width = 340,
  height = 520,
}) => {
  const { config, stats, archetype, id } = card;

  return (
    <View style={[styles.cardBorder, { width, height }]}>
      <View style={styles.cardInner}>
        <View style={styles.headerRow}>
          <View style={styles.elementBadge}>
            <Text style={styles.elementText}>{archetype.element}</Text>
          </View>
          <View style={styles.rarityBadge}>
            <Text style={styles.rarityText}>{archetype.rarity.toUpperCase()}</Text>
          </View>
        </View>

        <Text style={styles.characterName} numberOfLines={1}>
          {(config.name || "UNNAMED HERO").toUpperCase()}
        </Text>
        <Text style={styles.archetypeTitle}>{archetype.title}</Text>

        <View style={[styles.svgContainer, { height: height * 0.52 }]}>
          <PlayyComposition config={config} mode="color" showBackground={true} showLogoHeader={false} />
        </View>

        <View style={styles.statGrid}>
          <View style={styles.statPill}>
            <Text style={styles.statIcon}>⚔️</Text>
            <Text style={styles.statVal}>{stats.power}</Text>
            <Text style={styles.statLbl}>PWR</Text>
          </View>
          <View style={styles.statPill}>
            <Text style={styles.statIcon}>⚡</Text>
            <Text style={styles.statVal}>{stats.speed}</Text>
            <Text style={styles.statLbl}>SPD</Text>
          </View>
          <View style={styles.statPill}>
            <Text style={styles.statIcon}>🧠</Text>
            <Text style={styles.statVal}>{stats.intelligence}</Text>
            <Text style={styles.statLbl}>INT</Text>
          </View>
          <View style={styles.statPill}>
            <Text style={styles.statIcon}>✨</Text>
            <Text style={styles.statVal}>{stats.energy}</Text>
            <Text style={styles.statLbl}>NRG</Text>
          </View>
        </View>

        <View style={styles.footerRow}>
          <Text style={styles.serialText}>ID: #{id.toUpperCase()}</Text>
          <Text style={styles.brandText}>PLAYYS TRUMP CARD</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBorder: {
    backgroundColor: "#FACC15",
    borderRadius: 24,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 10,
  },
  cardInner: {
    flex: 1,
    backgroundColor: "#0F172A",
    borderRadius: 18,
    padding: 12,
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#FEF08A",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  elementBadge: {
    backgroundColor: "#1E293B",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#38BDF8",
  },
  elementText: {
    color: "#F8FAFC",
    fontSize: 12,
    fontWeight: "bold",
  },
  rarityBadge: {
    backgroundColor: "#7C3AED",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rarityText: {
    color: "#FDE047",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1,
  },
  characterName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 4,
  },
  archetypeTitle: {
    color: "#94A3B8",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 1,
  },
  svgContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    padding: 4,
  },
  statGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1E293B",
    borderRadius: 14,
    padding: 6,
  },
  statPill: {
    alignItems: "center",
  },
  statIcon: {
    fontSize: 13,
  },
  statVal: {
    color: "#FACC15",
    fontSize: 13,
    fontWeight: "900",
  },
  statLbl: {
    color: "#64748B",
    fontSize: 9,
    fontWeight: "800",
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
    paddingTop: 4,
    borderTopWidth: 1,
    borderTopColor: "#334155",
  },
  serialText: {
    color: "#64748B",
    fontSize: 10,
    fontWeight: "700",
  },
  brandText: {
    color: "#38BDF8",
    fontSize: 10,
    fontWeight: "800",
  },
});
