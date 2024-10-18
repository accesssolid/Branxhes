import { useTheme } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, Modal, Button, StyleSheet, Pressable, Alert } from 'react-native';
import FastImage from 'react-native-fast-image';
import AppFonts from '../../constants/fonts';
import { hp } from '../../utils/dimension';
import DorpdownComp from './DropdownComp';
import AppButton from './AppButton';
import { BlurView } from '@react-native-community/blur';
interface ComonModalProps {
    isVisible?: boolean;
    onClose?: () => void;
    onNext?: () => void;
    uploadText?: string;
    imgIcon?: any;
    
}

const ComonModal: React.FC<ComonModalProps> = ({ isVisible, onClose, onNext, uploadText   }) => {
    const { colors, images } = useTheme() as any;
    const styles = createStyles(colors);
    if (!isVisible) return null;
    const dataList2 = [
        { detailSelectText: "19-19" },
        { detailSelectText: "18-18" },
    ];


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
                blurAmount={3}    // Adjust the amount of blur
                reducedTransparencyFallbackColor="white"
            >
            <View style={styles.modalContainer}>

                <View style={styles.popupContainer}>

                        <Pressable style={styles.crossIconContainStyle} onPress={onClose}>
                            <FastImage source={images.closeIcon} style={styles.menCroosIconStyle} />
                        </Pressable>

                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.txtStyle}>{uploadText ? uploadText : "Save Memories"}</Text>
                        </View>

                        <DorpdownComp
                            dataList={dataList2}
                            mainTittle={"20-20"}
                            headTitle='Select Age'
                            viewStyle={{ marginTop: hp(4), alignSelf: "center",backgroundColor:colors.greyCol }}
                        />

                        <AppButton
                        titleTxt='Save'
                        btnStyle={{marginTop:hp(5),zIndex:9999}}
                        />

                    </View>
                </View>
                </BlurView>
        </Modal>

    );
};

export default ComonModal;

const createStyles = (colors: any) => StyleSheet.create({
    modalContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: 'rgba(32, 32, 32, 0.50)',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    popupContainer: {
        minHeight: "30%",
        maxHeight:"45%",
        width: "90%",
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal:5,
        paddingVertical:10
    },
    txtStyle: {
        textAlign: "center",
        fontSize: 18,
        color: colors.textBlack,
        fontFamily: AppFonts.Bold,
    },
    imgStyle: {
        height: 24,
        width: 30,
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
    }
});
