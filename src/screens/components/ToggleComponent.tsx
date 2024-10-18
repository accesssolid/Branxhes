import { View, Text, SafeAreaView, StyleSheet, Pressable, ViewStyle, TextStyle } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import AppFonts from '../../constants/fonts';
import { hp } from '../../utils/dimension';


interface TaskCompProps {
    textData2?: string;
    textData?: string;
    onpressLeft?: () => void;
    onpressRight?: () => void;
    viewStyle?: ViewStyle;
    textStyles?: TextStyle;
    scrheight?: any;
    paraTxtSty?: TextStyle;
}

const ToggleComponent: React.FC<TaskCompProps> = ({
    viewStyle,
    textStyles,
    textData,
    textData2,
    scrheight,
    paraTxtSty,
    onpressLeft,
    onpressRight
}) => {
    const { colors } = useTheme() as any;
    const styles = style(colors) as any;
    const [selectedPlan, setSelectedPlan] = useState<boolean>(true);

    const handleLeftPress = () => {
        if (onpressLeft) {
            onpressLeft();
        }
        setSelectedPlan(true);
    };

    const handleRightPress = () => {
        if (onpressRight) {
            onpressRight();
        }
        setSelectedPlan(false);
    };

    return (
        <View style={[styles.containStyle, scrheight]}>

            <Pressable
                style={[styles.BorderContainer, { backgroundColor: selectedPlan ? colors.secendory : "rgba(95,139,122,0.05)"},
                     viewStyle]}
                onPress={handleLeftPress}
            >
                <Text style={[styles.textDetail, { color: selectedPlan ? colors.textWhite : colors.textBlack },
                    {fontFamily:selectedPlan?AppFonts.SemiBold:AppFonts.Regular}, textStyles]}>
                    {textData}
                </Text>
            </Pressable>

            <Pressable
                style={[styles.BorderContainer, { backgroundColor: selectedPlan ? "rgba(95,139,122,0.05)" : colors.secendory }, viewStyle]}
                onPress={handleRightPress}
            >
                <Text style={[styles.textDetail, { color: selectedPlan ? colors.textBlack : colors.textWhite },
                    {fontFamily:selectedPlan?AppFonts.Regular:AppFonts.SemiBold}, paraTxtSty]}>
                    {textData2}
                </Text>
            </Pressable>

        </View>
    );
};

const style = (colors: any) => StyleSheet.create({
    BorderContainer: {
        borderRadius: 30,
        // shadowColor: colors.s,
        // shadowOffset: { height: 0, width: 1 },
        // shadowOpacity: 0.3,
        // shadowRadius: 1,
        // elevation: 3,
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
    },
    textDetail: {
        color: colors.textBlack,
        fontFamily: AppFonts.Regular,
        fontSize: 16,
        textAlign: "left",
        marginVertical: hp(1.2),
    },
    containStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius:30,
        borderColor:"rgba(95,139,122,0.40)",
        backgroundColor:colors.backgroundWhite,
        borderWidth:2,
        marginVertical: hp(1.2),
        width: "90%",
    },
});

export default ToggleComponent;
