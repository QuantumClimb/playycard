import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, useWindowDimensions } from "react-native";
import { QuizQuestion, CharacterStats } from "../../types/card";
import { QUIZ_QUESTIONS } from "../../data/questions";

interface QuestionnaireWizardProps {
  onComplete: (accumulatedStats: CharacterStats) => void;
  onBack: () => void;
}

export const QuestionnaireWizard: React.FC<QuestionnaireWizardProps> = ({
  onComplete,
  onBack,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [stats, setStats] = useState<CharacterStats>({
    power: 50,
    speed: 50,
    intelligence: 50,
    energy: 50,
    courage: 50,
  });

  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < 600;

  const question: QuizQuestion = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (option: QuizQuestion["options"][0]) => {
    const newStats = { ...stats };
    if (option.statBoost.power) newStats.power = Math.min(100, newStats.power + option.statBoost.power);
    if (option.statBoost.speed) newStats.speed = Math.min(100, newStats.speed + option.statBoost.speed);
    if (option.statBoost.intelligence) newStats.intelligence = Math.min(100, newStats.intelligence + option.statBoost.intelligence);
    if (option.statBoost.energy) newStats.energy = Math.min(100, newStats.energy + option.statBoost.energy);
    if (option.statBoost.courage) newStats.courage = Math.min(100, newStats.courage + option.statBoost.courage);

    setStats(newStats);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(newStats);
    }
  };

  return (
    <ScrollView style={styles.scrollWrapper} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Back to Design</Text>
        </TouchableOpacity>
        <Text style={styles.progressText}>
          QUESTION {currentStep + 1} OF {QUIZ_QUESTIONS.length}
        </Text>
      </View>

      <View style={[styles.questionCard, isMobile && styles.questionCardMobile]}>
        <Text style={styles.questionTitle}>{question.question}</Text>
        <Text style={styles.questionSubtitle}>{question.subtitle}</Text>

        <View style={styles.optionsGrid}>
          {question.options.map((opt, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleSelectOption(opt)}
            >
              <Text style={styles.optionIcon}>{opt.icon}</Text>
              <View style={styles.optionTextCol}>
                <Text style={styles.optionLabel}>{opt.label}</Text>
                <Text style={styles.optionDesc}>{opt.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
    paddingBottom: 40,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: 700,
    marginBottom: 16,
  },
  backBtn: {
    padding: 6,
  },
  backBtnText: {
    color: "#2563EB",
    fontSize: 13,
    fontWeight: "800",
  },
  progressText: {
    color: "#4F46E5",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1,
  },
  questionCard: {
    width: "100%",
    maxWidth: 700,
    backgroundColor: "#F8FAFC",
    borderRadius: 24,
    padding: 24,
    borderWidth: 2,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  questionCardMobile: {
    padding: 16,
    borderRadius: 18,
  },
  questionTitle: {
    color: "#0F172A",
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 4,
  },
  questionSubtitle: {
    color: "#64748B",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  optionsGrid: {
    gap: 10,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#CBD5E1",
  },
  optionIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  optionTextCol: {
    flex: 1,
  },
  optionLabel: {
    color: "#0F172A",
    fontSize: 15,
    fontWeight: "800",
  },
  optionDesc: {
    color: "#64748B",
    fontSize: 11,
    marginTop: 2,
  },
});
