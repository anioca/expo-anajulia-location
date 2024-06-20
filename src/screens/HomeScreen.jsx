import React from "react";
import { Button, Surface, Text } from "react-native-paper";
import { styles } from "../config/styles";

export default function HomeScreen({ navigation }) {
  return (
    <Surface style={styles.container}>
      <Text>Bem vinda(o) ao nosso app</Text>

      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        mode="contained"
        style={styles.button}
      >
        Login
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("LocationScreen");
        }}
        mode="contained"
        style={styles.button}
      >
        Ver Localização
      </Button>

    </Surface>
  );
}
