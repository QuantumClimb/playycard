import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { CharacterConfig } from "../../types/card";
import { HEADS, POSES, SYMBOLS, BACKGROUNDS } from "../../data/assets";
import { PlayyComposition } from "../playys/PlayyComposition";

interface CharacterConfiguratorProps {
  config: CharacterConfig;
  onChangeConfig: (config: CharacterConfig) => void;
  onNext: () => void;
}

export const CharacterConfigurator: React.FC<CharacterConfiguratorProps> = ({
  config,
  onChangeConfig,
  onNext,
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < 768;

  const canvasWidth = Math.min(windowWidth - 48, 280);
  const canvasHeight = canvasWidth * 1.28;

  return (
    <ScrollView
      style={styles.scrollWrapper}
      contentContainerStyle={[
        styles.container,
        isMobile ? styles.containerMobile : styles.containerDesktop,
      ]}
    >
      <View style={[styles.previewSection, isMobile && styles.previewSectionMobile]}>
        <Text style={styles.stepTitle}>STEP 1: DESIGN YOUR PLAYY HERO</Text>
        <View style={[styles.canvasCard, { width: canvasWidth + 20, height: canvasHeight + 20 }]}>
          <PlayyComposition config={config} mode="color" showBackground={true} showLogoHeader={false} />
        </View>

        <View style={[styles.nameInputContainer, { width: canvasWidth + 20 }]}>
          <Text style={styles.inputLabel}>HERO NAME:</Text>
          <TextInput
            style={styles.nameInput}
            value={config.name}
            onChangeText={(text) => onChangeConfig({ ...config, name: text })}
            placeholder="Enter Hero Name..."
            placeholderTextColor="#94A3B8"
            maxLength={18}
          />
        </View>
      </View>

      <View style={[styles.controlsSection, isMobile && styles.controlsSectionMobile]}>
        <Text style={styles.sectionHeader}>1. SELECT CHARACTER HEAD</Text>
        <View style={styles.optionsRow}>
          {HEADS.map((hd) => (
            <TouchableOpacity
              key={hd.id}
              style={[
                styles.optionChip,
                config.head === hd.id && styles.optionChipActive,
              ]}
              onPress={() => onChangeConfig({ ...config, head: hd.id })}
            >
              <Text
                style={[
                  styles.chipText,
                  config.head === hd.id && styles.chipTextActive,
                ]}
              >
                {hd.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionHeader}>2. SELECT BODY POSE</Text>
        <View style={styles.optionsRow}>
          {POSES.map((ps) => (
            <TouchableOpacity
              key={ps.id}
              style={[
                styles.optionChip,
                config.pose === ps.id && styles.optionChipActive,
              ]}
              onPress={() => onChangeConfig({ ...config, pose: ps.id })}
            >
              <Text
                style={[
                  styles.chipText,
                  config.pose === ps.id && styles.chipTextActive,
                ]}
              >
                {ps.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionHeader}>3. SELECT CHEST EMBLEM</Text>
        <View style={styles.optionsRow}>
          {SYMBOLS.map((sb) => (
            <TouchableOpacity
              key={sb.id}
              style={[
                styles.symbolChip,
                config.symbol === sb.id && styles.symbolChipActive,
              ]}
              onPress={() => onChangeConfig({ ...config, symbol: sb.id })}
            >
              <Text style={styles.symbolIcon}>{sb.icon}</Text>
              <Text
                style={[
                  styles.chipText,
                  config.symbol === sb.id && styles.chipTextActive,
                ]}
              >
                {sb.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionHeader}>4. SELECT ADVENTURE WORLD</Text>
        <View style={styles.optionsRow}>
          {BACKGROUNDS.map((bg) => (
            <TouchableOpacity
              key={bg.id}
              style={[
                styles.optionChip,
                config.background === bg.id && styles.optionChipActive,
              ]}
              onPress={() => onChangeConfig({ ...config, background: bg.id })}
            >
              <Text
                style={[
                  styles.chipText,
                  config.background === bg.id && styles.chipTextActive,
                ]}
              >
                {bg.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={onNext}>
          <Text style={styles.nextButtonText}>CONTINUE TO QUESTIONNAIRE ★</Text>
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
    padding: 16,
  },
  containerDesktop: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
  containerMobile: {
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
  },
  previewSection: {
    width: 320,
    alignItems: "center",
  },
  previewSectionMobile: {
    width: "100%",
  },
  stepTitle: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "900",
    marginBottom: 12,
    letterSpacing: 1,
    textAlign: "center",
  },
  canvasCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 8,
    borderWidth: 2,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  nameInputContainer: {
    marginTop: 14,
  },
  inputLabel: {
    color: "#64748B",
    fontSize: 11,
    fontWeight: "800",
    marginBottom: 6,
  },
  nameInput: {
    backgroundColor: "#F8FAFC",
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "800",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#CBD5E1",
  },
  controlsSection: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  controlsSectionMobile: {
    width: "100%",
  },
  sectionHeader: {
    color: "#4F46E5",
    fontSize: 12,
    fontWeight: "900",
    marginTop: 14,
    marginBottom: 8,
    letterSpacing: 1,
  },
  optionsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  optionChip: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#CBD5E1",
  },
  optionChipActive: {
    backgroundColor: "#4F46E5",
    borderColor: "#4F46E5",
  },
  chipText: {
    color: "#0F172A",
    fontSize: 12,
    fontWeight: "800",
  },
  chipTextActive: {
    color: "#FFFFFF",
  },
  symbolChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#CBD5E1",
  },
  symbolChipActive: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },
  symbolIcon: {
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: "#10B981",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 24,
    shadowColor: "#10B981",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "900",
    letterSpacing: 1,
  },
});
