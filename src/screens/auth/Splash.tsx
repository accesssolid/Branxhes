import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation, useTheme } from "@react-navigation/native";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
import FastImage from "react-native-fast-image";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { hp } from "../../utils/dimension";
import SolidView from "../components/SolidView";

const Splash: React.FC = () => {
  const auth = useSelector((state: any) => state.userData.auth);
  const { colors, images } = useTheme();
  const navigation: any = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      auth
        ? navigation.replace(AppRoutes.NonAuthStack)
        : navigation.replace(AppRoutes.LanguageSelect);
    }, 1000);
  }, []);

  return (
    <SolidView
      linear
      view={
        <View style={[style.parent]}>
          <FastImage
            resizeMode="contain"
            source={images.logo}
            style={style.image}
          />
          <View style={{
            position: 'absolute',
            bottom: hp(5)
          }}>
            <FastImage
              resizeMode="contain"
              source={images?.loading}
              style={{
                height: hp(5),
                width: hp(5),
              }}
            />
          </View>
        </View>
      }
    />
  );
}
const style = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  image: {
    alignSelf: "center",
    height: heightPercentageToDP(20),
    width: heightPercentageToDP(20)
  },
});
export default Splash;
