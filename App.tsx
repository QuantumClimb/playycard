import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Image, useWindowDimensions } from "react-native";
import { CharacterConfig, GeneratedCard, CharacterStats } from "./src/types/card";
import { calculateArchetype } from "./src/data/archetypes";
import { CharacterConfigurator } from "./src/components/creator/CharacterConfigurator";
import { QuestionnaireWizard } from "./src/components/quiz/QuestionnaireWizard";
import { CardRevealContainer } from "./src/components/card/CardRevealContainer";
import { printTrumpCard } from "./src/components/print/PrintableCardSheet";

export default function App() {
  const [step, setStep] = useState<"design" | "quiz" | "card">("design");
  const [config, setConfig] = useState<CharacterConfig>({
    name: "Starlight Hero",
    head: "blue",
    pose: "hero",
    symbol: "star",
    background: "space-world",
    primaryColor: "#06B6D4",
  });
  const [generatedCard, setGeneratedCard] = useState<GeneratedCard | null>(null);

  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < 600;

  const handleQuizComplete = (stats: CharacterStats) => {
    const archetype = calculateArchetype(stats);
    const newCard: GeneratedCard = {
      id: Math.random().toString(36).substring(2, 9),
      config,
      stats,
      archetype,
      createdAt: new Date().toISOString(),
    };
    setGeneratedCard(newCard);
    setStep("card");
  };

  const handlePrint = () => {
    if (generatedCard) {
      printTrumpCard(generatedCard);
    }
  };

  const handleReset = () => {
    setStep("design");
    setGeneratedCard(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top Navbar with Assets Logo */}
      <View style={styles.navbar}>
        <Image
          source={require("./assets/Logo.png")}
          style={[styles.logoImage, isMobile && styles.logoImageMobile]}
          resizeMode="contain"
        />
        <Text style={styles.logoTagline}>★ TRUMP CARD GENERATOR ★</Text>
      </View>

      {/* Workflow Content */}
      <View style={styles.content}>
        {step === "design" && (
          <CharacterConfigurator
            config={config}
            onChangeConfig={setConfig}
            onNext={() => setStep("quiz")}
          />
        )}

        {step === "quiz" && (
          <QuestionnaireWizard
            onComplete={handleQuizComplete}
            onBack={() => setStep("design")}
          />
        )}

        {step === "card" && generatedCard && (
          <CardRevealContainer
            card={generatedCard}
            onPrint={handlePrint}
            onNewHero={handleReset}
          />
        )}
      </View>

      {/* Assets Footer Banner */}
      <View style={styles.footerContainer}>
        <Image
          source={require("./assets/footer.png")}
          style={styles.footerImage}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  navbar: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    alignItems: "center",
  },
  logoImage: {
    width: 180,
    height: 60,
  },
  logoImageMobile: {
    width: 140,
    height: 48,
  },
  logoTagline: {
    color: "#4F46E5",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 2,
    marginTop: 2,
  },
  content: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  footerContainer: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },
  footerImage: {
    width: "90%",
    height: 45,
    maxWidth: 600,
  },
});
