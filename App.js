import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme, StyleSheet, Text } from "react-native";

import Home from "./screens/Home";
import Library from "./screens/Library";
import Favorites from "./screens/Favorites";
import New from "./screens/New";

const Tab = createBottomTabNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const styles = colorScheme === "light" ? lightStyles : darkStyles;

  return (
    <NavigationContainer style={styles.background}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Library") {
              iconName = focused ? "library" : "library-outline";
            } else if (route.name === "Favorites") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "New") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            }

            return <Ionicons name={iconName} size={size} style={styles.text} />;
          },
          headerStyle: styles.background,
          headerShown: true,
          headerTintColor: styles.text.color,
          headerTitleAlign: "center",
          headerTitle: ({}) => {
            let headerTitle;

            if (route.name === "Home") {
              headerTitle = "Start";
            } else if (route.name === "Library") {
              headerTitle = "Sammlung";
            } else if (route.name === "Favorites") {
              headerTitle = "Favoriten";
            } else if (route.name === "New") {
              headerTitle = "Neu";
            }

            return (
              <Text style={(styles.labelText, styles.text)}>{headerTitle}</Text>
            );
          },
          headerTitleStyle: {
            fontSize: 50,
            fontWeight: "bold",
          },
          tabBarActiveTintColor: styles.text.color,
          tabBarInactiveTintColor: styles.text.color,
          tabBarStyle: styles.background,
          tabBarLabel: ({}) => {
            let labelName;

            if (route.name === "Home") {
              labelName = "Start";
            } else if (route.name === "Library") {
              labelName = "Sammlung";
            } else if (route.name === "Favorites") {
              labelName = "Favoriten";
            } else if (route.name === "New") {
              labelName = "Neu";
            }

            return (
              <Text style={(styles.labelText, styles.text)}>{labelName} </Text>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Library" component={Library} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="New" component={New} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const lightStyles = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFFF",
  },
  text: {
    color: "#000000",
  },
});

const darkStyles = StyleSheet.create({
  background: {
    backgroundColor: "#1D2935",
  },
  text: {
    color: "#FFFFFF",
  },
});
