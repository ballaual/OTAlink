import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { lightStyles, darkStyles } from "./styles/appStyles";
import { useColorScheme, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Home from "./navigation/bottomTabs/Home";
import Collection from "./navigation/bottomTabs/Collection";
import Favorites from "./navigation/bottomTabs/Favorites";
import New from "./navigation/bottomTabs/New";
import Info from "./navigation/bottomTabs/Info";

import Allgemeinchirurgie from "./navigation/subTabs/Allgemeinchirurgie";
import Gefäßchirurgie from "./navigation/subTabs/Gefäßchirurgie";
import Gynäkologie from "./navigation/subTabs/Gynäkologie";
import Kardiochirurgie from "./navigation/subTabs/Kardiochirurgie";
import Kinderchirurgie from "./navigation/subTabs/Kinderchirurgie";
import Neurochirurgie from "./navigation/subTabs/Neurochirurgie";
import Orthopädie from "./navigation/subTabs/Orthopädie";
import Sonstiges from "./navigation/subTabs/Sonstiges";
import Unfallchirurgie from "./navigation/subTabs/Unfallchirurgie";
import Urologie from "./navigation/subTabs/Urologie";
import Details from "./navigation/subTabs/Details";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CollectionStack() {
  const styles = useColorScheme() === "light" ? lightStyles : darkStyles;
  const CollectionStack = createStackNavigator();

  return (
    <CollectionStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: styles.background,
        headerTitleStyle: styles.text,
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: true,
        detachPreviousScreen: false,
        headerBackImage: () => (
          <Ionicons name="arrow-back" size={24} style={styles.text} />
        ),
      }}
    >
      <CollectionStack.Screen
        name="Sammlung"
        component={Collection}
        options={{ headerShown: true }}
      />
      <CollectionStack.Screen
        name="Allgemeinchirurgie"
        component={Allgemeinchirurgie}
      />
      <CollectionStack.Screen
        name="Gefäßchirurgie"
        component={Gefäßchirurgie}
      />
      <CollectionStack.Screen name="Gynäkologie" component={Gynäkologie} />
      <CollectionStack.Screen
        name="Kardiochirurgie"
        component={Kardiochirurgie}
      />
      <CollectionStack.Screen
        name="Kinderchirurgie"
        component={Kinderchirurgie}
      />
      <CollectionStack.Screen
        name="Neurochirurgie"
        component={Neurochirurgie}
      />
      <CollectionStack.Screen name="Orthopädie" component={Orthopädie} />
      <CollectionStack.Screen name="Sonstiges" component={Sonstiges} />
      <CollectionStack.Screen
        name="Unfallchirurgie"
        component={Unfallchirurgie}
      />
      <CollectionStack.Screen name="Urologie" component={Urologie} />

      <CollectionStack.Screen name="Details" component={Details} />
    </CollectionStack.Navigator>
  );
}

function FavoritesStack() {
  const styles = useColorScheme() === "light" ? lightStyles : darkStyles;
  const FavoritesStack = createStackNavigator();

  return (
    <FavoritesStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: styles.background,
        headerTitleStyle: styles.text,
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: true,
        detachPreviousScreen: false,
        headerBackImage: () => (
          <Ionicons name="arrow-back" size={24} style={styles.text} />
        ),
      }}
    >
      <FavoritesStack.Screen
        name="Favoriten"
        component={Favorites}
        options={{ headerShown: true }}
      />
      <FavoritesStack.Screen name="Details" component={Details} />
    </FavoritesStack.Navigator>
  );
}

function InfoStack() {
  const styles = useColorScheme() === "light" ? lightStyles : darkStyles;
  const InfoStack = createStackNavigator();

  return (
    <InfoStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: styles.background,
        headerTitleStyle: styles.text,
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: true,
        detachPreviousScreen: false,
        headerBackImage: () => (
          <Ionicons name="arrow-back" size={24} style={styles.text} />
        ),
      }}
    >
      <InfoStack.Screen
        name="Informationen"
        component={Info}
        options={{ headerShown: true }}
      />
    </InfoStack.Navigator>
  );
}

function TabNavigator() {
  const styles = useColorScheme() === "light" ? lightStyles : darkStyles;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        unmountOnBlur: true,
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

          return <Text style={styles.text}>{headerTitle}</Text>;
        },
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
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ title: "Start", headerShown: false }}
      />
      <Tab.Screen
        name="Collection"
        component={CollectionStack}
        options={{ title: "Sammlung", headerShown: false }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{ title: "Favoriten", headerShown: false }}
      />
      <Tab.Screen
        name="New"
        component={New}
        options={{ title: "Neu", headerShown: false }}
      />
      <Tab.Screen
        name="Info"
        component={InfoStack}
        options={{ title: "Infos", headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
