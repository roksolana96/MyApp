import "react-native-gesture-handler";
import { RegistrationScreen } from "./src/auth/RegistrationScreen";
import { useFonts } from "expo-font";
import {LoginScreen} from "./src/auth/LoginScreen";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/components/Home";
import {CommentsScreen} from "./src/nestedScreen/CommentsScreen";
import {MapScreen} from "./src/nestedScreen/MapScreen";
import { Header } from "./src/components/Header";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './src/redux/store';

const MainNav = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./src/fonts/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <MainNav.Navigator
              initialRouteName="Login"
              screenOptions={{ headerShown: false }}
            >
              <MainNav.Screen name="Login" component={LoginScreen} />
              <MainNav.Screen name="Register" component={RegistrationScreen} />
              <MainNav.Screen
                name="Home"
                component={Home}
                options={{
                  title: "Posts",
                }}
              />
              <MainNav.Screen
                name="Comments"
                component={CommentsScreen}
                options={{
                  header: ({ navigation, route, options }) => {
                    const title = route.name;
                    return (
                      <Header
                        title={title}
                        options={options.headerStyle}
                      />
                    );
                  },
                  headerShown: "true",
                }}
              />
              <MainNav.Screen
                name="Map"
                component={MapScreen}
                options={{
                  header: ({ navigation, route, options }) => {
                    const title = route.name;
                    return (
                      <Header
                        title={title}
                        options={options.headerStyle}
                      />
                    );
                  },
                  headerShown: "true",
                }}
              />
            </MainNav.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
