import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme, Text, StatusBar, Appearance } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { lightStyles, darkStyles } from "./styles/appStyles";
import { screenOptions } from "./navigation/screenOptions";

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
import Unfallchirurgie from "./navigation/subTabs/Unfallchirurgie";
import Urologie from "./navigation/subTabs/Urologie";
import Sonstiges from "./navigation/subTabs/Sonstiges";
import Details from "./navigation/subTabs/Details";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CollectionStack() {
  const CollectionStack = createStackNavigator();

  return (
    <CollectionStack.Navigator screenOptions={screenOptions()}>
      <CollectionStack.Screen name="Sammlung" component={Collection} />
      <CollectionStack.Screen name="Allgemeinchirurgie" component={Allgemeinchirurgie} />
      <CollectionStack.Screen name="Gefäßchirurgie" component={Gefäßchirurgie} />
      <CollectionStack.Screen name="Gynäkologie" component={Gynäkologie} />
      <CollectionStack.Screen name="Kardiochirurgie" component={Kardiochirurgie} />
      <CollectionStack.Screen name="Kinderchirurgie" component={Kinderchirurgie} />
      <CollectionStack.Screen name="Neurochirurgie" component={Neurochirurgie} />
      <CollectionStack.Screen name="Orthopädie" component={Orthopädie} />
      <CollectionStack.Screen name="Unfallchirurgie" component={Unfallchirurgie} />
      <CollectionStack.Screen name="Urologie" component={Urologie} />
      <CollectionStack.Screen name="Sonstiges" component={Sonstiges} />
      <CollectionStack.Screen name="Details" component={Details} />
    </CollectionStack.Navigator>
  );
}

function FavoritesStack() {
  const FavoritesStack = createStackNavigator();

  return (
    <FavoritesStack.Navigator screenOptions={screenOptions()}>
      <FavoritesStack.Screen name="Favoriten" component={Favorites} />
      <FavoritesStack.Screen name="Details" component={Details} />
    </FavoritesStack.Navigator>
  );
}

function InfoStack() {
  const InfoStack = createStackNavigator();

  return (
    <InfoStack.Navigator screenOptions={screenOptions()}>
      <InfoStack.Screen name="Informationen" component={Info} />
    </InfoStack.Navigator>
  );
}

function TabNavigator() {
  const styles = useColorScheme() === "light" ? lightStyles : darkStyles;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.background,
        tabBarIcon: ({ focused, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Collection") {
            iconName = focused ? "library" : "library-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Info") {
            iconName = focused ? "information-circle" : "information-circle-outline";
          } else if (route.name === "New") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }

          return <Ionicons name={iconName} size={size} style={styles.text} />;
        },
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
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Collection"component={CollectionStack} options={{ headerShown: false }} />
      <Tab.Screen name="Favorites" component={FavoritesStack} options={{  headerShown: false }} />
      <Tab.Screen name="New" component={New} options={{ headerShown: false }} />
      <Tab.Screen name="Info" component={InfoStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const App = () => {
  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor={colorScheme === "dark" ? "#1D2935" : "#FFFFFF"}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTabs" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;
