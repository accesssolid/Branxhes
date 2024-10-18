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

const EditProfile = () => {
    const navigation: any = useNavigation();
    const { colors, images } = useTheme();
    const styles = useStyles(colors);
    const [modelVisible, setModelVisible] = useState<boolean>(false);
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
                        <MainHeader tittleOne="Edit Profile"
                            imgLeft={images.backCircleIcon}
                            onLeftPress={() => navigation.goBack()} />

                        <Pressable
                            onPress={() => setModelVisible(true)}
                            style={styles.selectimgView}>
                            {
                                img?.path ? (
                                    <FastImage
                                        resizeMode="cover"
                                        source={{ uri: img?.path }}
                                        style={styles.profileImg}
                                    >
                                        <FastImage
                                            resizeMode="contain"
                                            source={images?.editicon}
                                            style={styles.editImage}
                                        />
                                    </FastImage>
                                ) : (
                                    <FastImage
                                        resizeMode="cover"
                                        source={images?.userprofile}
                                        style={styles.profileImg}
                                    >
                                        <FastImage
                                            resizeMode="contain"
                                            source={images?.editicon}
                                            style={styles.editImage}
                                        />
                                    </FastImage>
                                )
                            }


                            <Pressable
                                onPress={() => setModelVisible(true)}
                            >
                                <Text
                                    maxFontSizeMultiplier={2}
                                    style={styles.uploadspaTxt}>
                                    Change Profile Picture
                                </Text>
                            </Pressable>
                        </Pressable>
                        <SolidInput
                            viewStyle={{ marginTop: 10 }}
                            placeholder="john doe"
                            tittleText="Name"
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
                            placeholder="+1 123 456 7890"
                            tittleText="DOB"
                        />
                        <SolidInput
                            viewStyle={{ marginTop: 20 }}
                            placeholder="Coler-Goldwater Specialty Hospital,"
                            tittleText="Birth  Hospital"
                        />
                        <SolidInput
                            viewStyle={{ marginTop: 20 }}
                            placeholder="Type country"
                            tittleText="Country"
                        />
                        <SolidInput
                            viewStyle={{ marginTop: 20 }}
                            placeholder="Type City"
                            tittleText="City"
                        />

                        <View style={{ marginTop: 20 }}>
                            <AppButton
                                titleTxt="Change Password"
                                btnStyle={styles.btnSty}
                                onPress={() => navigation.navigate(AppRoutes.ChangePassword)}
                            />
                            <AppButton
                                titleTxt="Update"
                                btnStyle={styles.btnSty2}
                                onPress={() => navigation.goBack()}
                                txtStyle={{ color: "#283629" }}
                            />

                        </View>
                        <ImagePickerModal
                            attachments={(img) => {
                                setImg(img)
                            }}
                            isVisible={modelVisible}
                            onClose={() => setModelVisible(false)}
                            pressHandler={() => { setModelVisible(false) }}
                        />

                    </View>
                }
            />
        </KeyboardAwareScrollView>
    )
}

export default EditProfile

const useStyles = (colors) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },
    btnSty2: {
        marginTop: hp(4),
        marginBottom: hp(3),
        backgroundColor: colors.secendory1,
        width: "80%",
        // opacity: 0.2,
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