import {
    View,
    StyleSheet,
    SafeAreaView,
    FlatList,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { LocalizationContext } from "../../localization/localization";
import AppFonts from "../../constants/fonts";
import AppButton from "../components/AppButton";
import SolidView from "../components/SolidView";
import MainHeader from "../components/MainHeader/MainHeader";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
import ImageUpload from "../components/ImageUpload";
import SolidInput from "../components/SolidInput";
import TittleTextComp from "../components/TittleComponent/TittleTextComp";
import Participants from "../components/Participants";
import DorpdownComp from "../components/DropdownComp";
import { hp, wp } from "../../utils/dimension";
import FastImage from "react-native-fast-image";
import ImagePickerModal from "../components/ImagePikerModal/ImagePickerModal";

type AddPhotosProps = {};

const AddPhotos: React.FC<AddPhotosProps> = () => {
    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;
    const navigation: any = useNavigation();
    const dataList2 = [
        { detailSelectText: "19-19" },
        { detailSelectText: "18-18" },
    ];
    const [showModal, setShowModal] = useState<boolean>(false);
    const [img, setImg] = useState("");




    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SolidView
                linear
                isScrollEnabled
                view={
                    <>
                        <MainHeader
                            tittleOne="Add Photos"
                            imgLeft={images.backCircleIcon}
                            onLeftPress={() => navigation.goBack()}
                        />
                        <View style={styles.mainContainer}>

                            <DorpdownComp
                                dataList={dataList2}
                                mainTittle={"20-20"}
                                headTitle='Select Age'
                                viewStyle={{ marginTop: hp(4), alignSelf: "center", }}
                            />
                            <View style={{flexDirection:"row", width: "90%", alignSelf: "center",flexWrap:"wrap",marginTop:20,columnGap:10}}>

                                <FastImage source={images?.babyIcon} resizeMode="contain" style={{ height: hp(13.5), width: wp(28) }} />
                                 <FastImage source={images?.babyIcon} resizeMode="contain" style={{ height: hp(13.5), width: wp(28) }} />
                                <FastImage source={images?.babyIcon} resizeMode="contain" style={{ height: hp(13.5), width: wp(28) }} /> 

                            </View>

                            <ImageUpload viewStyle={{ width: "86%", backgroundColor: "rgba(95, 139, 122, 0.05)", height: hp(14) }} onpress={() => setShowModal(true)} />



                        </View>

                    </>

                }

            />
            <AppButton
                titleTxt="Add Profile"
                btnStyle={styles.btnSty2}
                onPress={() => navigation.navigate(AppRoutes.Age)}
            />
            <ImagePickerModal
                attachments={(img: any) => {
                    setImg(img)
                }}
                isVisible={showModal}
                onClose={() => setShowModal(false)}
                pressHandler={() => { setShowModal(false) }}
            />

        </SafeAreaView>
    );
};

export default AddPhotos;

const useStyles = (colors: any) =>
    StyleSheet.create({
        mainContainer: {
            height: "100%",
            width: "100%",
            paddingTop: 10,
            paddingBottom: 20,
            alignSelf: "center"
        },
        btnSty2: {
            position: "absolute",
            bottom: "10%",
            backgroundColor: colors.secendory,
            width: "80%",
        },

    });
