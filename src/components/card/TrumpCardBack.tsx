import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GeneratedCard } from "../../types/card";

interface TrumpCardBackProps {
  card: GeneratedCard;
  width?: number;
  height?: number;
}

export const TrumpCardBack: React.FC<TrumpCardBackProps> = ({
  card,
  width = 340,
  height = 520,
}) => {
  const { stats, archetype, id } = card;

  const statItems = [
    { label: "POWER", val: stats.power, color: "#EF4444", icon: "⚔️" },
    { label: "SPEED", val: stats.speed, color: "#EAB308", icon: "⚡" },
    { label: "INTELLIGENCE", val: stats.intelligence, color: "#3B82F6", icon: "🧠" },
    { label: "ENERGY", val: stats.energy, color: "#A855F7", icon: "✨" },
    { label: "COURAGE", val: stats.courage, color: "#10B981", icon: "🦁" },
  ];

  return (
    <View style={[styles.cardBorder, { width, height }]}>
      <View style={styles.cardInner}>
        {/* Title */}
        <View style={styles.header}>
          <Text style={styles.headerTag}>CHARACTER DOSSIER</Text>
          <Text style={styles.archetypeName}>{archetype.title.toUpperCase()}</Text>
          <Text style={styles.subTitle}>{archetype.subTitle}</Text>
        </View>

        {/* Stats Bars */}
        <View style={styles.statsBox}>
          {statItems.map((st) => (
            <View key={st.label} style={styles.statRow}>
              <Text style={styles.statLabel}>{st.icon} {st.label}</Text>
              <View style={styles.barTrack}>
                <View style={[styles.barFill, { width: `${st.val}%`, backgroundColor: st.color }]} />
              </View>
              <Text style={styles.statValText}>{st.val}</Text>
            </View>
          ))}
        </View>

        {/* Special Abilities */}
        <View style={styles.abilitiesSection}>
          <Text style={styles.sectionHeader}>⚡ SPECIAL ABILITIES</Text>
          
          <View style={styles.abilityCard}>
            <View style={styles.abilityRow}>
              <Text style={styles.abilityName}>{archetype.specialAbility1.name}</Text>
              <Text style={styles.abilityDmg}>DMG: {archetype.specialAbility1.damage}</Text>
            </View>
            <Text style={styles.abilityDesc}>{archetype.specialAbility1.description}</Text>
          </View>

          <View style={styles.abilityCard}>
            <View style={styles.abilityRow}>
              <Text style={styles.abilityName}>{archetype.specialAbility2.name}</Text>
              <Text style={styles.abilityDmg}>DMG: {archetype.specialAbility2.damage}</Text>
            </View>
            <Text style={styles.abilityDesc}>{archetype.specialAbility2.description}</Text>
          </View>
        </View>

        {/* Hero Quote */}
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>"{archetype.quote}"</Text>
        </View>

        {/* Stamp & Footer */}
        <View style={styles.footerRow}>
          <Text style={styles.serial}>CARD SERIAL: #{id.toUpperCase()}</Text>
          <Text style={styles.officialSeal}>AUTHENTIC COLLECTIBLE ★</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBorder: {
    backgroundColor: "#3B82F6",
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
    borderColor: "#93C5FD",
  },
  header: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#334155",
    paddingBottom: 6,
  },
  headerTag: {
    color: "#38BDF8",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 2,
  },
  archetypeName: {
    color: "#FACC15",
    fontSize: 16,
    fontWeight: "900",
  },
  subTitle: {
    color: "#94A3B8",
    fontSize: 11,
    fontWeight: "700",
  },
  statsBox: {
    backgroundColor: "#1E293B",
    borderRadius: 12,
    padding: 8,
    marginVertical: 4,
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  statLabel: {
    color: "#F8FAFC",
    fontSize: 10,
    fontWeight: "800",
    width: 95,
  },
  barTrack: {
    flex: 1,
    height: 8,
    backgroundColor: "#334155",
    borderRadius: 4,
    overflow: "hidden",
    marginHorizontal: 6,
  },
  barFill: {
    height: "100%",
    borderRadius: 4,
  },
  statValText: {
    color: "#F8FAFC",
    fontSize: 10,
    fontWeight: "900",
    width: 25,
    textAlign: "right",
  },
  abilitiesSection: {
    marginVertical: 2,
  },
  sectionHeader: {
    color: "#FACC15",
    fontSize: 10,
    fontWeight: "900",
    marginBottom: 4,
  },
  abilityCard: {
    backgroundColor: "#1E293B",
    borderRadius: 10,
    padding: 6,
    marginVertical: 2,
    borderLeftWidth: 3,
    borderLeftColor: "#7C3AED",
  },
  abilityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  abilityName: {
    color: "#F8FAFC",
    fontSize: 11,
    fontWeight: "800",
  },
  abilityDmg: {
    color: "#EF4444",
    fontSize: 10,
    fontWeight: "900",
  },
  abilityDesc: {
    color: "#94A3B8",
    fontSize: 9,
    marginTop: 2,
  },
  quoteBox: {
    backgroundColor: "#1E1B4B",
    borderRadius: 8,
    padding: 6,
    alignItems: "center",
  },
  quoteText: {
    color: "#C4B5FD",
    fontSize: 10,
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "600",
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#334155",
    paddingTop: 4,
  },
  serial: {
    color: "#64748B",
    fontSize: 9,
    fontWeight: "700",
  },
  officialSeal: {
    color: "#FACC15",
    fontSize: 9,
    fontWeight: "900",
  },
});
