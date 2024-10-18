import { FlatList, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SolidView from '../components/SolidView'
import { useNavigation, useTheme } from '@react-navigation/native';
import AppRoutes from '../../routes/RouteKeys/appRoutes';
import AppFonts from '../../constants/fonts';
import FastImage from 'react-native-fast-image';
import { hp, wp } from '../../utils/dimension';
import MainHeader from '../components/MainHeader/MainHeader';
import ImagePickerModal from '../components/ImagePikerModal/ImagePickerModal';
import SolidInput from '../components/SolidInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppButton from '../components/AppButton';
import RenderHTML from 'react-native-render-html';

const PrivacyPolicy = () => {
    const navigation: any = useNavigation();
    const { colors, images } = useTheme();
    const styles = useStyles(colors);
    const [modelVisible, setModelVisible] = useState<boolean>(false);
    const [img, setImg] = useState("");
    const [data, setdata] = useState({})

    const source = {
        html: `
      <p style='text-align:center;'>
       Lorem ipsum dolor sit amet consectetur. Nascetur ut pulvinar morbi in accumsan tempor sodales non justo. Faucibus leo ipsum ut diam. Porta elit consectetur nisl eu. Vitae quis lorem fermentum consequat ac porttitor. Non sed sit quam sed velit maecenas. Purus quis sed netus nunc vitae pellentesque cursus sed. Euismod in turpis egestas sit ullamcorper sit proin. Ornare praesent a orci nulla. Vitae elit consectetur habitant non enim ultrices nisl.
Pharetra eleifend vulputate dignissim blandit accumsan. Sed porttitor rutrum consectetur malesuada mauris diam mauris. Massa scelerisque varius facilisis elit quam faucibus consequat congue varius. Faucibus ac dolor aenean adipiscing maecenas maecenas sed aliquet elit. Cursus amet dignissim tincidunt quam. Enim mauris ut proin metus nunc feugiat ut id. Id sit ultrices dui ultrices vulputate dignissim vitae sagittis in. Fames faucibus ipsum lacinia donec. Consequat dolor ullamcorper cras gravida mollis nisi vitae pharetra ultrices. Neque aliquam turpis ultricies sollicitudin mattis porta quam nibh. Risus dui viverra rhoncus ut risus. Sit sed dignissim tincidunt sed fringilla. Nam vulputate diam quis adipiscing. Sed vestibulum porta sollicitudin duis turpis pharetra est.
Sed iaculis viverra urna purus velit duis nunc posuere id. Ut leo pretium morbi nibh morbi. Sit platea tincidunt ut dictum adipiscing. Mi pharetra libero ac eget at.
      </p>`
    };

    return (

        <SolidView
            linear
            view={
                <View style={styles.mainContainer}>
                    <MainHeader tittleOne="Privacy & Policy"
                        imgLeft={images.backCircleIcon}
                        onLeftPress={() => navigation.goBack()} />
                    <ScrollView
                        style={styles.container}>
                        <View style={styles.textViewContainer}>
                            <RenderHTML
                                contentWidth={200}
                                source={source}
                                baseStyle={styles.titleText}
                            />
                        </View>
                    </ScrollView>
                   

                </View>
            }
        />

    )
}

export default PrivacyPolicy

const useStyles = (colors) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },
    container: {
        flex: 1
    },
    titleText: {
        fontSize: 14,
        fontFamily: AppFonts.Regular,
        color: colors.text,
        lineHeight: 20
    },
    textViewContainer: {
        width: "95%",
        padding: 15,
        borderRadius: 15,
       
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