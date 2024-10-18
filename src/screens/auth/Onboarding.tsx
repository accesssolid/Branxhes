

import { useTheme } from "@react-navigation/native";
import React, { useCallback, useRef, useState } from "react";
import { View, StyleSheet, Text, FlatList, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import SolidView from "../components/SolidView";
import FastImage from "react-native-fast-image";
import { hp, wp } from "../../utils/dimension";
import AppFonts from "../../constants/fonts";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AppRoutes from "../../routes/RouteKeys/appRoutes";

function Onboarding({ navigation }) {
    const { colors, images } = useTheme();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [currentIndex, setCurrentIndex] = useState(0);
    const styles = useStyles(colors);
    let flatRef = useRef(null)
    let data = [
        {
            title: "Preserve Your Legacy",
            description: "Every family has a story. With our app, you can document and share your unique history, ensuring that future generations can connect with their roots. Capture cherished memories, important milestones, and the values that define your family. Let your legacy live on and inspire those who come after you.",
            img: images.onboardingImg1,
        },
        {
            title: "Connect with Your Roots",
            description: "Dive deep into your family history and uncover the stories of your ancestors. Our app makes it easy to explore your lineage, helping you trace your origins and discover where you come from. Connect with your heritage, learn about your ancestors’ journeys, and enrich your understanding of who you are today. Your roots are waiting to be discovered!",
            img: images.onboardingImg2,
        },
        {
            title: "Create a Lasting Family Record",
            description: "Build a digital archive of your family’s history. Our app provides a secure space to store and organize cherished photographs, beloved stories, and memorable moments. Effortlessly access and update your family’s legacy, ensuring that every meaningful detail is preserved for future generations. Keep your family’s narrative alive and easily share it with loved ones.",
            img: images.onboardingImg3,
        },
    ];

    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);
        setCurrentIndex(roundIndex);
    }, []);

    return (
        <KeyboardAwareScrollView
            bounces={false}
            contentContainerStyle={{ flexGrow: 1 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <SolidView
                linear
                view={
                    <View style={styles.main}>
                        <View style={styles.flatlistTopView}>
                            <FlatList
                                ref={flatRef}
                                onMomentumScrollEnd={onScroll}
                                keyExtractor={(item, index) => index?.toString()}
                                data={data}
                                horizontal
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View
                                            style={[styles.topView, styles.transparentBox]}>
                                            <FastImage
                                                resizeMode="cover"
                                                style={styles.imageView}
                                                source={item?.img}
                                            />
                                            <Text style={styles.titleTxt}>{item?.title}</Text>
                                            <Text style={styles.decriptonTxt}>{item?.description}</Text>
                                        </View>
                                    );
                                }}
                            />
                            <View style={{ ...styles.dotcontain }}>
                                {data.map((i, j) => {
                                    return (
                                        <View
                                            key={j}
                                            style={[
                                                styles.dot,
                                                {
                                                    backgroundColor: currentIndex == j ? colors?.secondButtonColor : colors?.firstButtonColor
                                                }
                                            ]}
                                        ></View>
                                    );
                                })}
                            </View>
                        </View>
                        <View style={styles.emptyView}></View>
                        <View style={styles.buttonTopView}>
                            <Pressable
                                onPress={() => {
                                    navigation.navigate(AppRoutes.WelcomeSc)
                                }}
                                style={[styles?.buttonView, { backgroundColor: colors?.firstButtonColor, }]}>
                                <Text style={styles.skipTxt}>Skip</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    if (currentIndex < 2) {
                                        setCurrentIndex(currentIndex + 1)
                                        flatRef?.current?.scrollToIndex({ index: currentIndex + 1, animated: true })
                                    }
                                    else {
                                        navigation.navigate(AppRoutes.WelcomeSc)
                                    }
                                }}
                                style={[styles?.buttonView, { backgroundColor: colors?.secondButtonColor }]}>
                                <Text style={styles.nextTxt}>Next</Text>
                            </Pressable>
                        </View>
                    </View>
                }
            />
        </KeyboardAwareScrollView>
    );
}

const useStyles = (colors) =>
    StyleSheet.create({
        main: {
            flex: 1,
            alignItems: "center",
        },
        flatlistTopView: {
            width: "90%",
            marginTop: 20,
        },
        skipTxt: {
            fontFamily: AppFonts.Medium,
            fontWeight: "500",
            color: colors?.primary,
            fontSize: 15
        },
        decriptonTxt: {
            fontFamily: AppFonts.Regular,
            fontSize: 14,
            color: colors.text,
            textAlign: 'center',
            marginTop: 10,
            fontWeight: '400'
        },
        emptyView: {
            flex: 1
        },
        buttonTopView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: "90%",
            paddingBottom: 30,
            paddingTop: 20
        },
        buttonView: {
            height: 50,
            width: 150,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30
        },
        nextTxt: {
            color: colors?.backgroundWhite,
            fontFamily: AppFonts?.Medium,
            fontWeight: "500",
            fontSize: 15
        },
        dotcontain: {
            flexDirection: "row",
            width: wp(12),
            alignSelf: "center",
            justifyContent: "space-between",
            marginTop: 10,
        },
        dot: {
            height: 8,
            width: 8,
            borderRadius: 16,
            marginTop: 10,
        },
        titleTxt: {
            fontFamily: AppFonts.SemiBold,
            fontWeight: "700",
            color: colors.text,
            fontSize: 21,
            textAlign: "center",
            marginTop: 10
        },
        imageView: {
            width: "100%",
            minHeight: hp(35),
            alignSelf: "center",
            borderRadius: 10,

        },
        topView: {
            width: wp(90),
            alignItems: "center",
            borderRadius: 20,
            padding: 10,
            backgroundColor: colors?.backgroundWhite,
        },
        transparentBox: {
            opacity: 5,
        },
    });
export default Onboarding;
