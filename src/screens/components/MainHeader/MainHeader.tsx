import { View, Text, StyleSheet, Pressable, ViewStyle, TextStyle, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import { hp } from '../../../utils/dimension';
import AppFonts from '../../../constants/fonts';
import FastImage, { ImageStyle } from 'react-native-fast-image';
import Popover from 'react-native-popover-view';

interface ProfileHeaderProps {
    imgLeft?: any;
    imgRight?: any;
    imgCenter?: any;
    tittleOne?: string;
    viewStyle?: ViewStyle;
    imgsStyle?: ImageStyle;
    onRightPress?: () => void;
    onLeftPress?: () => void;
    tittleSecond?: string;
    tittleCenter?: string;
    textStyle?: TextStyle;
    textCenterStyle?: TextStyle;
    tittletTwo?: string;
    viewCenterSty?: ViewStyle,
    textRight?: string;
    rightIcon?: any;
    rightIconVisible?: boolean,
    isVisible?: boolean,
    onPressRight?: () => void;
    onRequestClose?: () => void;
}

const MainHeader: React.FC<ProfileHeaderProps> = ({
    viewStyle,
    imgLeft,
    imgRight,
    imgCenter,
    tittleCenter,
    tittleOne,
    tittleSecond,
    onLeftPress,
    onRightPress,
    imgsStyle,
    textStyle,
    tittletTwo, textCenterStyle, viewCenterSty, textRight,
    rightIcon,
    rightIconVisible = true,
    isVisible,
    onPressRight,
    onRequestClose
}) => {
    const { colors, images } = useTheme() as any
    const styles = style(colors)
    return (
        <View style={[styles.container, viewStyle, {
            justifyContent: imgLeft ? "space-between" : "center",
        }]}>

            {imgLeft && <Pressable onPress={onLeftPress}>
                <FastImage resizeMode='contain' source={imgLeft} style={[styles.imgSty2, imgsStyle]} />
            </Pressable>}

            {tittleOne && <Text style={[styles.txtSty, textStyle]}>
                {tittleOne}
            </Text>}

            {tittleCenter && (
                <Text style={[styles.txtSty, { textAlign: "center", fontSize: 18 }, textCenterStyle]}>{tittleCenter}</Text>
            )}

            <Pressable style={{ 
                // height: 25, width: 30
                 }}>
                {
                    imgRight &&
                    <Pressable
                        onPress={onRightPress}
                    >
                        <FastImage resizeMode='contain' source={imgRight} style={styles.imgSty} />
                    </Pressable>
                }
                {textRight && <Text style={[styles.txtsty2]}> {textRight}</Text>}
                {
                    (rightIconVisible && rightIcon) &&
                    <Pressable
                        onPress={onPressRight}
                        style={styles.backView}
                    >
                        <Popover
                            popoverStyle={{
                                // borderTopRightRadius: 0,
                                borderRadius: 10,
                                right: 30,

                            }}
                            arrowSize={{
                                width: 0, height: 0
                            }}
                            isVisible={isVisible}
                            placement="auto"
                            from={
                                <Pressable
                                    onPress={onPressRight}>
                                    <FastImage
                                        source={images.threedot}
                                        resizeMode="contain"
                                        style={{
                                            height: 24,
                                            width: 24
                                        }} />
                                </Pressable>
                            }
                            onRequestClose={onRequestClose}
                        >
                            <View style={{
                                height: 70,
                                width: 170,
                                backgroundColor: "#5F8B7A",
                                borderRadius: 10
                            }}>

                                <TouchableOpacity
                                    // onPress={onpressFav}
                                    style={[styles.blockView, {
                                        backgroundColor: "#5F8B7A",
                                        // marginBottom: 1,
                                        // borderTopRightRadius: 10,
                                        // borderTopLeftRadius: 10,
                                        // borderBottomWidth:1,
                                        // borderBottomColor:"white"
                                    }]}>

                                    <Text
                                        // onPress={onpressFav}
                                        style={styles.deleteTxt}>
                                        Mark All as Read
                                    </Text>
                                </TouchableOpacity>
                                <View style={{
                                    height: 1,
                                    backgroundColor: "white",
                                    opacity: 0.2
                                }}></View>
                                <View style={[styles.blockView, {
                                    backgroundColor: "#5F8B7A",
                                    marginTop: 1,
                                }]}>
                                    <Text
                                        onPress={onRequestClose}
                                        style={styles.deleteTxt}>
                                        Clear all Notification
                                    </Text>
                                </View>
                            </View>
                        </Popover>

                    </Pressable>

                }
            </Pressable>

        </View>
    )
}
const style = (colors: any) => StyleSheet.create({
    container: {
        alignItems: "center",
        width: "90%",
        borderRadius: 10,
        flexDirection: 'row',
        height: 60,
        paddingHorizontal: 10,
        backgroundColor: colors.backgroundGreen,
        alignSelf: "center",
    },
    backView: {
        height: 40,
        alignItems: "center",
        justifyContent: "center",

    },
    blockView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    deleteTxt: {
        color: "white",
        fontSize: 14,
        fontFamily: AppFonts.Regular
    },
    txtSty: {
        fontSize: 18,
        textAlign: "center",
        fontFamily: AppFonts.SemiBold,
        color: colors.textBlack,
        alignSelf: "center",
    },
    imgSty: {
        height: 25,
        width: 25,
    },
    imgSty2: {
        height: 25,
        width: 25,
    },
    txtsty2: {
        fontFamily: AppFonts.Bold,
        color: colors.secendory,
        fontSize: 18,
        textAlign: "center"
    }
});

export default MainHeader