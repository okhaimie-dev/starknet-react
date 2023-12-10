import { View, Image, Text, Button } from "react-native";
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from "react";

export default function Welcome({ navigation }: {
  navigation: NavigationProp<ParamListBase>;
}) {
  navigation.setOptions({
    headerShown: false
  })
  return (
    <View>
      <View style={styles.container_1}>
        <Text style={{ color: "#008080", fontSize: 25, fontWeight: "700" }}>COMPANION APP</Text>
      </View>
      <View style={styles.container_1}>
        <Image source={require('../assets/welcome.png')} style={{ width: '100%', height: 250 }} />
      </View>
      <View style={styles.container_2}>
        <Text style={{ textAlign: "center" }}>
          <Text style={{ color: "#000000", fontSize: 25, fontWeight: "700" }}>Welcome To </Text>
          <Text style={{ color: "#008080", fontSize: 25, fontWeight: "700" }}>Companion App</Text>
        </Text>
      </View>
      <View style={styles.container_3}>
        <Text style={{ textAlign: "center", color: "#000000", fontSize: 18 }}>
          Providing an easy way to communicate with your arcade account
        </Text>
      </View>
      <View style={styles.button_container}>
        <Button title="Get Started" onPress={() => { navigation.navigate("Setup") }} color="#ffffff" />
      </View>
    </View>
  );
}

const styles = {
  container_1: {
    paddingHorizontal: 20,
    marginTop: 100
  },
  container_2: {
    paddingHorizontal: 20,
    marginTop: 50
  },
  container_3: {
    paddingHorizontal: 20,
    marginTop: 25
  },
  button_container: {
    marginHorizontal: 20,
    marginTop: 25,
    backgroundColor: "#008080",
    paddingVertical: 10,
    borderRadius: 25
  },
}
