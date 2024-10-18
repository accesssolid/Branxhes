import { useTheme } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, Modal, Button, StyleSheet, Pressable, Alert, Linking } from 'react-native';
import FastImage from 'react-native-fast-image';
import AppFonts from '../../../constants/fonts';
import { hp, wp } from '../../../utils/dimension';
import ImagePicker, { Image } from 'react-native-image-crop-picker';
import AppUtils from '../../../utils/appUtils';
import { BlurView } from '@react-native-community/blur';

interface ImagePickerModalProps {
    isVisible: boolean;
    onClose?: () => void;
    onNext?: () => void;
    onNext2?: () => void;
    uploadText?: string;
    imgIcon?: any;
    attachments: (image: Image) => void;
    pressHandler: () => void;
}

const ImagePickerModal: React.FC<ImagePickerModalProps> = ({
    isVisible,
    onClose,
    onNext,
    onNext2,
    uploadText,
    imgIcon,
    attachments,
    pressHandler, }) => {
    const openGallery = async () => {
        let galleryAccess = await AppUtils.checkGalleryPermisssion()
        if (!galleryAccess) {
            Linking.openSettings()
            return
        }
        try {
            ImagePicker.openPicker({
                width: hp(23.6),
                height: hp(23.6),
                cropping: false,
                mediaType: "photo",
            }).then((image: Image) => {
                attachments(image);
                pressHandler();
            });
        } catch (error: any) {
            AppUtils.showToast(error?.message ?? "Error")
        }
    };

    const openCamera = async () => {
        let cameraAccess = await AppUtils.checkCameraPermisssion()
        if (!cameraAccess) {
            Linking.openSettings()
            return
        }
        ImagePicker.openCamera({
            width: hp(23.6),
            height: hp(23.6),
            cropping: false,
        }).then((image: Image) => {
            attachments(image);
            pressHandler();
        });
    };
    const { colors, images } = useTheme() as any;
    const styles = createStyles(colors);
    if (!isVisible) return null;

    return (

        <Modal

            transparent={true}
            visible={isVisible}
            animationType='fade'
            onRequestClose={onClose}
        >
            <BlurView
                style={styles.modalContainer}
                blurType="light"  // Adjust this for the type of blur ("light", "dark", "xlight")
                blurAmount={4}    // Adjust the amount of blur
                reducedTransparencyFallbackColor="white"
            >
                <View

                    style={styles.modalContainer}
                >

                    <View style={styles.popupContainer}>

                        <View style={{ justifyContent: "space-between", padding: 15 }}>

                            <Pressable style={styles.crossIconContainStyle} onPress={onClose}>
                                <FastImage source={images.closeIcon} style={styles.menCroosIconStyle} />
                            </Pressable>

                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.txtStyle}>{uploadText ? uploadText : "Upload Picture"}</Text>
                            </View>



                            <View style={styles.iconConatiner}>

                                <View style={{ justifyContent: "center", alignItems: "center", rowGap: 5, }}>
                                    <Pressable onPress={openCamera} style={styles.imageContainer}>
                                        <FastImage source={images.cameraIcon} resizeMode='contain' style={styles.imgStyle} />
                                    </Pressable>
                                    <Text style={[styles.termsSty, { color: colors.textBlack2 }]}>Camera</Text>
                                </View>

                                <View style={{ justifyContent: "center", alignItems: "center", rowGap: 5, }}>
                                    <Pressable onPress={openGallery} style={styles.imageContainer}>
                                        <FastImage source={imgIcon ? imgIcon : images.imageIcon} tintColor={colors.btngreen} resizeMode='contain' style={styles.imgStyle} />
                                    </Pressable>
                                    <Text style={[styles.termsSty, { color: colors.textBlack2 }]}>Photos</Text>
                                </View>

                            </View>

                        </View>
                    </View>

                </View>
            </BlurView>
        </Modal>

    );
};

export default ImagePickerModal;

const createStyles = (colors: any) => StyleSheet.create({
    modalContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: 'rgba(32, 32, 32, 0.50)',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    popupContainer: {
        // height:"21.5%",
        width: "90%",
        backgroundColor: "white",
        borderRadius: 10,
    },
    txtStyle: {
        textAlign: "center",
        fontSize: 18,
        color: colors.textBlack,
        fontFamily: AppFonts.Bold,
    },
    iconConatiner: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: "auto",
        marginTop: hp(3)
    },
    imgStyle: {
        height: hp(3),
        width: hp(3),
    },
    crossIconContainStyle: {
        position: "absolute",
        right: hp(1.37),
        height: 20,
        width: 20,
        top: 14,
        zIndex: 9999
    },
    menCroosIconStyle: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    },
    imageContainer: {
        height: 74,
        width: 74,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: colors.secendory,
        borderStyle: "dashed",
        justifyContent: "center",
        alignItems: "center"
    },
    termsSty: {
        fontSize: 14,
        fontFamily: AppFonts.Medium,
        color: colors.textBlack,
        textAlign: "left"
    }
});
