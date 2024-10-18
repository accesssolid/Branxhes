import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SolidView from '../components/SolidView'
import { useNavigation, useTheme } from '@react-navigation/native';
import AppRoutes from '../../routes/RouteKeys/appRoutes';
import AppFonts from '../../constants/fonts';
import FastImage from 'react-native-fast-image';
import { hp } from '../../utils/dimension';
import MainHeader from '../components/MainHeader/MainHeader';
import ImagePickerModal from '../components/ImagePikerModal/ImagePickerModal';
import SolidInput from '../components/SolidInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppButton from '../components/AppButton';
import ComonModel2 from '../components/ComonModel2';

const ChangePassword = () => {
    const navigation: any = useNavigation();
    const { colors, images } = useTheme();
    const styles = useStyles(colors);
    const [modalVisible, setModelVisible] = useState<boolean>(false);
    const [img, setImg] = useState("");

    return (
        <KeyboardAwareScrollView
            bounces={false}
            // keyboardShouldPersistTaps="always"
            contentContainerStyle={{ flexGrow: 1 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <SolidView
                linear
                view={
                    <View style={styles.mainContainer}>
                        <MainHeader tittleOne="Change Password"
                            imgLeft={images.backCircleIcon}
                            onLeftPress={() => navigation.goBack()} />


                        <SolidInput
                            viewStyle={{ marginTop: 30 }}
                            placeholder="Donotop|"
                            tittleText="Password"
                        />
                        <SolidInput
                            placeholder="********"
                            tittleText="New Password"
                            viewStyle={{ marginTop: 20 }}
                        />
                        <SolidInput
                            viewStyle={{ marginTop: 20 }}
                            placeholder="********"
                            tittleText="Confirm Password"
                        />
                        <View style={styles.main}></View>

                        <View style={{ marginTop: 20, marginBottom: 40 }}>

                            <AppButton
                                titleTxt="Confirm"
                                btnStyle={styles.btnSty}
                                onPress={() => { setModelVisible(true) }}
                            />
                            <ComonModel2
                                isVisible={modalVisible}
                                imgIcon={images.okIcon}
                                textFirst={"Password Changed Successfully!"}
                                textSecond={"You can use your new password to log in to your account."}
                                tittleBtnOne={"Login"}
                                onNext={() => {
                                    setModelVisible(false);
                                    setTimeout(() => {
                                        navigation.goBack();
                                    }, 700);
                                }}
                            />

                        </View>

                    </View>
                }
            />
        </KeyboardAwareScrollView>
    )
}

export default ChangePassword

const useStyles = (colors) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },
    main: {
        flex: 1,
    },
    btnSty2: {
        marginTop: hp(4),
        marginBottom: hp(3),
        backgroundColor: colors.secendory,
        width: "80%",
        opacity: 0.2,
    },
    childContainer: {
        width: "90%",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        backgroundColor: "white"
    },
    titleName: {
        fontSize: 16,
        color: colors.text,
        fontFamily: AppFonts.Medium,
        marginBottom: 10,
        fontWeight: "500"
    },
    settingTxt: {
        fontSize: 16,
        fontFamily: AppFonts?.Medium,
        fontWeight: "600",
        color: colors?.textBlack3,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10
    },
    selectimgView: {
        alignSelf: "center",
        marginTop: 30,
        alignItems: "center",
    },
    btnSty: {
        width: "80%",
        marginTop: 50
        // marginBottom: 20
    },
    uploadspaTxt: {
        fontSize: 12,
        color: colors.secendory,
        fontFamily: AppFonts.Medium,
        marginTop: 10,
        alignSelf: "center",
        fontWeight: '500'
    },
    profileImg: {
        height: 100,
        width: 100,
        borderRadius: 50,
        alignSelf: "center",
        borderWidth: 1.5,
        borderColor: colors?.profileBorder,
        alignItems: 'center',
        justifyContent: 'center'
    },
    editImage: {
        height: 20,
        width: 20
    }
})