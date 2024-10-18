import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ViewStyle,
    TextStyle,
} from "react-native";
import React, { useContext } from "react";
import { useTheme } from "@react-navigation/native";
import AppFonts from "../../../constants/fonts";

interface FooterCompProp {
    viewStyle?: ViewStyle;
    txtStyle?: TextStyle;
    textOne?: string;
    textCenter?: string;
    textRight?: string;
    onPressLeft?: () => void;
    onPressCenter?: () => void;
    onPressRight?: () => void;
    isLoading?: boolean;
    gradientColors?: string[];
}

const FooterComp: React.FC<FooterCompProp> = ({
    viewStyle,
    txtStyle,
    textOne, textCenter, textRight,
    onPressLeft,
    onPressCenter,
    onPressRight,
    isLoading,
}) => {
    const { colors, images } = useTheme() as any;
    const styles = style(colors);
    return (
        <View style={[styles.parent, viewStyle]}>

            {textOne && <Text style={[styles.TxtStyle, txtStyle]} onPress={onPressLeft}>{textOne}</Text>}
            {textCenter && (
                <Text style={[styles.TxtStyle, txtStyle, { fontFamily: AppFonts.MediumItalic, fontSize: 14 }]}
                    onPress={onPressCenter}>{textCenter}</Text>
            )}
            {textRight && <Text style={[styles.TxtStyle2, txtStyle]} onPress={onPressRight}>{textRight}</Text>}

        </View>
    );
};

const style = (colors: any) =>
    StyleSheet.create({
        parent: {
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: colors.secendory1,
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginTop: 5,
            paddingVertical: 20,
        },
        TxtStyle: {
            fontSize: 14,
            fontFamily: AppFonts.Regular,
            textAlign: "center",
            color: colors.textBlack
        },
        TxtStyle2: {
            fontSize: 14,
            fontFamily: AppFonts.BoldItalic,
            textAlign: "center",
            color: colors.secendory,
            fontWeight: '700'
        }
    });

export default FooterComp;
