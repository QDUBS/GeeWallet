import { SafeAreaView } from "react-native";
import RootNavigator from "./src/navigation";

console.disableYellowBox = true;

export default function App() {
  return (
    <SafeAreaView>
      <RootNavigator />
    </SafeAreaView>
  );
}
