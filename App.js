import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Library from "./screens/Library";
import Favorites from "./screens/Favorites";
import New from "./screens/New";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: "#1D2935",
            },
            headerShown: true,
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            tabBarStyle: {
              backgroundColor: "#1D2935",
            },
            tabBarLabel: "Start",
            tabBarActiveTintColor: "white",
            tabBarIcon: () => (
              <MaterialIcons name="home" color="white" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            headerStyle: {
              backgroundColor: "#1D2935",
            },
            headerShown: true,
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            tabBarStyle: {
              backgroundColor: "#1D2935",
            },
            tabBarLabel: "Sammlung",
            tabBarActiveTintColor: "white",
            tabBarIcon: () => (
              <MaterialIcons name="library-books" color="white" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            headerStyle: {
              backgroundColor: "#1D2935",
            },
            headerShown: true,
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            tabBarStyle: {
              backgroundColor: "#1D2935",
            },
            tabBarLabel: "Favoriten",
            tabBarActiveTintColor: "white",
            tabBarIcon: () => (
              <MaterialIcons name="favorite" color="white" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="New"
          component={New}
          options={{
            headerStyle: {
              backgroundColor: "#1D2935",
            },
            headerShown: true,
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            tabBarStyle: {
              backgroundColor: "#1D2935",
            },
            tabBarLabel: "Neu",
            tabBarActiveTintColor: "white",
            tabBarIcon: () => (
              <MaterialIcons name="add-circle" color="white" size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
