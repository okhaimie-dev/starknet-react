import { Button, H1, SizableText, YStack } from "tamagui";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <YStack
      px="$4"
      py="$4"
      justifyContent="space-between"
      height="50%"
      my="auto"
    >
      <YStack space="$4">
        <H1 textAlign="center">Welcome to the Starknet React PWA Demo</H1>
        <SizableText>
          You need to setup an account before you can use this app.
        </SizableText>
      </YStack>

      <View style={styles.yCenter}>
        <Link href="/setup" style={styles.link}>
          <Button
            style={styles.button}
            size="$6"
            backgroundColor="$green10Dark"
          >
            Get Started
          </Button>
        </Link>
      </View>
    </YStack>
  );
}

const styles = StyleSheet.create({
  yCenter: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  link: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    width: "20%",
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    color: "white",
  },
});