import { Button, H1, SizableText, YStack } from "tamagui";
import { Link } from "expo-router";

export default function SetupScreen() {
  return (
    <YStack
      px="$4"
      py="$4"
      justifyContent="space-between"
      height="50%"
      my="auto"
    >
      <YStack space="$4">
        <H1 textAlign="center">Setup New Account</H1>
        <SizableText>
          You need to setup an account before you can use this app.
        </SizableText>
      </YStack>
      <Button>
        <Link href="/">Setup</Link>
      </Button>
    </YStack>
  );
}