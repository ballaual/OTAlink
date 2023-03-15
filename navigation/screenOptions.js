import { useColorScheme } from "react-native";
import { lightStyles, darkStyles } from "../styles/appStyles";
import { TransitionPresets } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

export function screenOptions() {
    const styles = useColorScheme() === "light" ? lightStyles : darkStyles;
  
    return {
      headerShown: true,
      headerStyle: styles.background,
      headerTitleStyle: styles.text,
      ...TransitionPresets.SlideFromRightIOS,
      gestureEnabled: true,
      detachPreviousScreen: false,
      headerBackImage: () => (
        <Ionicons name="arrow-back" size={24} style={styles.text} />
      ),
    };
  }