import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Button, Text, View } from "react-native";
import { truncateAddress } from "../utils/functions";
import { setup_styles } from '../styles/styles';

export default function SetupScreen({ navigation }: {
  navigation: NavigationProp<ParamListBase>;
}) {
  navigation.setOptions({
    headerBackTitleVisible: false,
    headerTintColor: "#008080",
  });

  return (
    <View style={setup_styles.container}>
      <Text style={setup_styles.title}>Setup New Account</Text>
      <Text style={setup_styles.address}>{truncateAddress("0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")}</Text>
      <Text style={setup_styles.instruction}>Visit the page following page with a web browser to setup your account</Text>
      <View style={setup_styles.urlBox}>
        <Text style={setup_styles.url}>https://account.starknet-react.com</Text>
      </View>
      <View style={setup_styles.buttonContainer}>
        <Button title="Done" color="#ffffff" />
      </View>
    </View>
  );
}
