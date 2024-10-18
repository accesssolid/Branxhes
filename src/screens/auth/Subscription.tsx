import {
    View,
    Text,
    StyleSheet,
    Alert,
    Pressable,
    SafeAreaView,
    ScrollView,
    TextInput,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { LocalizationContext } from "../../localization/localization";
import AppFonts from "../../constants/fonts";
import AppButton from "../components/AppButton";
import SolidView from "../components/SolidView";
import { hp, wp } from "../../utils/dimension";
import MainHeader from "../components/MainHeader/MainHeader";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
import ToggleComponent from "../components/ToggleComponent";
import FastImage from "react-native-fast-image";

type SubscriptionProps = {
};

const Subscription: React.FC<SubscriptionProps> = ({

}) => {

    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;
    const navigation: any = useNavigation();
    const benefits = [
        "Ad-free experience.",
        "Access to all features.",
        "Enhanced Storage",
        "Priority customer support.",
        "Early access to new features.",
    ];
    const [options, setOptions] = useState(true);
    const [showOther, setShowOther] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <SolidView
                linear
                view={
                    <>
                        <MainHeader tittleOne={localization.appkeys?.subscription}
                            imgLeft={images.backCircleIcon}
                            onLeftPress={() => navigation.goBack()} />
                      
                            <View style={styles.mainContainer}>

                             {!showOther  && <ToggleComponent textData={localization.appkeys?.monthly}
                                onpressLeft={()=>setOptions(true)}
                                onpressRight={()=>setOptions(false)}
                                 textData2={localization.appkeys?.yearly} />}

                                <View style={styles.edusty}>

                                    <View style={{ alignItems: "center", borderBottomColor: colors.borderCol, borderBottomWidth: 2, paddingBottom: 10, paddingTop: 10 }}>

                                       { showOther && <FastImage source={images.kingIcon} resizeMode="contain" style={{ height: hp(8.9), width: wp(18.50) }} />}

                                        <Text style={styles.comonText}>{showOther?localization.appkeys?.congratulations:localization.appkeys?.branxhes}</Text>

                                    {!showOther && <Text style={styles.price}>{ options ? localization.appkeys?.monthPlan:localization.appkeys?.yearPlan}</Text>}

                                       { showOther && <Text style={[styles.topText,{fontSize:16,marginBottom:10}]}>{localization.appkeys?.unlockSubs}</Text>}

                                    </View>

                                  { showOther &&  <Text style={[styles.comonText,{textAlign:"left",alignSelf:"center",marginTop:10}]}> {localization.appkeys?.benfitsUnlock}</Text>}

                                  {benefits.map((benefit, index) => (
                                        <View key={index} style={{marginTop:!showOther?hp(0.5):null}}>
                                            <Text style={[styles.containerText,{marginBottom:hp(1)}]}>{benefit}</Text>
                                        </View>
                                    ))}

                                </View>

                                {!showOther && <Text style={styles.topText}>{options?localization.appkeys?.intructionMonthly:localization.appkeys?.intructionYear}</Text>}
                                <AppButton
                                    titleTxt={showOther?localization.appkeys?.startExploring:localization.appkeys?.continue}
                                    btnStyle={styles.btnSty2}
                                    onPress={showOther?() =>navigation.navigate(AppRoutes.NonAuthStack):()=>setShowOther
                                        (true)
                                    }
                                />
                            </View>
                       
                    </>
                }
            />
        </SafeAreaView>
    );
};

export default Subscription;

const useStyles = (colors: any) =>
    StyleSheet.create({
        mainContainer: {
            height: "100%",
            width: "100%",
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 20,
        },
        topText: {
            fontSize: 12,
            fontFamily: AppFonts.Regular,
            paddingHorizontal: wp(6),
            color: colors.textBlack,
            textAlign: "center",
            marginBottom: hp(3),
            marginTop: hp(1),
        },
        comonText:{
            fontSize: 20,
            fontFamily: AppFonts.SemiBold,
            color: colors.textBlack3,
            textAlign: "center",
        },
        price:{
            fontSize: 50,
            fontFamily: AppFonts.Bold,
            color: colors.secendory,
            textAlign: "left",
        },
        containerText:{
            fontSize: 14,
            fontFamily: AppFonts.MediumItalic,
            color: colors.shadowCol,
            textAlign: "left",
            marginVertical:hp(0.5),
        },
        btnSty2: {
            marginBottom: hp(3),
            marginTop: hp(3),
            backgroundColor: colors.secendory,
            width: "80%"
        },
        edusty: {
            width: "90%",
            borderRadius: 10,
            shadowColor: colors.shadowCol,
            shadowOpacity: 0.2,
            shadowRadius: 5,
            shadowOffset: { height: 0, width: 2 },
            elevation: 4,
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: colors.backgroundWhite,
            marginBottom: 5,
            marginTop: 10
        },
    });
