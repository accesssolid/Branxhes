import Toast from "react-native-toast-message";
import checkVersion from "react-native-store-version";
import DeviceInfo from "react-native-device-info";
import { urls } from "../constants/urls";
import { config, Mode } from "../../config";
import { PermissionsAndroid, Platform, Text, TextInput } from "react-native";
import { check, PERMISSIONS, request } from "react-native-permissions";


interface AppUtilsInterface {
  validatePhone: (phone: string) => boolean;
  validateEmail: (email: string) => boolean;
  showToast: (text: string, isSuccess?: boolean) => void;
  showLog: (message: string, ...optionalParams: any[]) => void;
  disableFontScale: () => void;
  adaCompliance: () => void;
  checkAppVersion: () => Promise<boolean>;
  checkCameraPermisssion:() => Promise<boolean>;
  checkGalleryPermisssion:() => Promise<boolean>;
}

const AppUtils: AppUtilsInterface = {
  //Phone validation
  validatePhone: (phone: string) => {
    var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  },

  //Email validation
  validateEmail: (email: string) => {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  },

  // Toast
  showToast: (text: string, isSuccess?: boolean) => {
    setTimeout(() => {
      Toast.show({
        type: isSuccess ? 'success' : 'error',
        text1: (text?.trim() ?? "") == "" ? "Something went wrong" : text,
        position: 'top', topOffset: 75
      });
    }, 800);
  },

  // LOG
  showLog: (message: string, ...optionalParams: any[]) => {
    config.mode === Mode.DEV && console.log(message, ...optionalParams);
  },

  // Disable font size increase from phone settings
  disableFontScale: () => {
    (Text as any).defaultProps = (Text as any).defaultProps || {};
    (Text as any).defaultProps.allowFontScaling = false;
    (TextInput as any).defaultProps = (TextInput as any).defaultProps || {};
    (TextInput as any).defaultProps.allowFontScaling = false;
  },

  // Enable Ada compliance
  adaCompliance: () => {
    if ((TextInput as any).defaultProps == null) {
      (TextInput as any).defaultProps = {};
      (TextInput as any).defaultProps.maxFontSizeMultiplier = 1.4;
    }
    if ((Text as any).defaultProps == null) {
      (Text as any).defaultProps = {};
      (Text as any).defaultProps.maxFontSizeMultiplier = 1.4;
    }
  },

  checkCameraPermisssion: async () => {
    if (Platform?.OS == "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera to take pictures.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED
    } else {
      let result = await check(PERMISSIONS.IOS.CAMERA)
      if (result != "granted") {
        let stat = await request(PERMISSIONS.IOS.CAMERA)
        return stat == "granted"
      }
      return true
    }
  },

  checkGalleryPermisssion: async () => {
    if (Platform?.OS == "android") {
      const granted = await PermissionsAndroid.request(
        Platform.Version >= 33 ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Gallery Permission',
          message: 'This app needs access to your gallery to take pictures.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED
    } else {
      let result = await check(PERMISSIONS.IOS.PHOTO_LIBRARY)
      if (result == "limited") {
        return true
      }
      if (result != "granted") {
        let stat = await request(PERMISSIONS.IOS.PHOTO_LIBRARY)
        if (stat == "limited") {
          return true
        }
        return stat == "granted"
      }
      return true
    }
  },


  // Check Update with live version's
  checkAppVersion: async () => {
    try {
      const check = await checkVersion({
        version: DeviceInfo.getVersion(), // app local version
        iosStoreURL: urls.iosAppLink,
        androidStoreURL: urls.androidAppLink,
      });
      if (check.result === "new") {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      AppUtils.showLog(e as string);
      return false;
    }
  },
};

export default AppUtils;
