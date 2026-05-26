import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function QuestionarioScreen({ navigation }: any) {
  const [step, setStep] = useState(0);

  const questions = [
    {
      title: "Com qual necessidade de acessibilidade você se identifica?",
      options: [
        "Mobilidade reduzida",
        "Baixa audição",
        "Baixa visão",
        "Apoio cognitivo",
      ],
    },
    {
      title: "Qual tipo de Mobilidade reduzida você tem?",
      options: [
        "Cadeirante",
        "Apoio para andar",
        "Movimento reduzido",
        "Uso de prótese",
      ],
    },
    {
      title: "Qual tipo de Baixa audição você tem?",
      options: [
        "Audição reduzida",
        "Uso de aparelho auditivo",
        "Surdez parcial",
        "Comunicação adaptada",
      ],
    },
    {
      title: "Qual tipo de Baixa visão você tem?",
      options: [
        "Visão reduzida",
        "Baixa visão parcial",
        "Pessoa com cegueira",
        "Apoio visual",
      ],
    },
    {
      title: "Qual tipo de Apoio cognitivo você tem?",
      options: [
        "Apoio no aprendizado",
        "Desenvolvimento diferenciado",
        "Necessidade de suporte",
        "Acompanhamento especializado",
      ],
    },
  ];

  const nextStep = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Quando clicar na seta na ÚLTIMA pergunta, vai direto para a Home!
      navigation.navigate("Home");
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      navigation.navigate("Cadastro");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.mainTitle}>
          Queremos conhecer mais sobre você
        </Text>

        {/* Barra de progresso baseada no layout */}
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progress,
              {
                width: `${((step + 1) / questions.length) * 100}%`,
              },
            ]}
          />
        </View>

        <Text style={styles.questionCount}>
          PERGUNTA {step + 1} DE {questions.length}
        </Text>

        <Text style={styles.questionTitle}>
          {questions[step].title}
        </Text>

        {/* Opções */}
        <View style={styles.optionsContainer}>
          {questions[step].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              activeOpacity={0.8}
            >
              <Text style={styles.optionText}>
                <Text style={styles.letter}>
                  {String.fromCharCode(65 + index)}{" "}
                </Text>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Setas de Navegação Inferiores */}
      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={prevStep}
          activeOpacity={0.7}
        >
          <Text style={styles.navText}>←</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={nextStep}
          activeOpacity={0.7}
        >
          <Text style={styles.navText}>→</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f4f0", // Fundo Off-White combinando com o fluxo das suas telas
    paddingHorizontal: 24,
    paddingTop: 20,
    justifyContent: "space-between",
  },
  topContent: {
    width: "100%",
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0d1e3d",
    marginBottom: 20,
    lineHeight: 32,
  },
  progressBar: {
    width: "100%",
    height: 6,
    backgroundColor: "#e0deda",
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 24,
  },
  progress: {
    height: "100%",
    backgroundColor: "#0d1e3d", // Azul escuro padrão inTech
  },
  questionCount: {
    fontSize: 11,
    fontWeight: "700",
    color: "#7e8a9b",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  questionTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0d1e3d",
    lineHeight: 34,
    marginBottom: 30,
  },
  optionsContainer: {
    gap: 14,
  },
  optionButton: {
    width: "100%",
    backgroundColor: "#0d1e3d",
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: "flex-start",
  },
  optionText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  letter: {
    fontWeight: "bold",
    color: "#ffdf80", // Destaque dourado nos marcadores A, B, C...
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
    paddingTop: 20,
  },
  navButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#0d1e3d",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  navText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0d1e3d",
  },
});