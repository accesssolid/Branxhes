import { useNavigation, useTheme } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import { LocalizationContext } from "../../localization/localization";
import { setAuth } from "../../redux/Reducers/userData";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
import AppUtils from "../../utils/appUtils";
import SolidBtn from "../components/SolidBtn";
import SolidView from "../components/SolidView";
import SolidInput from "../components/SolidInput";
import AppFonts from "../../constants/fonts";

const Welcome: React.FC = () => {
  const { colors, images } = useTheme();
  const { localization } = useContext(LocalizationContext);
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  useEffect(() => {
    AppUtils.showToast(localization.appkeys.welcome, true);
  }, []);
  return (
    <SolidView
      view={
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            onPress={() => { }}
            style={[style.titleText, {
              color: colors.text,
              fontFamily: AppFonts.SemiBoldItalic
            }]}
          >
            {localization.appkeys.welcome_solid}
          </Text>
          <SolidBtn
            onPress={() => {
              dispatch(setAuth(true));
              navigation.navigate(AppRoutes.NonAuthStack);
            }}
            titleTxt={localization.appkeys.go_home}
          />
        </View>
      }
    />
  );
}

const style = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 20,
    alignSelf: "center",
    textAlign: "center",
    lineHeight: 25,
  },
});
export default Welcome;
