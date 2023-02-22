import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Library from "./screens/Library";
import Favorites from "./screens/Favorites";
import New from "./screens/New";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
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

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#EDEDED",
          tabBarStyle: {
            backgroundColor: "#1D2935",
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: "#1D2935",
            },
            headerShown: true,
            headerTitleAlign: "center",
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
              fontWeight: "bold",
            },
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
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
              fontWeight: "bold",
            },
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
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
              fontWeight: "bold",
            },
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
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
