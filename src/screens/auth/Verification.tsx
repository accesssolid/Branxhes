import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState, useRef } from 'react';
import SolidView from '../components/SolidView';
import { useNavigation, useTheme } from '@react-navigation/native';
import AppFonts from '../../constants/fonts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LogoComp from '../components/logoComp';
import AppButton from '../components/AppButton';
import { hp } from '../../utils/dimension';
import AppRoutes from '../../routes/RouteKeys/appRoutes';
import FastImage from 'react-native-fast-image';

const Verification = () => {
    const navigation: any = useNavigation();
    const { colors, images } = useTheme();
    const styles = useStyles(colors);
    const [otp, setOtp] = useState(''); // Initialize with an empty string
    const textInputRef = useRef(null); // Create a ref for the TextInput

    // Function to format OTP by inserting a space after the third digit
    const formatOtp = (value) => {
        const cleanValue = value.replace(/[^0-9]/g, ''); // Only digits
        let formattedValue = cleanValue;

        // Format the OTP to have a space after the first three digits
        if (cleanValue.length > 3) {
            formattedValue = `${cleanValue.slice(0, 3)} ${cleanValue.slice(3, 6)}`;
        }

        // Return formatted value (space between first three and last three digits)
        return formattedValue;
    };

    // Function to handle text input changes
    const handleOtpChange = (value) => {
        const numericValue = value.replace(/[^0-9\s]/g, ''); // Remove non-numeric characters, allow space
        const formattedValue = formatOtp(numericValue); // Format the new value
        setOtp(formattedValue); // Set the OTP as the formatted value

        // Calculate cursor position
        const cursorPosition = Math.min(formattedValue.length, 7);
        setTimeout(() => {
            textInputRef.current.setNativeProps({
                selection: { start: cursorPosition, end: cursorPosition }
            });
        }, 0);
    };

    return (
        <KeyboardAwareScrollView
            bounces={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flexGrow: 1 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <SolidView
                linear
                view={
                    <View style={styles.main}>
                        <Pressable
                            onPress={() => {
                                navigation.goBack()
                            }}
                        >
                            <FastImage resizeMode='contain' source={images.backCircleIcon} style={styles.imgSty2} />
                        </Pressable>
                        <LogoComp
                            viewStyle={styles.viewStyle}
                            imgStyle={styles.imageStyle} />
                        <View style={{ marginHorizontal: 20 }}>
                            <Text
                                style={styles.VerificationTitle}
                            >
                                Verification
                            </Text>
                            <Text style={styles.discriptionTxt}>
                                We have sent a 6-digit verification code on your phone Number.
                            </Text>
                            <Text style={styles.verificationTxt}>Verification Code</Text>

                            <View
                                style={styles.inputContainer}
                            >
                                <TextInput
                                    ref={textInputRef}
                                    style={styles.input}
                                    keyboardType="number-pad"
                                    maxLength={7}
                                    value={otp}
                                    onChangeText={handleOtpChange}
                                    placeholderTextColor={colors?.text}
                                    placeholder="--- ---"
                                />
                            </View>
                            <View style={styles.bottomView}>
                                <Text style={styles.codeTxt}>Didn’t receive the code?</Text>
                                <Text style={styles.resendTxt}>Resend</Text>
                            </View>


                        </View>
                        <View style={styles.main}></View>
                        <AppButton
                            onPress={() => navigation.navigate(AppRoutes.Login)}
                            titleTxt="Verify and Continue"
                            btnStyle={styles.btnSty2}
                        />
                    </View>
                }
            />
        </KeyboardAwareScrollView>
    );
};

export default Verification;

const useStyles = (colors) =>
    StyleSheet.create({
        main: {
            flex: 1,
        },
        viewStyle: {
            marginTop: 20,
            alignSelf: 'center'
        },
        imageStyle: {
            height: hp(15),
            width: hp(15)
        },
        imgSty2: {
            height: 25,
            width: 25,
            alignSelf: 'flex-start',
            marginHorizontal: 20,
            marginTop: 20
        },
        btnSty2: {
            marginBottom: 30,
            marginTop: 50,
            backgroundColor: colors.secendory,
            width: "80%",
        },
        discriptionTxt: {
            fontFamily: AppFonts.Regular,
            fontWeight: '400',
            color: colors.text,
            fontSize: 16,
            marginTop: 10,
        },
        verificationTxt: {
            fontFamily: AppFonts?.SemiBold,
            color: colors?.text,
            fontSize: 14,
            fontWeight: '600',
            marginTop: 10,
            marginLeft:10
        },
        input: {
            fontSize: 18,
            fontFamily: AppFonts?.Regular,
            letterSpacing: 2, // Add spacing between characters
        },
        codeTxt: {
            fontSize: 12,
            fontWeight: '400',
            color: colors.text,
            fontFamily: AppFonts?.Regular
        },
        resendTxt: {
            fontFamily: AppFonts?.SemiBoldItalic,
            color: colors?.secendory,
            fontSize: 14,
            fontWeight: '600'
        },
        bottomView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10
        },
        VerificationTitle: {
            marginTop: 20,
            fontFamily: AppFonts?.SemiBold,
            color: colors?.text,
            fontWeight: '700',
            fontSize: 22,
        },
        inputContainer: {
            height: 50,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: 10,
            marginTop: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
            elevation:1,
        }
    });
