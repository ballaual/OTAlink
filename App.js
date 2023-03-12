import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme, Text } from "react-native";
import { lightStyles, darkStyles } from "./styles/appStyles";

import Home from "./navigation/bottomTabs/Home";
import Collection from "./navigation/bottomTabs/Collection";
import Favorites from "./navigation/bottomTabs/Favorites";
import New from "./navigation/bottomTabs/New";

import Allgemeinchirurgie from "./navigation/subTabs/Allgemeinchirurgie";
import Kardiochirurgie from "./navigation/subTabs/Kardiochirurgie";
import Gefäßchirurgie from "./navigation/subTabs/Gefäßchirurgie";
import Gynäkologie from "./navigation/subTabs/Gynäkologie";
import Kinderchirurgie from "./navigation/subTabs/Kinderchirurgie";
import Neurochirurgie from "./navigation/subTabs/Neurochirurgie";
import Orthopädie from "./navigation/subTabs/Orthopädie";
import Sonstiges from "./navigation/subTabs/Sonstiges";
import Unfallchirurgie from "./navigation/subTabs/Unfallchirurgie";
import Urologie from "./navigation/subTabs/Urologie";
import Details from "./navigation/subTabs/Details";
import Info from "./navigation/bottomTabs/Info";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CollectionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sammlung"
        component={Collection}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Allgemeinchirurgie" component={Allgemeinchirurgie} />
      <Stack.Screen name="Kardiochirurgie" component={Kardiochirurgie} />
      <Stack.Screen name="Kinderchirurgie" component={Kinderchirurgie} />
      <Stack.Screen name="Gefäßchirurgie" component={Gefäßchirurgie} />
      <Stack.Screen name="Gynäkologie" component={Gynäkologie} />
      <Stack.Screen name="Neurochirurgie" component={Neurochirurgie} />
      <Stack.Screen name="Orthopädie" component={Orthopädie} />
      <Stack.Screen name="Sonstiges" component={Sonstiges} />
      <Stack.Screen name="Unfallchirurgie" component={Unfallchirurgie} />
      <Stack.Screen name="Urologie" component={Urologie} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default function App() {
  const styles = useColorScheme() === "light" ? lightStyles : darkStyles;
  return (
    <NavigationContainer style={styles.background}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Collection") {
              iconName = focused ? "library" : "library-outline";
            } else if (route.name === "Favorites") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Info") {
              iconName = focused
                ? "information-circle"
                : "information-circle-outline";
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
            } else if (route.name === "Collection") {
              headerTitle = "Sammlung";
            } else if (route.name === "Favorites") {
              headerTitle = "Favoriten";
            } else if (route.name === "Info") {
              headerTitle = "Informationen";
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
            } else if (route.name === "Collection") {
              labelName = "Sammlung";
            } else if (route.name === "Favorites") {
              labelName = "Favoriten";
            } else if (route.name === "Info") {
              labelName = "Infos";
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
        <Tab.Screen name="Collection" component={CollectionStack} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="New" component={New} />
        <Tab.Screen name="Info" component={Info} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
