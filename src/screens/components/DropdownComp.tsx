import { View, Text, StyleSheet, Pressable, TextStyle, ViewStyle } from 'react-native';
import React, { useContext, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import FastImage,{ImageStyle} from 'react-native-fast-image';
import { hp } from '../../utils/dimension';
import AppFonts from '../../constants/fonts';
import { LocalizationContext } from '../../localization/localization';

interface DorpdownCompProps {
    dataList?: Array<{
        imgChecked?: any;
        imgUnchecked?: any;
        detailSelectText?: string;
    }>;
    viewStyle?: ViewStyle;
    imgsStyle?: ImageStyle; 
    onRightPress?: () => void;
    mainTittle?: string;
    tittleTxtModal2?: string;
    tittleTxtModal?: string;
    txtStyle?: TextStyle;
    tittleTextOne?:string;
    optionStyles?: ViewStyle;
    headTitle?: string;
    headTxtSty?: TextStyle;
    selectedOption?: (value: string) => void;
}
const DorpdownComp: React.FC<DorpdownCompProps> = ({
    viewStyle,
    dataList,
    imgsStyle,
    tittleTxtModal,
    mainTittle,
    optionStyles,
    headTitle,
    headTxtSty,
    selectedOption
}) => {
    const { colors, images } = useTheme() as any;
    const styles = style(colors);
    const { localization } = useContext(LocalizationContext) as any
    const [showList, setShowList] = useState<boolean>(false);
    const [selectedText, setSelectedText] = useState<string | null>(null);

    const handleItemPress = (text: string) => {
        setSelectedText(text);
        setShowList(false);
        if(selectedOption) {
            selectedOption(text)
        }
    };

    return (
        <>
            

            <Pressable style={[styles.parent, viewStyle]} onPress={() => setShowList(!showList)}>
            {headTitle && <Text style={[styles.headSty,headTxtSty]}>{headTitle}</Text>}
                
                {(
                    <View style={styles.subChild}>
                        <Text style={[styles.txtTittle]}>
                            {selectedText == "This document" ? localization.appkeys.singlDoc : selectedText ?? mainTittle}
                        </Text>
                        <Pressable onPress={() => setShowList(!showList)}>
                            <FastImage resizeMode="contain" source={ showList?images.upArrowIcon:images.downArrow}
                            style={[styles.rightImgStyle, imgsStyle]} />
                        </Pressable>
                    </View>
                )}


            </Pressable>

            {showList &&
                <View style={styles.dropContainer}>
                    {dataList?.map((item, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleItemPress(item.detailSelectText ?? '')}
                            style={[styles.checksStyle, optionStyles, {backgroundColor: selectedText === item.detailSelectText ? colors.secendory1 : "white"}]}
                        >
                          {tittleTxtModal &&  <FastImage
                                source={selectedText === item.detailSelectText ? images.selectedCircleIcon : images.notSelectCircleIcon}
                                resizeMode="contain"
                                style={{ height: hp(2.4), width: hp(2.4) }}
                            />}

                            <Text style={[styles.txt2Tittle]}>{item.detailSelectText}</Text>
                        </Pressable>
                    ))}
                </View>}
        </>

    );
};

const style = (colors: any) =>
    StyleSheet.create({
        parent: {
            width:"90%",
            height:hp(6.8),
            backgroundColor: colors.background,
            borderRadius: 11,
            paddingHorizontal: hp(2),
            justifyContent: 'center',
            alignSelf:"center"
        },
        subChild: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            bottom:2

        },
        dropContainer: {
         backgroundColor: colors.background,
         marginTop: 10,
         paddingVertical:5,
         paddingHorizontal:5,
         width: "90%",
         flexWrap: 'wrap',
         borderRadius: 11,
         justifyContent:"center",
         alignSelf:"center",
        },
        txtTittle: {
            fontFamily: AppFonts.SemiBold,
            fontSize: 14,
            color: "#242222",
            textAlign: 'left',
        },
        checksStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf:"center",
            width:"100%",
            paddingVertical:8,
            borderRadius:5
        },
        txt2Tittle: {
            fontFamily: AppFonts.Medium,
            fontSize: 14,
            color: colors.textBlack,
            textAlign: 'left',
            paddingLeft: hp(1.5),
            marginVertical:hp(0.5)
        },
        rightImgStyle: {
            width:hp(1.75),
            height: hp(1),
            resizeMode: 'contain',
        },
          headSty:{
            textAlign: "left",
            fontSize: 14,
            fontFamily: AppFonts.SemiBold,
            color: colors.textblack,
            marginLeft:10,
            position:"absolute",
            top:-23
          }
    });

export default DorpdownComp;