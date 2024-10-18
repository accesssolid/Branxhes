import {
    View,
    Text,
    StyleSheet,
    Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { LocalizationContext } from "../../localization/localization";
import AppFonts from "../../constants/fonts";
import AppButton from "../components/AppButton";
import SolidView from "../components/SolidView";
import LogoComp from "../components/logoComp";
import SocialAppButton from "../components/SocialAppButton";
import FooterComp from "../components/FooterComp/FooterComp";
import { hp, wp } from "../../utils/dimension";
import TittleTextComp from "../components/TittleComponent/TittleTextComp";
import FastImage from "react-native-fast-image";
import SolidInput from "../components/SolidInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/Reducers/userData";

type LoginProps = {

};

const Login: React.FC<LoginProps> = ({

}) => {

    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;
    const navigation: any = useNavigation();
    const dispatch = useDispatch();

    return (
  
            <SolidView
                // isScrollEnabled
                linear
                view={
                    <KeyboardAwareScrollView
                    bounces={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.mainContainer}>
                        <LogoComp
                            viewStyle={{ marginTop: 20 }}
                            imgStyle={{ height: 100, width: 100 }} />

                        <TittleTextComp tittleOne="Let’s Get Started!" textStyle={styles.labelSty} />
                        <TittleTextComp tittleOne="Welcome to your personal family history archive. Let's preserve your legacy together." textStyle={styles.topText} />

                        <SolidInput
                            placeholder="karan"
                            tittleText="Email"
                            viewStyle={{ marginTop: 20 }}
                        />
                        <SolidInput
                            viewStyle={{ marginTop: 20 }}
                            placeholder="* * * * * *"
                            tittleText="Password"
                        />

                        <TittleTextComp tittleOne="Forgot Password?" textStyle={styles.forgotSty}
                            onPress={() => navigation.navigate(AppRoutes?.Verification)}
                            viewStyle={{ justifyContent: "flex-end" }} />

                        <View style={{ width: "100%",position:"absolute",bottom:0 }}>
                            <AppButton
                                onPress={() => {
                                    navigation.navigate(AppRoutes.CompleteDetails)
                                    // dispatch(setAuth(true))
                                    // navigation.replace(AppRoutes.NonAuthStack)
                                }}
                                titleTxt="Sign In"
                                btnStyle={styles.btnSty2}
                            />

                            <View style={styles.continueCon}>
                                <FastImage source={images.lineIcon} resizeMode="contain" style={styles.imgSty} />
                                <Text style={styles.conText}>Or Continue With</Text>
                                <FastImage source={images.lineIcon} resizeMode="contain" style={styles.imgSty} />
                            </View>

<<<<<<< HEAD
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10,marginBottom:30,marginTop:10 }}>
                               
                                <SocialAppButton
                                    onPress={() => Alert.alert("Sign in with Google")}
                                    img={images.apple}
                                    // // tintColor={"black"}
                                    titleTxt={"Apple"}
                                    btnStyle={styles.socialSty}
                                />
                                 <SocialAppButton
                                    onPress={() => Alert.alert("Sign in with Google")}
                                    img={images.googleIcon}
                                    titleTxt={"Google"}
                                    btnStyle={styles.socialSty}
                                />
                            </View>
=======
                            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:10}}>
                        <SocialAppButton
                            onPress={() => Alert.alert("Sign in with Google")}
                            img={images.googleIcon}
                            titleTxt={"Google"}
                            btnStyle={styles.socialSty}
                        />
                        <SocialAppButton
                            onPress={() => Alert.alert("Sign in with Google")}
                            img={images.appleIcon}
                            titleTxt={"Apple"}
                            btnStyle={styles.socialSty}
                        />
                        </View>
>>>>>>> 3e1b5a7228b32842295118d68c248b41ef0ef783
                            <FooterComp
                            onPressRight={()=>navigation.navigate(AppRoutes?.Signup)}
                                textOne="Don’t Have an account?"
                                textRight="Register"
                                viewStyle={styles.foterSty} />
                        </View>
                    </View>
                    </KeyboardAwareScrollView>
                }
            />
  
    );
};

export default Login;

const useStyles = (colors: any) =>
    StyleSheet.create({
        mainContainer: {
            height: "100%",
            width: "100%",
            alignItems: "center",
            paddingTop: 25
        },
        labelSty: {
            fontSize: 22,
            textAlign: "left",
            fontFamily: AppFonts.Bold,
            color: colors.textBlack,
            marginTop: 20,
        },
        forgotSty: {
            fontSize: 14,
            textAlign: "left",
            fontFamily: AppFonts.SemiBoldItalic,
            color: colors.secendory,
            marginTop: 10,
        },
        topText: {
            fontSize: 16,
            fontFamily: AppFonts.Regular,
            marginTop: 5,
            color: colors.textBlack,
            textAlign: "left",
        },
        conText: {
            fontSize: 12,
            fontFamily: AppFonts.Regular,
            color: colors.textBlack,
            textAlign: "center",
        },
        btnSty2: {
            marginTop: hp(4),
            marginBottom: hp(3),
            backgroundColor: colors.secendory,
            width: "80%"
        },
        socialSty: {
            height: hp(6.1), width: "40%", borderWidth: 0,
            marginBottom: 10,
            shadowColor: colors.shadowCol,
            shadowOpacity: 0.1,
            shadowRadius: 5,
            shadowOffset: { height: 1, width: 2 },
            elevation: 4,
        }, continueCon: {
            flexDirection: "row", width: "100%", paddingHorizontal: 25, alignItems: "center", gap: 10, justifyContent: "center",
            marginBottom: 15,
        },
        imgSty: {
            height: 2, width: wp(23.75)
        },
    });
