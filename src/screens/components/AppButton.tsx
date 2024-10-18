
import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  Image,
  Pressable,
  View
} from "react-native";
import AppFonts from "../../constants/fonts";
import { hp } from "../../utils/dimension";
interface AppBtnProps {
  btnStyle?: ViewStyle;
  txtStyle?: TextStyle;
  titleTxt?: string;
  onPress?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  img?: any,
  imgTintColor?: any;

}

const AppButton: React.FC<AppBtnProps> = ({
  btnStyle,
  txtStyle,
  titleTxt,
  onPress,
  isLoading,
  disabled = false,
  img,
  imgTintColor,
}) => {
  const { colors } = useTheme() as any;
  const styles = style(colors)
  return (

    <View style={[styles.btn, btnStyle]}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={[styles.btnContent, disabled && styles.disabled]}
      >
        {isLoading && <ActivityIndicator />}
        {img && <Image tintColor={imgTintColor} source={img} style={{ width: hp(2.85), height: hp(2.85), marginHorizontal: 8 }} />}
        {!isLoading && (
          <Text style={[styles.btntxt, txtStyle]}>
            {titleTxt}
          </Text>
        )}
      </Pressable>
    </View>

  );
};

const style = (colors: any) => StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 30,
    flexDirection: 'row',
    height: hp(6.5),
    backgroundColor: colors.secendory,
    alignSelf: "center"
  },
  btntxt: {
    fontSize: 16,
    color: colors.textWhite,
    textAlign: "center",
    fontFamily: AppFonts.Medium
  },
  disabled: {
    backgroundColor: colors.borderWhite,
  },
  btnContent: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
});
export default AppButton;