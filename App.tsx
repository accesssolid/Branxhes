import React, { useEffect, useState } from "react";
import { useColorScheme, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Toast from "react-native-toast-message";
import { store, persistor } from "./src/redux/Store/store";
import { LightTheme, DarkTheme } from "./src/constants/colors";
import MainStack from "./src/routes/mainStack/mainStack";
import AppUtils from "./src/utils/appUtils";
import notifee, { AndroidImportance } from "@notifee/react-native";
import messaging from "@react-native-firebase/messaging";
import UpdatePopup from "./src/screens/modals/UpdatePopup";
import { useNetInfo } from "@react-native-community/netinfo";
import NetInfo from "./src/screens/modals/NetInfo";
import { PersistGate } from "redux-persist/integration/react";
import { LocalizationProvider } from "./src/localization/localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SetAppLanguage } from './src/redux/Reducers/userData'
import { strings } from "./src/constants/variables";
import { useSafeAreaInsets, SafeAreaProvider } from "react-native-safe-area-context";
function App(): React.JSX.Element {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const netInfo = useNetInfo();
  const theme = useColorScheme();

  useEffect(() => {
    AppUtils.disableFontScale()
    checkUpdate();
    getLanguage();
    const unsubscribe = messaging().onMessage(onMessageReceived);
    messaging().setBackgroundMessageHandler(onMessageReceived);
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (netInfo.isConnected != null) {
      setIsConnected(netInfo.isConnected);
    }
  }, [netInfo.isConnected]);

  const CustomStatusBar = ({ backgroundColor }) => {
    const insets = useSafeAreaInsets();
    return (
      <View style={{ height: insets.top, backgroundColor }}>
        <StatusBar
          animated={true}
          backgroundColor={backgroundColor}
          barStyle={'dark-content'}
        />
      </View>
    );
  };


  const getLanguage = async () => {
    try {
      const value = await AsyncStorage.getItem(strings.appLanguage);
      if (value !== null) {
        const result = JSON.parse(value);
        store.dispatch(SetAppLanguage(result.appLanguage));
      }
    } catch (e) {
    } finally {
    }
  };

  const checkUpdate = async () => {
    let isNew = await AppUtils.checkAppVersion();
    setIsUpdateAvailable(isNew);
  };

  async function onMessageReceived(message: any) {
    const channelId = await notifee.createChannel({
      id: "default",
      name: "Default",
      importance: AndroidImportance.HIGH,
    });
    notifee.displayNotification({
      title: message?.notification?.title,
      body: message?.notification?.body,
      android: {
        channelId,
      },
      data: message?.data,
      ios: {
        sound: "default",
      },
    });
  }

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NetInfo isVisible={!isConnected} />
      <UpdatePopup
        onBackDropPress={() => setIsUpdateAvailable(false)}
        isVisible={isUpdateAvailable}
      />
      <LocalizationProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer theme={theme == "dark" ? DarkTheme : LightTheme}>
              <CustomStatusBar backgroundColor={"#FFFFFF"} />
              <MainStack />
              <Toast />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </LocalizationProvider>
    </SafeAreaProvider>
  );
};

export default App;
