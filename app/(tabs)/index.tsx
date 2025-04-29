// app/(tabs)/dashboard.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const DashboardScreen = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bienvenido a Kimochi</Text>
      </View>

      <View style={styles.cardsContainer}>
        <Card
          icon={<FontAwesome5 name="gamepad" size={40} color="#6a1b9a" />}
          title="Juego de Empatía"
          description="Responde a diferentes situaciones emocionales."
          onPress={() => router.push("/empatia")}
        />
        <Card
          icon={<FontAwesome5 name="award" size={40} color="#6a1b9a" />}
          title="Recompensas"
          description="Gana insignias y recompensas por tu progreso."
          // onPress={() => router.push('/rewards')}
        />
        <Card
          icon={<FontAwesome5 name="lightbulb" size={40} color="#6a1b9a" />}
          title="Consejos Motivacionales"
          description="Obtén un consejo para tu día."
          // onPress={() => router.push('/adviceapi')}
        />
      </View>
    </ScrollView>
  );
};

const Card = ({ icon, title, description, onPress }: any) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    {icon}
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardText}>{description}</Text>
    <View style={styles.cardButton}>
      <Text style={styles.buttonText}>Ir</Text>
    </View>
  </TouchableOpacity>
);

const { width } = Dimensions.get("window");
const isTablet = width > 600;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 30,
  },
  title: {
    textAlign: "center",
    fontSize: isTablet ? 32 : 24,
    fontWeight: "bold",
    color: "#6a1b9a",
    marginTop: 10,
  },
  weatherBox: {
    alignItems: "flex-end",
    marginBottom: 10,
  },
  weatherTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
  weatherInfo: {
    fontSize: 13,
  },
  errorText: {
    color: "red",
  },
  cardsContainer: {
    gap: 20,
  },
  card: {
    backgroundColor: "#f4f4f4",
    padding: isTablet ? 30 : 20,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: isTablet ? 24 : 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  cardText: {
    fontSize: isTablet ? 18 : 14,
    textAlign: "center",
    marginVertical: 10,
  },
  cardButton: {
    backgroundColor: "#6a1b9a",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default DashboardScreen;
