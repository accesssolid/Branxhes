import {
    View,
    Text,
    StyleSheet,
    Alert,
    Pressable,
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
import ImagePickerModal from "../components/ImagePikerModal/ImagePickerModal";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type SignupProps = {
    navigation?: any;
};

const Signup: React.FC<SignupProps> = ({

}) => {

    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;
    const navigation: any = useNavigation();
    const [modelVisible, setModelVisible] = useState<boolean>(false);
    const [img, setImg] = useState("");
    const [accept, setAccept] = useState(false);
    return (
        <SolidView
            linear 
            view={

                <KeyboardAwareScrollView
                style={{ flex: 1 }}
                scrollEnabled={true}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
              >
                <View style={styles.mainContainer}>
                    <LogoComp
                        viewStyle={{ marginTop: 20 }}
                        imgStyle={{ height: 90, width: 90 }} />
                    <TittleTextComp tittleOne="Welcome!" textStyle={styles.labelSty} />
                    <TittleTextComp tittleOne="We’ll keep this private, Like everything you share with us." textStyle={styles.topText} />
                    <View style={styles.addProfile}>
                        <Pressable
                            style={styles.addProPic}
                            onPress={() => setModelVisible(!modelVisible)}>
                            {
                                img?.path ? (
                                    <FastImage
                                        resizeMode="cover"
                                        source={{ uri: img?.path }}
                                        style={styles.profileImg}
                                    />
                                ) : (
                                    <FastImage
                                        source={images?.uploadIcon}
                                        resizeMode="contain"
                                        style={{ height: hp(3.75), width: wp(7.35) }} />

                                )

                            }
                        </Pressable>
                        <Text style={[styles.termsSty, { color: colors.textBlack2, marginTop: 10 }]}>Add Profile Picture</Text>
                    </View>
                    <SolidInput
                        viewStyle={{ marginTop: 10 }}
                        placeholder="john doe"
                        tittleText="Name"
                    />
                    <SolidInput
                        placeholder="Johndoe911"
                        tittleText="Username"
                        viewStyle={{ marginTop: 20 }}
                    />
                    <SolidInput
                        placeholder="Johndoe911@gmail.com"
                        tittleText="Email"
                        viewStyle={{ marginTop: 20 }}
                    />
                    <SolidInput
                        viewStyle={{ marginTop: 20 }}
                        placeholder="+1 123 456 7890"
                        tittleText="Phone"
                    />
                    <SolidInput
                        viewStyle={{ marginTop: 20 }}
                        placeholder="* * * * * *"
                        tittleText="Password"
                    />
                    <SolidInput
                        viewStyle={{ marginTop: 20, marginBottom: 10 }}
                        placeholder="* * * * * *"
                        tittleText="Confirm Password"
                    />
                    <TittleTextComp tittleOne="Password must be at least 8 character long and include 1 capital letter and 1 symbol.!" textStyle={styles.conText} />
                    <View style={styles.continueCon}>
                        <Pressable
                            onPress={() => {
                                setAccept(!accept)
                            }}
                        >
                            <FastImage
                                resizeMode="contain"
                                source={accept ? images.checked : images?.unchecked}
                                style={{
                                    height: 18,
                                    width: 18,
                                }}
                            />
                        </Pressable>
                        <Text style={styles.termsSty}>{"I agree to  the "}
                            <Text style={[styles.termsSty2]} onPress={() => navigation.navigate(AppRoutes?.NonAuthStack, { screen: AppRoutes.TermsCondition })}>Terms</Text>
                            {" and "}<Text style={[styles.termsSty2]}
                                onPress={() => navigation.navigate(AppRoutes?.NonAuthStack, { screen: AppRoutes.PrivacyPolicy })}>Privacy Policy</Text>
                        </Text>
                    </View>
                    <AppButton
                        titleTxt="Sign Up"
                        btnStyle={styles.btnSty2}
                        onPress={() => navigation.navigate(AppRoutes.CompleteDetails)}
                    />
                    <FooterComp
                        onPressRight={() => navigation.navigate(AppRoutes?.Login)}
                        textOne="Already Have an account?"
                        textRight="Sign In"
                        viewStyle={styles.foterSty} />

                    <ImagePickerModal
                        attachments={(img) => {
                            setImg(img)
                        }}
                        isVisible={modelVisible}
                        onClose={() => setModelVisible(false)}
                        pressHandler={() => { setModelVisible(false) }}
                    />
                </View>
                </KeyboardAwareScrollView>
            }
        />
    );
};

export default Signup;

const useStyles = (colors: any) =>
    StyleSheet.create({
        mainContainer: {
            height: "100%",
            width: "100%",
            alignItems: "center",
            paddingTop: 25
        },
        profileImg: {
            height: 100,
            width: 100,
            borderRadius: 10,
            alignSelf: "center",
        },
        labelSty: {
            fontSize: 22,
            textAlign: "left",
            fontFamily: AppFonts.Bold,
            color: colors.textBlack,
            marginTop: 20,
        },
        topText: {
            fontSize: 16,
            fontFamily: AppFonts.Regular,
            marginTop: 5,
            color: colors.textBlack,
            textAlign: "left",
        },
        addProfile: {
            justifyContent: "center", alignItems: "center", rowGap: 5, marginTop: 20
        },
        addProPic: {
            height: hp(11.5),
            width: wp(25),
            borderRadius: 15,
            borderWidth: 1.5,
            borderColor: colors.secendory,
            borderStyle: "dashed",
            justifyContent: "center",
            alignItems: "center",
        },
        conText: {
            fontSize: 12,
            fontFamily: AppFonts.Regular,
            color: colors.textBlack,
            textAlign: "left",
            marginBottom: 15
        },
        btnSty2: {
            marginBottom: 30,
            marginTop: 20,
            backgroundColor: colors.secendory,
            width: "80%"
        },
        continueCon: {
            flexDirection: "row",
            width: "100%",
            paddingHorizontal: 20,
            columnGap: 5,
            alignItems: "center",
            marginBottom: 40,
        },
        checkImg: {
            height: 16,
            width: 16,
            borderRadius: 2,
            borderWidth: 1.5,
            borderColor: colors.secendory,
            top: 2,
            alignSelf: "flex-start"
        },
        termsSty: {
            fontSize: 14,
            fontFamily: AppFonts.Medium,//mixed not available
            color: colors.textBlack,
            textAlign: "left"
        },
        termsSty2: {
            fontSize: 14,
            fontFamily: AppFonts.Medium,//mixed not available
            color: colors.secendory,
            textAlign: "left",
            textDecorationLine: "underline",
            textDecorationColor: colors.secendory
        },
        foterSty: {
            marginTop: 20,
        }
    });
